type SkillData = {
	title: string;
	category: string;
	subcategory: string;
	description: string;
	images: (string | File)[];
}; // пропсы для шага 3 (примерные)

export type ReviewModalUIProps = {
	data: SkillData;
	onSave: (updatedData: SkillData) => void;
	onClose: () => void;
	onEdit: () => void;
};
