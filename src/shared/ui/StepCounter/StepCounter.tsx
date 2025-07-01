import React from 'react';
import styles from './StepCounter.module.scss';

export interface StepCounterProps {
	currentStep: number;
	totalSteps: number;
}

const StepCounter: React.FC<StepCounterProps> = ({
	currentStep,
	totalSteps,
}) => {
	const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

	return (
		<div className={styles.stepCounter}>
			<div className={styles.stepText}>
				Шаг {currentStep} из {totalSteps}
			</div>
			<div className={styles.stepBars}>
				{steps.map((step) => (
					<div
						key={step}
						className={`${styles.stepBar} ${
							step <= currentStep ? styles.active : styles.inactive
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default StepCounter;
