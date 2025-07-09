import iconForeignLanguage from '../../images/icons/global.svg';
import iconEducation from '../../images/icons/book.svg';
import iconHealth from '../../images/icons/lifestyle.svg';
import iconBusiness from '../../images/icons/briefcase.svg';
import iconCreativity from '../../images/icons/palette.svg';
import iconHome from '../../images/icons/home.svg';

export const categoryColors: Record<string, string> = {
	'Иностранные языки': 'var(--color-tag-foreign-languages)',
	'Образование и развитие': 'var(--color-tag-education)',
	'Здоровье и лайфстайл': 'var(--color-tag-health)',
	'Бизнес и карьера': 'var(--color-tag-business)',
	'Творчество и искусство': 'var(--color-tag-creativity)',
	'Дом и уют': 'var(--color-tag-home)',
	'+': 'var(--color-tag-plus)',
};

export const categoryImages: Record<string, string> = {
	'Иностранные языки': iconForeignLanguage,
	'Образование и развитие': iconEducation,
	'Здоровье и лайфстайл': iconHealth,
	'Бизнес и карьера': iconBusiness,
	'Творчество и искусство': iconCreativity,
	'Дом и уют': iconHome,
};
