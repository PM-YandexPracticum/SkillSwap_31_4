export type TCategories = {
	value: string;
	text: string;
};

export type TStepThreeProps = {
	categories: TCategories[];
	selectedCategoryText: string | undefined;
	onSelectCategory: (value: string) => void;
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
	onChangeFiles: (files: File[]) => void;
};
