import clsx from 'clsx';
import type { TDropdownBaseUIProps } from './type';
import styles from '../DropdownBase/DropdownBase.module.scss';
import ArrowDownIcon from '../../../../images/icons/chevron-down.svg';

export const DropdownBaseUI: React.FC<TDropdownBaseUIProps> = ({
    label,
    placeholder = '',
    displayText,
    isOpen,
    onToggle,
    isPlaceholderActive,
    children
  }) => {
    return (
      <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <div className={clsx(styles.dropdown, { [styles.open]: isOpen })}>
          <button 
          className={styles.button} 
          type="button"
          onClick={onToggle}>
            <span
              className={clsx({
                [styles.placeholder]: isPlaceholderActive})}
                >
              {displayText || placeholder}
            </span>
            <img
            src={ArrowDownIcon}
            className={clsx(styles.arrow, { [styles.arrowOpen]: isOpen })}
            alt="Стрелка вниз"
          />
          </button>
          {isOpen && (
          <ul
            className={styles.options}>
            {children}
          </ul>
        )}
      </div>
    </div>
  );
};