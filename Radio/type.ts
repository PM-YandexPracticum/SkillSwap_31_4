export type TOption = {
    value: string;
    label: string;
}
  
export type TRadioUIProps = {
    options: TOption[];
    defaultValue?: string;
    radioName: string;
    onChange?: (value: string) => void;
  }
  