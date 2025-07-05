/* eslint-disable no-underscore-dangle */
import { Card, SwiperArrows } from '@ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CardSlider.module.scss';

export const CardSlider = () => {
	const users = [
		{
			_id: '686334d7af130dedea16c5e5',
			userName: 'Иван',
			userLocation: 'Санкт-Петербург',
			userAge: 37,
			isLiked: true,
			about:
				'Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
			teachSkills: [
				{
					_id: '685efce79b478aebbd5b1f82',
					tagText: 'Баланс жизни и работы',
					category: 'Здоровье и лайфстайл',
				},
				{
					_id: '685ef7319b478aebbd5b1f5c',
					tagText: 'Рисование и иллюстрация',
					category: 'Творчество и искусство',
				},
			],
			learnSkills: [
				{
					_id: '685ef9629b478aebbd5b1f6d',
					tagText: 'Навыки обучения',
					category: 'Образование и развитие',
				},
				{
					_id: '685efad69b478aebbd5b1f71',
					tagText: 'Когнитивные техники',
					category: 'Образование и развитие',
				},
			],
			photo:
				'https://images.unsplash.com/photo-1626038135427-bd4eb8193ba5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			likes: ['685f0a909b478aebbd5b1fb0', '685f0a909b478aebbd5b1fb1'],
			birthDate: '1983-05-03T05:35:12.387Z',
			skillPhotos: [
				'https://img.freepik.com/free-vector/businessman-meditating-his-chair-work_52683-61162.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/brunette-man-business-suit-is-working-while-relaxing-with-cocktail-blue-space-with-suitcase-pink-rubber-ring_197531-15470.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-vector/flat-business-people-meditating_23-2148919174.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/representation-person-carrying-burden_52683-104234.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/pleased-with-closed-eyes-young-school-woman-sits-table-with-school-tools-doing-meditation-gesture_141793-121928.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			],
			registerDate: '2025-03-16T13:43:37.520Z',
		},
		{
			_id: '686334d7af130dedea16c5e6',
			userName: 'Анна',
			userLocation: 'Казань',
			userAge: 26,
			isLiked: true,
			about: 'Открыта новому, люблю книги и камерную музыку',
			teachSkills: [
				{
					_id: '685ef7f59b478aebbd5b1f62',
					tagText: 'Креативное письмо',
					category: 'Творчество и искусство',
				},
				{
					_id: '685ef7a79b478aebbd5b1f5f',
					tagText: 'Видеомонтаж',
					category: 'Творчество и искусство',
				},
				{
					_id: '685ef7c29b478aebbd5b1f60',
					tagText: 'Музыка и звук',
					category: 'Творчество и искусство',
				},
				{
					_id: '685ef89f9b478aebbd5b1f68',
					tagText: 'Немецкий',
					category: 'Иностранные языки',
				},
				{
					_id: '685ef8829b478aebbd5b1f66',
					tagText: 'Французский',
					category: 'Иностранные языки',
				},
			],
			learnSkills: [
				{
					_id: '685ef6e59b478aebbd5b1f59',
					tagText: 'Тайм-менеджмент',
					category: 'Бизнес и карьера',
				},
				{
					_id: '685ef77a9b478aebbd5b1f5e',
					tagText: 'Фотография',
					category: 'Творчество и искусство',
				},
				{
					_id: '685ef8469b478aebbd5b1f65',
					tagText: 'Английский',
					category: 'Иностранные языки',
				},
				{
					_id: '685ef8959b478aebbd5b1f67',
					tagText: 'Испанский',
					category: 'Иностранные языки',
				},
				{
					_id: '685ef6ff9b478aebbd5b1f5a',
					tagText: 'Проектное управление',
					category: 'Бизнес и карьера',
				},
			],
			photo:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			likes: ['685f0a909b478aebbd5b1fc9', '685f0a909b478aebbd5b1fca'],
			birthDate: '1991-09-11T20:12:32.677Z',
			skillPhotos: [
				'https://img.freepik.com/free-photo/festive-lovely-confetti-composition_23-2149140119.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/travel-again-concept-arrangement-with-copy-space_23-2149064580.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/envelope-with-blank-note-floral-decoration_23-2147600557.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/father-s-day-celebration-with-envelope_23-2150231065.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/top-view-letters-quotes-still-life_52683-105912.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			],
			registerDate: '2023-01-28T09:13:58.485Z',
		},
		{
			_id: '686334d7af130dedea16c5e7',
			userName: 'Максим',
			userLocation: 'Москва',
			userAge: 23,
			isLiked: false,
			about: 'Интересуюсь технологиями и психологией общения',
			teachSkills: [
				{
					_id: '685ef7f59b478aebbd5b1f62',
					tagText: 'Креативное письмо',
					category: 'Творчество и искусство',
				},
			],
			learnSkills: [
				{
					_id: '685ef52c9b478aebbd5b1f4f',
					tagText: 'Управление командой',
					category: 'Бизнес и карьера',
				},
			],
			photo:
				'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			likes: [
				'685f0a909b478aebbd5b1fb7',
				'685f0a909b478aebbd5b1fb8',
				'685f0a909b478aebbd5b1fb9',
				'685f0a909b478aebbd5b1fba',
				'685f0a909b478aebbd5b1fbb',
				'685f0a909b478aebbd5b1fbc',
				'685f0a909b478aebbd5b1fbd',
				'685f0a909b478aebbd5b1fbe',
				'685f0a909b478aebbd5b1fbf',
				'685f0a909b478aebbd5b1fc0',
				'685f0a909b478aebbd5b1fc1',
				'685f0a909b478aebbd5b1fc2',
			],
			birthDate: '1995-07-03T23:57:05.363Z',
			skillPhotos: [
				'https://img.freepik.com/free-photo/festive-lovely-confetti-composition_23-2149140119.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/travel-again-concept-arrangement-with-copy-space_23-2149064580.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/envelope-with-blank-note-floral-decoration_23-2147600557.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/father-s-day-celebration-with-envelope_23-2150231065.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/top-view-letters-quotes-still-life_52683-105912.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			],
			registerDate: '2025-01-11T09:31:40.372Z',
		},
		{
			_id: '686334d7af130dedea16c5e9',
			userName: 'Михаил',
			userLocation: 'Новосибирск',
			userAge: 29,
			isLiked: true,
			about: 'Предприниматель, бегаю марафоны и люблю кофе',
			teachSkills: [
				{
					_id: '685ef8959b478aebbd5b1f67',
					tagText: 'Испанский',
					category: 'Иностранные языки',
				},
				{
					_id: '685efc389b478aebbd5b1f7b',
					tagText: 'Йога и медитация',
					category: 'Здоровье и лайфстайл',
				},
				{
					_id: '685efbfc9b478aebbd5b1f78',
					tagText: 'Домашние растения',
					category: 'Дом и уют',
				},
				{
					_id: '685ef82c9b478aebbd5b1f64',
					tagText: 'Декор и DIY',
					category: 'Творчество и искусство',
				},
				{
					_id: '685ef7109b478aebbd5b1f5b',
					tagText: 'Предпринимательство',
					category: 'Бизнес и карьера',
				},
			],
			learnSkills: [
				{
					_id: '685ef6cb9b478aebbd5b1f58',
					tagText: 'Резюме и собеседование',
					category: 'Бизнес и карьера',
				},
				{
					_id: '685ef6ff9b478aebbd5b1f5a',
					tagText: 'Проектное управление',
					category: 'Бизнес и карьера',
				},
				{
					_id: '685ef7319b478aebbd5b1f5c',
					tagText: 'Рисование и иллюстрация',
					category: 'Творчество и искусство',
				},
			],
			photo:
				'https://images.unsplash.com/photo-1636041241625-42c19b151401?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			likes: [
				'685f0a909b478aebbd5b1fb8',
				'685f0a909b478aebbd5b1fb9',
				'685f0a909b478aebbd5b1fba',
				'685f0a909b478aebbd5b1fbb',
				'685f0a909b478aebbd5b1fbc',
				'685f0a909b478aebbd5b1fbd',
				'685f0a909b478aebbd5b1fbe',
				'685f0a909b478aebbd5b1fbf',
				'685f0a909b478aebbd5b1fc0',
				'685f0a909b478aebbd5b1fc1',
				'685f0a909b478aebbd5b1fc2',
				'685f0a909b478aebbd5b1fc3',
				'685f0a909b478aebbd5b1fc4',
				'685f0a909b478aebbd5b1fc5',
				'685f0a909b478aebbd5b1fc6',
				'685f0a909b478aebbd5b1fc7',
				'685f0a909b478aebbd5b1fc8',
			],
			birthDate: '1981-03-17T08:28:42.532Z',
			skillPhotos: [
				'https://img.freepik.com/free-vector/set-hand-drawn-landmarks-symbols-spain_1284-44277.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-vector/hand-drawn-flamenco-dance-element-collection_23-2149943272.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-vector/spain-travel-spanish-style-culture-wine-flamenco-banners-set-isolated-vector-illustration_1284-2596.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-vector/spain-cute-doodle-vector-sticker-collection_179234-741.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-vector/hand-drawn-flamenco-woman-illustration_23-2149961229.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			],
			registerDate: '2023-01-08T05:28:19.485Z',
		},
		{
			_id: '686334d7af130dedea16c5ea',
			userName: 'Мария',
			userLocation: 'Краснодар',
			userAge: 21,
			isLiked: false,
			about: 'Люблю порядок и хорошо структурированную информацию',
			teachSkills: [
				{
					_id: '685ef7c29b478aebbd5b1f60',
					tagText: 'Музыка и звук',
					category: 'Творчество и искусство',
				},
			],
			learnSkills: [
				{
					_id: '685ef7319b478aebbd5b1f5c',
					tagText: 'Рисование и иллюстрация',
					category: 'Творчество и искусство',
				},
				{
					_id: '685efbaa9b478aebbd5b1f75',
					tagText: 'Уборка и организация',
					category: 'Дом и уют',
				},
				{
					_id: '685efb329b478aebbd5b1f73',
					tagText: 'Навыки преподавания',
					category: 'Образование и развитие',
				},
			],
			photo:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			likes: [
				'685f0a909b478aebbd5b1fb2',
				'685f0a909b478aebbd5b1fb3',
				'685f0a909b478aebbd5b1fb4',
				'685f0a909b478aebbd5b1fb5',
				'685f0a909b478aebbd5b1fb6',
				'685f0a909b478aebbd5b1fb7',
				'685f0a909b478aebbd5b1fb8',
			],
			birthDate: '2002-05-30T10:50:32.705Z',
			skillPhotos: [
				'https://img.freepik.com/free-photo/portrait-woman-posing-with-universe-projection-texture_23-2149581267.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/view-tiny-music-box_23-2150545642.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/person-having-hearing-issues_23-2150038468.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/view-tiny-music-box_23-2150545643.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/retro-music-concept-with-space-left_23-2147684967.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			],
			registerDate: '2023-07-07T13:27:12.944Z',
		},
		{
			_id: '686334d7af130dedea16c5eb',
			userName: 'Сергей',
			userLocation: 'Москва',
			userAge: 31,
			isLiked: false,
			about: 'Люблю спорт и новые технологии',
			teachSkills: [
				{
					_id: '685ef7109b478aebbd5b1f5b',
					tagText: 'Предпринимательство',
					category: 'Бизнес и карьера',
				},
				{
					_id: '685efc389b478aebbd5b1f7b',
					tagText: 'Йога и медитация',
					category: 'Здоровье и лайфстайл',
				},
				{
					_id: '685ef64b9b478aebbd5b1f55',
					tagText: 'Маркетинг и реклама',
					category: 'Бизнес и карьера',
				},
				{
					_id: '685efcbf9b478aebbd5b1f80',
					tagText: 'Физические тренировки',
					category: 'Здоровье и лайфстайл',
				},
				{
					_id: '685ef8cd9b478aebbd5b1f6b',
					tagText: 'Подготовка к экзаменам(IELTS, TOEFL)',
					category: 'Иностранные языки',
				},
			],
			learnSkills: [
				{
					_id: '685ef7c29b478aebbd5b1f60',
					tagText: 'Музыка и звук',
					category: 'Творчество и искусство',
				},
				{
					_id: '685efce79b478aebbd5b1f82',
					tagText: 'Баланс жизни и работы',
					category: 'Здоровье и лайфстайл',
				},
				{
					_id: '685ef6ff9b478aebbd5b1f5a',
					tagText: 'Проектное управление',
					category: 'Бизнес и карьера',
				},
				{
					_id: '685ef7a79b478aebbd5b1f5f',
					tagText: 'Видеомонтаж',
					category: 'Творчество и искусство',
				},
				{
					_id: '685ef69d9b478aebbd5b1f57',
					tagText: 'Личный бренд',
					category: 'Бизнес и карьера',
				},
				{
					_id: '685efcaf9b478aebbd5b1f7f',
					tagText: 'Осознанность',
					category: 'Здоровье и лайфстайл',
				},
			],
			photo:
				'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			likes: ['685f0a909b478aebbd5b1fbe'],
			birthDate: '1980-03-26T10:37:10.714Z',
			skillPhotos: [
				'https://img.freepik.com/free-photo/silhouette-businessman-with-glasses_1098-84.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/successful-business-woman-blue-suit_158595-5022.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/girl-signs-documents_1157-42774.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/senior-business-woman-with-laptop-by-office-center_1303-22636.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/young-attractive-smiling-businesswoman-coat-with-laptop-happily-looking-away-while-walking-through-city-street_574295-2127.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			],
			registerDate: '2024-12-31T09:50:18.730Z',
		},
		{
			_id: '686334d7af130dedea16c5ed',
			userName: 'Алексей',
			userLocation: 'Владивосток',
			userAge: 28,
			isLiked: true,
			about: 'Увлекаюсь музыкой и путешествиями',
			teachSkills: [
				{
					_id: '685ef8829b478aebbd5b1f66',
					tagText: 'Французский',
					category: 'Иностранные языки',
				},
				{
					_id: '685ef81b9b478aebbd5b1f63',
					tagText: 'Арт-терапия',
					category: 'Творчество и искусство',
				},
				{
					_id: '685ef90e9b478aebbd5b1f6c',
					tagText: 'Личностное развитие',
					category: 'Образование и развитие',
				},
			],
			learnSkills: [
				{
					_id: '685efbed9b478aebbd5b1f77',
					tagText: 'Приготовление еды',
					category: 'Дом и уют',
				},
				{
					_id: '685ef8959b478aebbd5b1f67',
					tagText: 'Испанский',
					category: 'Иностранные языки',
				},
				{
					_id: '685ef69d9b478aebbd5b1f57',
					tagText: 'Личный бренд',
					category: 'Бизнес и карьера',
				},
			],
			photo:
				'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			likes: [
				'685f0a909b478aebbd5b1fbf',
				'685f0a909b478aebbd5b1fc0',
				'685f0a909b478aebbd5b1fc1',
				'685f0a909b478aebbd5b1fc2',
			],
			birthDate: '1992-10-02T14:33:04.279Z',
			skillPhotos: [
				'https://img.freepik.com/free-photo/french-woman-with-baguettes-street-beret_1321-322.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/young-woman-showing-okay-gesture_171337-1367.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/shrugging-feeling-confused-uncertain_1194-405007.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-photo/young-cute-woman-winking-showing-peace-gesture_171337-1408.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				'https://img.freepik.com/free-vector/march-french-language-day_1308-125660.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
			],
			registerDate: '2025-06-30T00:40:29.320Z',
		},
	];

	const navigate = useNavigate();

	const [sliderIndex, setSliderIndex] = useState(0);
	const visibleCount = 3;
	const visibleCards = users.slice(sliderIndex, sliderIndex + visibleCount);

	const handlePrev = () => {
		setSliderIndex((prev) => {
			if (prev - 1 < 0) {
				return users.length - visibleCount;
			}

			return prev - 1;
		});
	};

	const handleNext = () => {
		setSliderIndex((prev) => {
			if (prev + 1 > users.length - visibleCount) {
				return 0;
			}
			return prev + 1;
		});
	};

	return (
		<div className={styles.container}>
			<SwiperArrows
				onPrev={handlePrev}
				onNext={handleNext}
				disabledPrev={sliderIndex === 0}
				disabledNext={sliderIndex >= users.length - visibleCount}
			/>
			<div className={styles['card-slider']}>
				{visibleCards.map((user) => (
					<Card
						key={user._id}
						{...user}
						teachSkills={user.teachSkills.map((skill) => ({
							...skill,
							category: skill.category as
								| 'Здоровье и лайфстайл'
								| 'Творчество и искусство'
								| 'Образование и развитие'
								| 'Иностранные языки'
								| 'Бизнес и карьера'
								| 'Дом и уют'
								| '+',
						}))}
						learnSkills={user.learnSkills.map((skill) => ({
							...skill,
							category: skill.category as
								| 'Здоровье и лайфстайл'
								| 'Творчество и искусство'
								| 'Образование и развитие'
								| 'Иностранные языки'
								| 'Бизнес и карьера'
								| 'Дом и уют'
								| '+',
						}))}
						onClickDetails={() => {
							navigate(`/${user._id}`);
						}}
						onClickLike={() => {}}
					/>
				))}
			</div>
		</div>
	);
};
