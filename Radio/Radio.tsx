import styles from './Radio.module.scss';
import type { TRadioUIProps } from './type';

export const RadioUI = ({ 
  options, 
  defaultValue, 
  onChange 
}: TRadioUIProps) => {
  return (
    <div className={styles.radioGroup}>
      {options.map((option) => (
        <label key={option.value} className={styles.label}>
          <input
            type="radio"
            name="radio"
            value={option.value}
            defaultChecked={option.value === defaultValue}
            className={styles.input}
            onChange={() => onChange && onChange(option.value)}
          />
          <span className={styles.customCircle}></span>
          {option.label}
        </label>
      ))}
    </div>
  );
};

/* использование
const options [ 
    { value: 'all', label: 'Все' },    // любые другие опции
    { value: 'women', label: 'Женский' },
    { value: 'men', label: 'Мужской' },
  ]

<Radio
  options={options}
  defaultValue="all" //знчение по умолчанию , например "Всё"
  onChange= // логика выбора значения из опций
*/