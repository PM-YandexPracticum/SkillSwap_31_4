import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState, useEffect } from 'react';
import { SkillCardsListInfinite } from './SkillCardsListInfinite';
import { Card } from '../../../shared/ui/Card';

const meta = {
	title: 'Widgets/SkillCardsList/SkillCardsListInfinite',
	component: SkillCardsListInfinite,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'light',
			values: [{ name: 'light', value: '#F9FAF7' }],
		},
	},
} satisfies Meta<typeof SkillCardsListInfinite>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTime = 800;

const data = [
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
		photo: 'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
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
		index: 5,
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
		index: 6,
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
		index: 7,
	},
	{
		photo: 'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
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
		index: 8,
	},
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
		index: 9,
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
		index: 10,
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
		index: 11,
	},
	{
		photo: 'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
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
		index: 12,
	},
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
		index: 13,
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
		index: 14,
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
		index: 15,
	},
	{
		photo: 'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
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
		index: 16,
	},
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
		index: 17,
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
		index: 18,
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
		index: 19,
	},
	{
		photo: 'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
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
		index: 20,
	},
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
		index: 21,
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
		index: 22,
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
		index: 23,
	},
	{
		photo: 'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
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
		index: 24,
	},
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
		index: 25,
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
		index: 26,
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
		index: 27,
	},
	{
		photo: 'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
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
		index: 28,
	},
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
		index: 29,
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
		index: 30,
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
		index: 31,
	},
	{
		photo: 'https://s0.rbk.ru/v6_top_pics/media/img/6/47/347449806045476.png',
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
		index: 32,
	},
];

export const BaseInfinite: Story = {
	render: () => {
		const step = 8;
		const [cards, setCards] = useState<
			{
				photo: string;
				userName: string;
				userLocation: string;
				userAge: number;
				isLiked: boolean;
				teachSkills: {
					tagText: string;
					category: string;
				}[];
				learnSkills: {
					tagText: string;
					category: string;
				}[];
				onClickDetails: () => void;
				onClickLike: () => void;
				index: number;
			}[]
		>(data.slice(0, step));
		const [currentCardNumber, setCurrentCardNumber] = useState(step);
		const [hasMore, setHasMore] = useState(true);

		const onNext = () => {
			if (currentCardNumber >= 32) {
				setHasMore(false);
			}
			setTimeout(() => setCurrentCardNumber((prev) => prev + step), mockTime);
		};

		useEffect(() => {
			setCards(data.slice(0, currentCardNumber));
		}, [currentCardNumber]);
		return (
			<SkillCardsListInfinite
				InfiniteScrollProps={{
					loader: <>ЗАГРУЗКА</>,
					hasMore,
					dataLength: cards.length,
					next: onNext,
					endMessage: <>НЕТ БОЛЕЕ КАРТОЧЕК</>,
				}}
				SkillCard={Card}
				SkillCardsProps={cards}
				title='Популярное'
				isHasButtonNew={false}
			/>
		);
	},
	args: {
		InfiniteScrollProps: {
			loader: <>ЗАГРУЗКА</>,
			hasMore: true,
			dataLength: 16,
			next: () => {},
		},
		title: 'Популярное',
		SkillCard: Card,
		SkillCardsProps: [],
		isHasButtonNew: false,
	},
};

export const WithButtonNew: Story = {
	render: () => {
		const step = 8;
		const [cards, setCards] = useState<
			{
				photo: string;
				userName: string;
				userLocation: string;
				userAge: number;
				isLiked: boolean;
				teachSkills: {
					tagText: string;
					category: string;
				}[];
				learnSkills: {
					tagText: string;
					category: string;
				}[];
				onClickDetails: () => void;
				onClickLike: () => void;
				index: number;
			}[]
		>(data.slice(0, step));
		const [currentCardNumber, setCurrentCardNumber] = useState(step);
		const [hasMore, setHasMore] = useState(true);

		const onNext = () => {
			if (currentCardNumber >= 32) {
				setHasMore(false);
			}
			setTimeout(() => setCurrentCardNumber((prev) => prev + step), mockTime);
		};

		useEffect(() => {
			setCards(data.slice(0, currentCardNumber));
		}, [currentCardNumber]);
		return (
			<SkillCardsListInfinite
				InfiniteScrollProps={{
					loader: <>ЗАГРУЗКА</>,
					hasMore,
					dataLength: cards.length,
					next: onNext,
					endMessage: <>НЕТ БОЛЕЕ КАРТОЧЕК</>,
				}}
				SkillCard={Card}
				SkillCardsProps={cards}
				title='Популярное'
				isHasButtonNew
			/>
		);
	},
	args: {
		InfiniteScrollProps: {
			loader: <>ЗАГРУЗКА</>,
			hasMore: true,
			dataLength: 16,
			next: () => {},
		},
		title: 'Популярное',
		SkillCard: Card,
		SkillCardsProps: [],
		isHasButtonNew: true,
	},
};
