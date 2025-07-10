import type { TUser } from '../../api/type';

export const mockUsers: TUser[] = [
	{
		skillPhotos: [],
		_id: '686334d7af130dedea16c5e5',
		name: 'Иван',
		city: 'Санкт-Петербург',
		age: 37,
		about:
			'Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое',
		canTeach: [
			{
				_id: '685efce79b478aebbd5b1f82',
				name: 'Баланс жизни и работы',
				categoryName: 'Здоровье и лайфстайл',
			},
			{
				_id: '685ef7319b478aebbd5b1f5c',
				name: 'Рисование и иллюстрация',
				categoryName: 'Творчество и искусство',
			},
		],
		wantsToLearn: [
			{
				_id: '685ef9629b478aebbd5b1f6d',
				name: 'Навыки обучения',
				categoryName: 'Образование и развитие',
			},
			{
				_id: '685efad69b478aebbd5b1f71',
				name: 'Когнитивные техники',
				categoryName: 'Образование и развитие',
			},
		],
		photo:
			'https://images.unsplash.com/photo-1626038135427-bd4eb8193ba5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		likes: ['685f0a909b478aebbd5b1fb0', '685f0a909b478aebbd5b1fb1'],
		birthDate: '1983-05-03T05:35:12.387Z',
		registerDate: '2023-04-02T02:06:17.519Z',
		email: 'temp_email_0_686334d7af130dedea16c5e5@example.com',
		gender: 'Мужской',
		cards: [
			{
				_id: '6869a11cc3fce95794c99432',
				title: 'Обучу игре на фортепиано',
				description: 'Имею опыт преподавания более 5 лет.',
				photo: [
					'https://img.freepik.com/free-vector/businessman-meditating-his-chair-work_52683-61162.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/brunette-man-business-suit-is-working-while-relaxing-with-cocktail-blue-space-with-suitcase-pink-rubber-ring_197531-15470.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-vector/flat-business-people-meditating_23-2148919174.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/representation-person-carrying-burden_52683-104234.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/pleased-with-closed-eyes-young-school-woman-sits-table-with-school-tools-doing-meditation-gesture_141793-121928.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				],
				createdAt: '2023-04-02T02:06:17.519Z',
			},
		],
	},
	{
		skillPhotos: [],
		_id: '686334d7af130dedea16c5e6',
		name: 'Анна',
		city: 'Казань',
		age: 26,
		about: 'Открыта новому, люблю книги и камерную музыку',
		canTeach: [
			{
				_id: '685ef7f59b478aebbd5b1f62',
				name: 'Креативное письмо',
				categoryName: 'Творчество и искусство',
			},
			{
				_id: '685ef7a79b478aebbd5b1f5f',
				name: 'Видеомонтаж',
				categoryName: 'Творчество и искусство',
			},
			{
				_id: '685ef7c29b478aebbd5b1f60',
				name: 'Музыка и звук',
				categoryName: 'Творчество и искусство',
			},
			{
				_id: '685ef89f9b478aebbd5b1f68',
				name: 'Немецкий',
				categoryName: 'Иностранные языки',
			},
			{
				_id: '685ef8829b478aebbd5b1f66',
				name: 'Французский',
				categoryName: 'Иностранные языки',
			},
		],
		wantsToLearn: [
			{
				_id: '685ef6e59b478aebbd5b1f59',
				name: 'Тайм-менеджмент',
				categoryName: 'Бизнес и карьера',
			},
			{
				_id: '685ef77a9b478aebbd5b1f5e',
				name: 'Фотография',
				categoryName: 'Творчество и искусство',
			},
			{
				_id: '685ef8469b478aebbd5b1f65',
				name: 'Английский',
				categoryName: 'Иностранные языки',
			},
			{
				_id: '685ef8959b478aebbd5b1f67',
				name: 'Испанский',
				categoryName: 'Иностранные языки',
			},
			{
				_id: '685ef6ff9b478aebbd5b1f5a',
				name: 'Проектное управление',
				categoryName: 'Бизнес и карьера',
			},
		],
		photo:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		likes: ['685f0a909b478aebbd5b1fc9', '685f0a909b478aebbd5b1fca'],
		birthDate: '1991-09-11T20:12:32.677Z',
		registerDate: '2024-02-04T22:19:28.234Z',
		email: 'temp_email_1_686334d7af130dedea16c5e6@example.com',
		gender: 'Женский',
		cards: [
			{
				_id: '6869a11cc3fce95794c99433',
				title: 'Помогу освоить немецкий язык',
				description: 'Обучаю от начального до продвинутого уровня.',
				photo: [
					'https://img.freepik.com/free-photo/festive-lovely-confetti-composition_23-2149140119.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/travel-again-concept-arrangement-with-copy-space_23-2149064580.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/envelope-with-blank-note-floral-decoration_23-2147600557.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/father-s-day-celebration-with-envelope_23-2150231065.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/top-view-letters-quotes-still-life_52683-105912.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				],
				createdAt: '2024-02-04T22:19:28.234Z',
			},
		],
	},
	{
		skillPhotos: [],
		_id: '686334d7af130dedea16c5e7',
		name: 'Максим',
		city: 'Москва',
		age: 23,
		about: 'Интересуюсь технологиями и психологией общения',
		canTeach: [
			{
				_id: '685ef7f59b478aebbd5b1f62',
				name: 'Креативное письмо',
				categoryName: 'Творчество и искусство',
			},
		],
		wantsToLearn: [
			{
				_id: '685ef52c9b478aebbd5b1f4f',
				name: 'Управление командой',
				categoryName: 'Бизнес и карьера',
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
		registerDate: '2024-03-15T11:51:33.756Z',
		email: 'temp_email_2_686334d7af130dedea16c5e7@example.com',
		gender: 'Мужской',
		cards: [
			{
				_id: '6869a11cc3fce95794c99434',
				title: 'Провожу занятия по рисованию',
				description: 'Практические занятия с индивидуальным подходом.',
				photo: [
					'https://img.freepik.com/free-photo/festive-lovely-confetti-composition_23-2149140119.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/travel-again-concept-arrangement-with-copy-space_23-2149064580.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/envelope-with-blank-note-floral-decoration_23-2147600557.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/father-s-day-celebration-with-envelope_23-2150231065.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/top-view-letters-quotes-still-life_52683-105912.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				],
				createdAt: '2024-03-15T11:51:33.756Z',
			},
		],
	},
	{
		skillPhotos: [],
		_id: '686334d7af130dedea16c5e8',
		name: 'Илона',
		city: 'Екатеринбург',
		age: 33,
		about: 'Пишу музыку и верю в силу медитации',
		canTeach: [
			{
				_id: '685ef67e9b478aebbd5b1f56',
				name: 'Продажи и переговоры',
				categoryName: 'Бизнес и карьера',
			},
		],
		wantsToLearn: [
			{
				_id: '685efb4a9b478aebbd5b1f74',
				name: 'Коучинг',
				categoryName: 'Образование и развитие',
			},
			{
				_id: '685ef81b9b478aebbd5b1f63',
				name: 'Арт-терапия',
				categoryName: 'Творчество и искусство',
			},
			{
				_id: '685ef7d79b478aebbd5b1f61',
				name: 'Актерское мастерство',
				categoryName: 'Творчество и искусство',
			},
			{
				_id: '685ef8469b478aebbd5b1f65',
				name: 'Английский',
				categoryName: 'Иностранные языки',
			},
		],
		photo:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		likes: ['685f0a909b478aebbd5b1fbd'],
		birthDate: '1976-03-29T19:50:57.496Z',
		registerDate: '2023-10-06T12:10:24.303Z',
		email: 'temp_email_3_686334d7af130dedea16c5e8@example.com',
		gender: 'Женский',
		cards: [
			{
				_id: '6869a11cc3fce95794c99435',
				title: 'Объясню основы тайм-менеджмента',
				description: 'Помогу быстро освоить необходимые навыки.',
				photo: [
					'https://img.freepik.com/free-photo/women-sitting-table-shaking-hands_23-2147650875.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/man-woman-desk-shaking-hands_23-2147650939.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/business-partners-working-office_273609-6561.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/business-people-shaking-hands-success-deals_1150-2863.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/financial-advisor-introducing-himself_1098-628.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				],
				createdAt: '2023-10-06T12:10:24.303Z',
			},
		],
	},
	{
		skillPhotos: [],
		_id: '686334d7af130dedea16c5e9',
		name: 'Михаил',
		city: 'Новосибирск',
		age: 29,
		about: 'Предприниматель, бегаю марафоны и люблю кофе',
		canTeach: [
			{
				_id: '685ef8959b478aebbd5b1f67',
				name: 'Испанский',
				categoryName: 'Иностранные языки',
			},
			{
				_id: '685efc389b478aebbd5b1f7b',
				name: 'Йога и медитация',
				categoryName: 'Здоровье и лайфстайл',
			},
			{
				_id: '685efbfc9b478aebbd5b1f78',
				name: 'Домашние растения',
				categoryName: 'Дом и уют',
			},
			{
				_id: '685ef82c9b478aebbd5b1f64',
				name: 'Декор и DIY',
				categoryName: 'Творчество и искусство',
			},
			{
				_id: '685ef7109b478aebbd5b1f5b',
				name: 'Предпринимательство',
				categoryName: 'Бизнес и карьера',
			},
		],
		wantsToLearn: [
			{
				_id: '685ef6cb9b478aebbd5b1f58',
				name: 'Резюме и собеседование',
				categoryName: 'Бизнес и карьера',
			},
			{
				_id: '685ef6ff9b478aebbd5b1f5a',
				name: 'Проектное управление',
				categoryName: 'Бизнес и карьера',
			},
			{
				_id: '685ef7319b478aebbd5b1f5c',
				name: 'Рисование и иллюстрация',
				categoryName: 'Творчество и искусство',
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
		registerDate: '2023-01-13T08:38:21.230Z',
		email: 'temp_email_4_686334d7af130dedea16c5e9@example.com',
		gender: 'Мужской',
		cards: [
			{
				_id: '6869a11cc3fce95794c99436',
				title: 'Учу играть на гитаре',
				description: 'Уроки проходят онлайн или оффлайн по выбору.',
				photo: [
					'https://img.freepik.com/free-vector/set-hand-drawn-landmarks-symbols-spain_1284-44277.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-vector/hand-drawn-flamenco-dance-element-collection_23-2149943272.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-vector/spain-travel-spanish-style-culture-wine-flamenco-banners-set-isolated-vector-illustration_1284-2596.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-vector/spain-cute-doodle-vector-sticker-collection_179234-741.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-vector/hand-drawn-flamenco-woman-illustration_23-2149961229.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				],
				createdAt: '2023-01-13T08:38:21.230Z',
			},
		],
	},
	{
		skillPhotos: [],
		_id: '686334d7af130dedea16c5ea',
		name: 'Мария',
		city: 'Краснодар',
		age: 21,
		about: 'Люблю порядок и хорошо структурированную информацию',
		canTeach: [
			{
				_id: '685ef7c29b478aebbd5b1f60',
				name: 'Музыка и звук',
				categoryName: 'Творчество и искусство',
			},
		],
		wantsToLearn: [
			{
				_id: '685ef7319b478aebbd5b1f5c',
				name: 'Рисование и иллюстрация',
				categoryName: 'Творчество и искусство',
			},
			{
				_id: '685efbaa9b478aebbd5b1f75',
				name: 'Уборка и организация',
				categoryName: 'Дом и уют',
			},
			{
				_id: '685efb329b478aebbd5b1f73',
				name: 'Навыки преподавания',
				categoryName: 'Образование и развитие',
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
		registerDate: '2023-07-29T17:44:51.882Z',
		email: 'temp_email_5_686334d7af130dedea16c5ea@example.com',
		gender: 'Женский',
		cards: [
			{
				_id: '6869a11dc3fce95794c99437',
				title: 'Помогаю улучшить навыки письма',
				description: 'Индивидуальная программа обучения под ваши цели.',
				photo: [
					'https://img.freepik.com/free-photo/portrait-woman-posing-with-universe-projection-texture_23-2149581267.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/view-tiny-music-box_23-2150545642.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/person-having-hearing-issues_23-2150038468.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/view-tiny-music-box_23-2150545643.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
					'https://img.freepik.com/free-photo/retro-music-concept-with-space-left_23-2147684967.jpg?ga=GA1.1.196532855.1751323184&semt=ais_items_boosted&w=740',
				],
				createdAt: '2023-07-29T17:44:51.882Z',
			},
		],
	},
];
