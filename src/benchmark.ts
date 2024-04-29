import cloneDeep from "clone-deep";
import { copy as copyAnything } from "copy-anything";
import fastCopy from "fast-copy";
import deepEqual from "fast-deep-equal";
import justClone from "just-clone";
// @ts-ignore
import justClonePrebid from "just-clone-prebid";
import { klona } from "klona/json";
import lodashCloneDeep from "lodash.clonedeep";
// @ts-ignore
import nanoCopy from "nano-copy";
import { clone as ramdaClone } from "ramda";
import { Bench } from "tinybench";
import { bidRequest } from "./bidRequest.js";

const bench = new Bench({ time: 1000, iterations: 100 });
bench
	.add("ramda", () => {
		ramdaClone(bidRequest);
	})
	.add("lodash CloneDeep", () => {
		lodashCloneDeep(bidRequest);
	})
	.add("cloneDeep", () => {
		cloneDeep(bidRequest);
	})
	.add("fastCopy", () => {
		fastCopy(bidRequest);
	})
	.add("nanoCopy", () => {
		nanoCopy(bidRequest);
	})
	.add("just-clone (v6)", () => {
		justClone(bidRequest);
	})
	.add("just-clone prebid version (v1)", () => {
		justClonePrebid(bidRequest);
	})
	.add("klona (json)", () => {
		klona(bidRequest);
	})
	.add("copyAnything", () => {
		copyAnything(bidRequest);
	})
	.add("json-parse-stringify", () => {
		JSON.parse(JSON.stringify(bidRequest));
	})
	.add("structured-clone", () => {
		structuredClone(bidRequest);
	});

(async () => {
	console.log("Starting benchmark...");

	await bench.warmup();
	await bench.run();

	//  check if all of the libraries are working
	function testDeepCopy() {
		const libraries = {
			ramda: ramdaClone,
			lodashCloneDeep: lodashCloneDeep,
			cloneDeep: cloneDeep,
			fastCopy: fastCopy,
			nanoCopy: nanoCopy,
			justClone: justClone,
			klona: klona,
			copyAnything: copyAnything,
			"json-parse-stringify": () => JSON.parse(JSON.stringify(bidRequest)),
			"structured-clone": () => structuredClone(bidRequest),
		};

		const results = [];

		for (const [name, func] of Object.entries(libraries)) {
			const copy = func(bidRequest);
			try {
				deepEqual(copy, bidRequest);
				results.push({ Library: name, Result: "✅" });
			} catch (error) {
				results.push({ Library: name, Result: "❌" });
			}
		}

		console.log("Deep copy is copying properly:");
		console.table(results);
	}

	testDeepCopy();

	// format the results
	const sortedTable = bench.table().sort((a, b) => {
		if (
			a &&
			b &&
			a["ops/sec"] &&
			b["ops/sec"] &&
			typeof a["ops/sec"] === "string" &&
			typeof b["ops/sec"] === "string"
		) {
			return (
				Number(b["ops/sec"].replace(/,/g, "")) -
				Number(a["ops/sec"].replace(/,/g, ""))
			);
		}
		return 0;
	});

	// Print the results
	console.table(sortedTable);

	//   if in browser display the results in a table
	if (typeof document !== "undefined") {
		// Create a table and a table head
		let tableHTML = `
	<table>
		<thead>
			<tr>
				${Object.keys(sortedTable[0] || {})
					.map((key) => `<th>${key}</th>`)
					.join("")}
			</tr>
		</thead>
		<tbody>
`;

		// Create table rows for each object in sortedTable
		for (const row of sortedTable) {
			tableHTML += `
		<tr>
			${Object.values(row || {})
				.map((val) => `<td>${val}</td>`)
				.join("")}
		</tr>
	`;
		}

		// Insert the table into the HTML document
		document.body.innerHTML = tableHTML;
	}
})();
