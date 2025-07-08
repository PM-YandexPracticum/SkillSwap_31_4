import styles from './Loader.module.scss';

export const Loader = () => {
	return (
		<div className={styles.fullscreenCenter}>
			<div className={styles.container}>
				<div className={styles.pulseContainer}>
					{[...Array(5)].map((_, i) => (
						// eslint-disable-next-line react/no-array-index-key
						<div key={i} className={styles.pulse} />
					))}
				</div>
				<div className={styles.loadingText}>Загружаются данные...</div>
			</div>
		</div>
	);
};
