import type { TDropdownBaseUIProps } from "../DropdownBase/type";

export type TDropdownSingleUIProps = TDropdownBaseUIProps & {
    options: TOption[];
    onChange?: (value: string) => void;
  };

  export type TOption = {
	value: string;
	text: string;
  selected?: boolean
};
