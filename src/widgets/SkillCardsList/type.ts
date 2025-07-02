export default interface SkillCardsListProps {
	SkillCard: React.ElementType;
	SkillCardsProps: (React.ComponentProps<React.ElementType> & {
		index: number;
	})[];
	title: string;
}
