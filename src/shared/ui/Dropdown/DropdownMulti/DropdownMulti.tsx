import React from 'react';
import clsx from 'clsx';
import { DropdownBaseUI } from '../DropdownBase/DropdownBase';
import styles from './DropdownMulti.module.scss';
import type { TDropdownMultiUIProps } from './type';
import CheckboxChecked from '../../../../images/icons/checkbox-done.svg';
import CheckboxUnchecked from '../../../../images/icons/checkbox-empty.svg';


export const DropdownMultiUI: React.FC<TDropdownMultiUIProps> = ({
  label,
  placeholder,
  isOpen,
  onToggle,
  displayText,
  isPlaceholderActive,
  options,
  onChange,
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
          onClick={() => onChange(value)}
        >
          <img
            src={selected ? CheckboxChecked : CheckboxUnchecked}
            className={styles.checkbox}
          />
          <span className={styles.text}>{text}</span>
        </li>
      ))}
    </DropdownBaseUI>
  );
};