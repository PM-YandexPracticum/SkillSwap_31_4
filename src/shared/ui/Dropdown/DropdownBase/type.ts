export type TDropdownBaseUIProps = {
    label?: string;
    placeholder?: string;
    selectedOption?: string;
    isOpen: boolean;
    onToggle: () => void;
    options: TOption[];
    onSelect?: (value: string) => void;
    };
    
    export type TOption = {
    value: string; // идентификатор
    text: string; //текст опции
    };
