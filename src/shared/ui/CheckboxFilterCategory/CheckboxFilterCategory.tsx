import { CheckboxCategoryUI } from '../CheckboxCategory';
import type { CheckboxFilterCategoryUIProps } from './type';
import styles from './CheckboxFilterCategory.module.scss';
import { CheckboxSubcategoryUI } from '../CheckboxSubcategory';

export const CheckboxFilterCategoryUI = ({
	isChecked,
	text,
	categoryType,
	onChange,
}: CheckboxFilterCategoryUIProps) => {
	const Checkbox =
		categoryType === 'main' ? CheckboxCategoryUI : CheckboxSubcategoryUI;

	return (
		<div className={styles.input}>
			<Checkbox isChecked={isChecked} onClick={onChange} />

			<span className={styles.text}>{text}</span>
		</div>
	);
};
