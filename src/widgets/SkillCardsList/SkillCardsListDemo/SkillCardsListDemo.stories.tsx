import type { Meta, StoryObj } from '@storybook/react-vite';

import { SkillCardsListDemo } from './SkillCardsListDemo';
import { Card } from '../../../shared/ui/Card';

const meta = {
	title: 'Widgets/SkillCardsList/SkillCardsListDemo',
	component: SkillCardsListDemo,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'light',
			values: [{ name: 'light', value: '#F9FAF7' }],
		},
	},
} satisfies Meta<typeof SkillCardsListDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithButtonMore: Story = {
	render: (args) => <SkillCardsListDemo {...args} />,
	args: {
		buttonMoreType: 'watchAll',
		onClickButtonMore: () => {},
		title: 'Популярное',
		SkillCard: Card,
		SkillCardsProps: [
			{
				photo:
					'https://avatars.mds.yandex.net/i?id=a7e70523897bb23489bf99fdc279aad6_l-5884225-images-thumbs&n=13',
				userName: 'Bombardiro Crocodilo',
				userLocation: 'London',
				userAge: 217,
				isLiked: true,
				teachSkills: [
					{
						tagText: 'Bombardiro',
						category: 'Творчество и искусство',
					},
					{
						tagText: 'Nuclear physics',
						category: 'Дом и уют',
					},
				],
				learnSkills: [
					{
						tagText: 'flex',
						category: 'Творчество и искусство',
					},
				],
				onClickDetails: () => {},
				onClickLike: () => {},
				index: 1,
			},
			{
				photo:
					'https://cdn-0001.qstv.on.epicgames.com/lSxoPBCDpPvtmkeBQD/image/landscape_comp.jpeg',
				userName: 'Tralavelo Tralala',
				userLocation: 'Выхино',
				userAge: 338,
				isLiked: false,
				teachSkills: [
					{
						tagText: 'Плавание',
						category: 'Здоровье и лайфстайл',
					},
					{
						tagText: 'ЕГЭ по профильной математике',
						category: 'Образование и развитие',
					},
					{
						tagText: 'ЕГЭ по физике',
						category: 'Образование и развитие',
					},
					{
						tagText: 'Мат. анализ',
						category: 'Образование и развитие',
					},
					{
						tagText: 'Линейная алгебра',
						category: 'Образование и развитие',
					},
					{
						tagText: 'Барыжеведение',
						category: 'Бизнес и карьера',
					},
				],
				learnSkills: [
					{
						tagText: 'Тайм-менеджмент',
						category: 'Бизнес и карьера',
					},
					{
						tagText: 'Английский язык',
						category: 'Иностранные языки',
					},
					{
						tagText: 'Софт-скиллы',
						category: 'Бизнес и карьера',
					},
					{
						tagText: 'Дизайн в figma',
						category: 'Творство и искусство',
					},
					{
						tagText: 'Подтягивания',
						category: 'Здоровье и лайфстайл',
					},
				],
				onClickDetails: () => {},
				onClickLike: () => {},
				index: 2,
			},
			{
				photo:
					'https://avatars.yandex.net/get-music-content/14304155/82b3e701.a.36336628-1/400x400',
				userName: 'Tum tum tum tum Sahur',
				userLocation: 'Коммунарка',
				userAge: 90,
				isLiked: false,
				teachSkills: [
					{
						tagText: 'Бокс',
						category: 'Здоровье и лайфстайл',
					},
					{
						tagText: 'ОБЖ',
						category: 'Образование и развитие',
					},
				],
				learnSkills: [
					{
						tagText: 'Тайм-менеджмент',
						category: 'Бизнес и карьера',
					},
					{
						tagText: 'Английский язык',
						category: 'Иностранные языки',
					},
				],
				onClickDetails: () => {},
				onClickLike: () => {},
				index: 3,
			},
			{
				photo:
					'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
				userName: 'Bombombini Gusini',
				userLocation: 'New York',
				userAge: 228,
				isLiked: true,
				teachSkills: [
					{
						tagText: 'ЕГЭ по обществознанию',
						category: 'Образование и развитие',
					},
					{
						tagText: 'Легкая атлетика',
						category: 'Здоровье и лайфстайл',
					},
				],
				learnSkills: [
					{
						tagText: 'Выпечка',
						category: 'Дом и уют',
					},
					{
						tagText: 'Дизайн в figma',
						category: 'Творчество и искусство',
					},
				],
				onClickDetails: () => {},
				onClickLike: () => {},
				index: 4,
			},
		],
	},
};

export const WithArrow: Story = {
	render: (args) => <SkillCardsListDemo {...args} />,
	args: {
		buttonMoreType: 'arrow',
		onClickButtonMore: () => {},
		title: 'Популярное',
		SkillCard: Card,
		SkillCardsProps: [
			{
				photo:
					'https://avatars.mds.yandex.net/i?id=a7e70523897bb23489bf99fdc279aad6_l-5884225-images-thumbs&n=13',
				userName: 'Bombardiro Crocodilo',
				userLocation: 'London',
				userAge: 217,
				isLiked: true,
				teachSkills: [
					{
						tagText: 'Bombardiro',
						category: 'Творчество и искусство',
					},
					{
						tagText: 'Nuclear physics',
						category: 'Дом и уют',
					},
				],
				learnSkills: [
					{
						tagText: 'flex',
						category: 'Творчество и искусство',
					},
				],
				onClickDetails: () => {},
				onClickLike: () => {},
				index: 1,
			},
			{
				photo:
					'https://cdn-0001.qstv.on.epicgames.com/lSxoPBCDpPvtmkeBQD/image/landscape_comp.jpeg',
				userName: 'Tralavelo Tralala',
				userLocation: 'Выхино',
				userAge: 338,
				isLiked: false,
				teachSkills: [
					{
						tagText: 'Плавание',
						category: 'Здоровье и лайфстайл',
					},
					{
						tagText: 'ЕГЭ по профильной математике',
						category: 'Образование и развитие',
					},
					{
						tagText: 'ЕГЭ по физике',
						category: 'Образование и развитие',
					},
					{
						tagText: 'Мат. анализ',
						category: 'Образование и развитие',
					},
					{
						tagText: 'Линейная алгебра',
						category: 'Образование и развитие',
					},
					{
						tagText: 'Барыжеведение',
						category: 'Бизнес и карьера',
					},
				],
				learnSkills: [
					{
						tagText: 'Тайм-менеджмент',
						category: 'Бизнес и карьера',
					},
					{
						tagText: 'Английский язык',
						category: 'Иностранные языки',
					},
					{
						tagText: 'Софт-скиллы',
						category: 'Бизнес и карьера',
					},
					{
						tagText: 'Дизайн в figma',
						category: 'Творство и искусство',
					},
					{
						tagText: 'Подтягивания',
						category: 'Здоровье и лайфстайл',
					},
				],
				onClickDetails: () => {},
				onClickLike: () => {},
				index: 2,
			},
			{
				photo:
					'https://avatars.yandex.net/get-music-content/14304155/82b3e701.a.36336628-1/400x400',
				userName: 'Tum tum tum tum Sahur',
				userLocation: 'Коммунарка',
				userAge: 90,
				isLiked: false,
				teachSkills: [
					{
						tagText: 'Бокс',
						category: 'Здоровье и лайфстайл',
					},
					{
						tagText: 'ОБЖ',
						category: 'Образование и развитие',
					},
				],
				learnSkills: [
					{
						tagText: 'Тайм-менеджмент',
						category: 'Бизнес и карьера',
					},
					{
						tagText: 'Английский язык',
						category: 'Иностранные языки',
					},
				],
				onClickDetails: () => {},
				onClickLike: () => {},
				index: 3,
			},
			{
				photo:
					'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
				userName: 'Bombombini Gusini',
				userLocation: 'New York',
				userAge: 228,
				isLiked: true,
				teachSkills: [
					{
						tagText: 'ЕГЭ по обществознанию',
						category: 'Образование и развитие',
					},
					{
						tagText: 'Легкая атлетика',
						category: 'Здоровье и лайфстайл',
					},
				],
				learnSkills: [
					{
						tagText: 'Выпечка',
						category: 'Дом и уют',
					},
					{
						tagText: 'Дизайн в figma',
						category: 'Творчество и искусство',
					},
				],
				onClickDetails: () => {},
				onClickLike: () => {},
				index: 4,
			},
		],
	},
};
