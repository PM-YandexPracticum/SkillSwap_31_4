export type TCategories = {
	value: string;
	text: string;
};

export type TStepThreeProps = {
	isOpenCategory: boolean;
	onToggleCategory: () => void;
	categories: TCategories[];
	selectedCategoryText: string | undefined;
	onSelectCategory: (value: string) => void;
	isOpenSubcategory: boolean;
	onToggleSubcategory: () => void;
	subcategories: TCategories[];
	selectedSubcategoryText: string | undefined;
	onSelectSubcategory: (value: string) => void;
	isDisabledSubmitForm: boolean;
	skillName: string;
	skillDescription: string;
	onChangeSkillName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeSkillDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
	onBack: () => void;
};
