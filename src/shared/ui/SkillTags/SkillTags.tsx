import styles from './SkillTags.module.scss';

type TSkillTagsUIProps = {
	tagText: string;
	category:
		| 'Иностранные языки'
		| 'Образование и развитие'
		| 'Здоровье и лайфстайл'
		| 'Бизнес и карьера'
		| 'Творчество и искусство'
		| 'Дом и уют'
		| '+';
};

export const SkillTags = ({ tagText, category }: TSkillTagsUIProps) => {
	let tagBgColor = {
		background: 'var(--color-tag-plus)',
	};

	switch (category) {
		case 'Иностранные языки':
			tagBgColor = {
				background: 'var(--color-tag-foreign-languages)',
			};
			break;
		case 'Образование и развитие':
			tagBgColor = {
				background: 'var(--color-tag-education)',
			};
			break;
		case 'Здоровье и лайфстайл':
			tagBgColor = {
				background: 'var(--color-tag-health)',
			};
			break;
		case 'Бизнес и карьера':
			tagBgColor = {
				background: 'var(--color-tag-business)',
			};
			break;
		case 'Творчество и искусство':
			tagBgColor = {
				background: 'var(--color-tag-creativity)',
			};
			break;
		case 'Дом и уют':
			tagBgColor = {
				background: 'var(--color-tag-home)',
			};
			break;
		default:
			tagBgColor;
			break;
	}

	return (
		<span className={styles.tag} style={tagBgColor}>
			{tagText}
		</span>
	);
};
