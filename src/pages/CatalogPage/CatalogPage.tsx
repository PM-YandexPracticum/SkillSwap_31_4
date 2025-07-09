import { FiltersBar } from '../../widgets/FiltersBar/FiltersBar';
import { SkillCardsListInfinite } from '../../widgets/SkillCardsList/SkillCardsListInfinite/SkillCardsListInfinite';
import { SkillCardsListDemo } from '../../widgets/SkillCardsList/SkillCardsListDemo/SkillCardsListDemo';
import { Card } from '../../shared/ui/Card/Card';
import styles from './Catalog.module.scss';
import { Catalog } from '../../features/Catalog/Catalog'; // путь подгони
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
		currentUserId,
	} = Catalog();

	if (loading) {
		return (
			<div>
				<Preloader isAbsolute={false} />
			</div>
		);
	}

	const popularProps = popularUsers.map(makeUserCardProps);
	const newProps = newUsers.map(makeUserCardProps);

	return (
		<div className={styles.container}>
			<div className={styles.filtersPanel}>
				<FiltersBar skills={skills} cities={cities} />
			</div>

			<div className={styles.cardsContainer}>
				{isFiltering ? (
					filteredUsers.length > 0 ? (
						<SkillCardsListInfinite
							title={`Подходящие предложения: ${filteredUsers.length}`}
							SkillCard={Card}
							SkillCardsProps={filteredUsers.map(makeUserCardProps)}
							InfiniteScrollProps={{
								dataLength: filteredUsers.length,
								hasMore: false,
								next: () => {},
								loader: <span>Загрузка...</span>,
								endMessage: <span>Это всё</span>,
							}}
							isHasButtonNew={false}
						/>
					) : (
						<div className={styles.text}>
							<p>Пользователей не найдено</p>
						</div>
					)
				) : (
					<>
						<SkillCardsListDemo
							title='Популярное'
							SkillCard={Card}
							SkillCardsProps={popularProps}
							maxCardCount={3}
							onClickButtonMore={() => console.log('Смотреть все популярное')}
						/>

						<SkillCardsListDemo
							title='Новое'
							SkillCard={Card}
							SkillCardsProps={newProps}
							maxCardCount={3}
							onClickButtonMore={() => console.log('Смотреть все новое')}
						/>

						<SkillCardsListInfinite
							title='Рекомендуем'
							SkillCard={Card}
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
				)}
			</div>
		</div>
	);
};
