import type { TSkill } from '../../lib/types/skill';

export type TSearchProps = {
	placeholder?: string;
	value: string;
	onChange: (value: string) => void;
	onSelect?: (option: TSkill) => void;
	options?: TSkill[];
};
