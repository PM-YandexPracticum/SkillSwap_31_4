import type { CheckboxFilterCategoryUIProps } from './type';
import styles from './CheckboxFilterCategory.module.scss';
import { CheckboxSubcategoryUI } from '../CheckboxSubcategory';

export const CheckboxFilterCategoryUI = ({
	isChecked,
	text,
	id,
	onChange,
}: CheckboxFilterCategoryUIProps) => (
	<button id={id} type='button' onClick={onChange} className={styles.button}>
		<CheckboxSubcategoryUI isChecked={isChecked} />
		<span className={styles.text}>{text}</span>
	</button>
);
