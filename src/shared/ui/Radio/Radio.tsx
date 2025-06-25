import styles from './Radio.module.scss';
import type { TRadioUIProps } from './type';

export const Radio = ({ options, value, onChange, name }: TRadioUIProps) => (
	<div className={styles.radioGroup}>
		{options.map((option) => {
			const inputId = `radio-${name}-${option.value}`;
			return (
				<div key={option.value} className={styles.radioWrapper}>
					<input
						id={inputId}
						type='radio'
						name={name}
						value={option.value}
						checked={option.value === value}
						className={styles.input}
						onChange={() => onChange?.(option.value)}
					/>
					<label htmlFor={inputId} className={styles.label}>
						<span className={styles.customCircle} />
						{option.label}
					</label>
				</div>
			);
		})}
	</div>
);

/* примерное использование в компоненте фильтры
const optionsGender: [
    {value: 'not', label: 'Без разницы'},
    {value: 'men', label: 'Мужской'},
    {value: 'women', label: 'Женский'},
]
const skills: [
    {value: 'not', label: 'навык 1'},
    {value: 'men', label: 'навык 2'},
    {value: 'women', label: 'навык 3'},
]
<h1>Пол Автора</h1>
<Radio 
name={gender}
options={optionsGender}
value={selectedValue} // Передаём текущее значение
onChange={handleRadioChange} - Передаём обработчик изменения
/>
 
 остальной код

<Radio
name={skills}
options={optionsSkills}
value={selectedValue} // Передаём текущее значение
onChange={handleRadioChange} - Передаём обработчик изменения
/> */
