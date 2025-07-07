import type { TCategories } from '../../../widgets/Registration/StepThree/type';

export function createCategoriesOneOption(
	allCategories: string[]
): TCategories[] {
	return allCategories.map((category) => ({
		text: category,
		value: category,
	}));
}
