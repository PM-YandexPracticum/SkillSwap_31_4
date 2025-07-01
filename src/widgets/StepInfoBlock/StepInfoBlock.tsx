import styles from './StepInfoBlock.module.scss';
import type { StepInfoBlockUIProps } from './type';

export const StepInfoBlockUI = ({
	urlIcon,
	title,
	subtitle,
}: StepInfoBlockUIProps) => (
	<div className={styles.onboarding}>
		<img src={urlIcon} alt='Light Icon' style={{ marginBottom: '40px' }} />
		<h2 className={styles.title} style={{ marginBottom: '12px' }}>
			{title}
		</h2>
		<p className={styles.text}>{subtitle}</p>
	</div>
);
