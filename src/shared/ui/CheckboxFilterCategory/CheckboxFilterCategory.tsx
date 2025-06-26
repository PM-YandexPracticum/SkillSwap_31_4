import type { CheckboxFilterCategoryUIProps } from './type';
import styles from './CheckboxFilterCategory.module.scss';
import { CheckboxSubcategoryUI } from '../CheckboxSubcategory';

export const CheckboxFilterCategoryUI = ({
	isChecked,
	text,
	id,
	onChange,
}: CheckboxFilterCategoryUIProps) => (
	<div className={styles.input} id={id}>
		<CheckboxSubcategoryUI isChecked={isChecked} onClick={onChange} />

		<span className={styles.text}>{text}</span>
	</div>
);
