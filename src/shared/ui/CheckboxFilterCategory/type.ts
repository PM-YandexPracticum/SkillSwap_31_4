export type CheckboxFilterCategoryUIProps = {
	isChecked: boolean;
	text: string;
	categoryType: 'main' | 'sub';
	onChange: () => void;
};
