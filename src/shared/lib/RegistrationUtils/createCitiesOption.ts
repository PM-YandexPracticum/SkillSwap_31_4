export function createCitiesOption(allCities: string[]): { text: string }[] {
	return allCities.map((city) => ({
		text: city,
	}));
}
