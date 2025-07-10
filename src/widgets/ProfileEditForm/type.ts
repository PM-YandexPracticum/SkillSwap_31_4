import type { TOption as TCity } from '../../shared/ui/Dropdown/DropdownCity/type';
import type { Option as TGender } from '../../shared/ui/Dropdown/DropdownBase/type';

export type TProfileEditFormProps = {
	userEmail: string;
	userName: string;
	gender: TGender[];
	city: TCity[];
	aboutMe: string;
	userPhoto: string | null;
	selectedGenderText: string | undefined;
	isOpenGender: boolean;
	isOpenCity: boolean;
	selectedCity: string | undefined;
	hasChanges: boolean;
	onSelectGender: (value: string) => void;
	onToggleGender: () => void;
	onClickCity: () => void;
	onClearCity: () => void;
	onInputChangeCity: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSelectCity?: (value: string) => void;
	onSubmit: () => void;
	onChangeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeUserEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeAboutMe: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeUserPhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onInputDate: (date: Date) => void;
};
