import cloneDeep from "clone-deep";
import { copy as copyAnything } from "copy-anything";
import fastCopy from "fast-copy";
import justClone from "just-clone";
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
	.add("just-clone", () => {
		justClone(bidRequest);
	})
	.add("klona (json)", () => {
		klona(bidRequest);
	})
	.add("copyAnything", () => {
		copyAnything(bidRequest);
	});

await bench.warmup();
await bench.run();

// formatting the results
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
