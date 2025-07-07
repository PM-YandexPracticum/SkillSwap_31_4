import lightIcon from '@images/light-bulb.png';
import { StepInfoBlockUI } from '../../widgets/StepInfoBlock/StepInfoBlock';
import { Auth } from '../../widgets/Auth';
import styles from './Login.module.scss';

export const Login = () => (
	<div>
		<h2 className={styles.title}>Вход</h2>
		<div className={styles.content}>
			<Auth handleSubmit={() => {}} />
			<StepInfoBlockUI
				urlIcon={lightIcon}
				title='С возвращением в SkillSwap!'
				subtitle='Обменивайтесь знаниями и навыками с другими людьми'
			/>
		</div>
	</div>
);
