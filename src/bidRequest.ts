import { faker } from "@faker-js/faker";

function generateFakeData() {
	const adUnits = Array.from({ length: 100 }, () => ({
		bidder: faker.company.name,
		params: {
			organizationId: faker.number.int({ min: 1, max: 100 }).toString(),
			placement: faker.string.alpha(10),
			site: faker.internet.domainName(),
			adUnitElementId: faker.string.uuid(),
			pagetype: faker.word.noun(),
			category: faker.word.noun(),
			supportIObs: faker.datatype.boolean(),
		},
		adUnitCode: faker.string.uuid(),
		mediaTypes: {
			banner: {
				sizes: Array.from(
					{ length: faker.number.int({ min: 1, max: 20 }) },
					() => [
						faker.number.int({ min: 100, max: 900 }),
						faker.number.int({ min: 100, max: 900 }),
					],
				),
			},
		},
		bidId: faker.string.uuid(),
		bidderRequestId: faker.string.uuid(),
		auctionId: faker.string.uuid(),
		pageviewId: faker.string.uuid(),
	}));

	return {
		data: {
			adUnits,
		},
	};
}

export const bidRequest = generateFakeData();
