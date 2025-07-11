import type { TOption as TCity } from '../../../shared/ui/Dropdown/DropdownCity/type';
import type { Option as TGender } from '../../../shared/ui/Dropdown/DropdownBase/type';
import type { Option as TCategory } from '../../../shared/ui/Dropdown/MultiSelectDropdown/type';

export type TStepTwoUIProps = {
	user: TUserType;
	isEnabled: boolean;
	city: TCity[];
	gender: TGender[];
	category: TCategory[];
	subCategory: TCategory[];
	onAddPhoto: () => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onNext: () => void;
	onBack: () => void;
	onClearCity: () => void;
	onInputChangeCity: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSelectCity?: (value: string) => void;
	onSelectGender: (value: string) => void;
	onInputDate: (date: Date) => void;
	onSelectCategory: (value: string) => void;
	onSelectSubCategory: (value: string) => void;
};

export type TUserType = {
	id: number;
	userName: string;
	city: string;
	age: number;
	dateBirthday: Date;
	gender: string;
	about: string;
	canTeach: string;
	wantsToLearnCat: string[];
	wantsToLearnSubCat: string[];
	photo: string;
};
