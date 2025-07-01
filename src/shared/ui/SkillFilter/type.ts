export type TSkillFilterUIProps = {
	label?: string;
	isAllOpen: boolean;
	textAllOpen: string;
	textAllCLose: string;
	options: TOption[];
	onChangeSingle: (id: string) => void;
	onOpenAll: () => void;
	onChangeGroup: (value: string) => void;
};

export type TOption = {
	id: string;
	parentId: string;
	text: string;
	checked: boolean;
	isOpen: boolean;
};
