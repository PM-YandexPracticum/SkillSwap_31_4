import type { Option } from '../../ui/Dropdown/MultiSelectDropdown/type';

export function createCategoriesOption(
	selectedCategories: string[],
	allCategories: string[]
): Option[] {
	return allCategories.map((category, index) => ({
		id: index.toString(),
		text: category,
		checked: selectedCategories.includes(category),
	}));
}
