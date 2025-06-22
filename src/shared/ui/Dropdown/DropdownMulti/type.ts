import type { TDropdownBaseUIProps } from "../DropdownBase/type";
import type { TOption } from "../DropdownSingle/type";

export type TDropdownMultiUIProps = Omit<TDropdownBaseUIProps, 'children'> & {
    options: TOption[];
    onChange: (value: string) => void;
  };