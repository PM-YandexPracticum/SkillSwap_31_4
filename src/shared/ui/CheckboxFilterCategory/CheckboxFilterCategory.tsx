import type { CheckboxFilterCategoryUIProps } from './type';
import styles from './CheckboxFilterCategory.module.scss';
import { CheckboxSubcategoryUI } from '../CheckboxSubcategory';

export const CheckboxFilterCategoryUI = ({
	isChecked,
	text,
	id,
	onChange,
}: CheckboxFilterCategoryUIProps) => (
	<div className={styles.button}>
		<CheckboxSubcategoryUI id={id} isChecked={isChecked} onClick={onChange} />
		<label htmlFor={id} className={styles.text}>
			{text}
		</label>
	</div>
);
