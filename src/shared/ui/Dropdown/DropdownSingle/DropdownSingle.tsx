import clsx from 'clsx';
import type { TDropdownSingleUIProps } from '../DropdownSingle/type';
import { DropdownBaseUI } from '../DropdownBase/DropdownBase';
import styles from '../DropdownBase/DropdownBase.module.scss';

export const DropdownSingleUI: React.FC<TDropdownSingleUIProps> = ({
  label,
  placeholder,
  options,
  isOpen,
  onToggle,
  onChange,
  displayText,
  isPlaceholderActive,
}) => {
  return (
    <DropdownBaseUI
      label={label}
      placeholder={placeholder}
      isOpen={isOpen}
      onToggle={onToggle}
      displayText={displayText}
      isPlaceholderActive={isPlaceholderActive}
    >
      {options.map(({ value, text, selected }) => (
        <li
          key={value}
          className={clsx(styles.option, { [styles.selected]: selected })}
          onClick={() => onChange?.(value)}
        >
          <span className={styles.text}>{text}</span>
        </li>
      ))}
    </DropdownBaseUI>
  );
};