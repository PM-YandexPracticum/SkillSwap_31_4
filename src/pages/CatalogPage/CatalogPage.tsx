import { FiltersBar } from '../../widgets/FiltersBar/FiltersBar';
import { SkillCardsListInfinite } from '../../widgets/SkillCardsList/SkillCardsListInfinite/SkillCardsListInfinite';
import { SkillCardsListDemo } from '../../widgets/SkillCardsList/SkillCardsListDemo/SkillCardsListDemo';
import { CardPresenter } from '../../features/Card/CardPresenter';
import styles from './Catalog.module.scss';
import { Catalog } from '../../features/Catalog/Catalog';
import { Preloader } from '../../shared/ui/Preloader';

export const CatalogPage = () => {
	const {
		skills,
		cities,
		loading,
		isFiltering,
		filteredUsers,
		visibleUsers,
		popularUsers,
		newUsers,
		makeUserCardProps,
		loadMore,
		visibleCount,
	} = Catalog();

	if (loading) {
		return (
			<div>
				<Preloader isAbsolute />
			</div>
		);
	}

	const popularProps = popularUsers.map(makeUserCardProps);
	const newProps = newUsers.map(makeUserCardProps);

	let cardsContent;

	if (isFiltering) {
		if (filteredUsers.length > 0) {
			cardsContent = (
				<SkillCardsListInfinite
					title={`Подходящие предложения: ${filteredUsers.length}`}
					SkillCard={CardPresenter}
					SkillCardsProps={filteredUsers.map(makeUserCardProps)}
					InfiniteScrollProps={{
						dataLength: filteredUsers.length,
						hasMore: false,
						next: () => {},
						loader: <></>,
						endMessage: <span>Это всё</span>,
					}}
					isHasButtonNew={false}
				/>
			);
		} else {
			cardsContent = (
				<div className={styles.text}>
					<p>Пользователей не найдено</p>
				</div>
			);
		}
	} else {
		cardsContent = (
			<>
				<SkillCardsListDemo
					title='Популярное'
					SkillCard={CardPresenter}
					SkillCardsProps={popularProps}
					maxCardCount={3}
					onClickButtonMore={() => {}}
				/>

				<SkillCardsListDemo
					title='Новое'
					SkillCard={CardPresenter}
					SkillCardsProps={newProps}
					maxCardCount={3}
					onClickButtonMore={() => {}}
				/>

				<SkillCardsListInfinite
					title='Рекомендуем'
					SkillCard={CardPresenter}
					SkillCardsProps={visibleUsers.map(makeUserCardProps)}
					InfiniteScrollProps={{
						dataLength: visibleUsers.length,
						hasMore: visibleCount < filteredUsers.length,
						next: loadMore,
						loader: <span>Загрузка...</span>,
						endMessage: <span>Это всё</span>,
					}}
					isHasButtonNew={false}
				/>
			</>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.filtersPanel}>
				<FiltersBar skills={skills} cities={cities} />
			</div>

			<div className={styles.cardsContainer}>{cardsContent}</div>
		</div>
	);
};
