interface SkillCardsInfiniteScrollProps {
	dataLength: number;
	next: () => void;
	hasMore: boolean;
	loader: React.ReactElement;
	endMessage?: React.ReactElement;
}

interface SkillCardsListProps {
	SkillCard: React.ElementType;
	SkillCardsProps: (React.ComponentProps<React.ElementType> & {
		index: number;
	})[];
	title: string;
}

export interface SkillCardsListDemoProps extends SkillCardsListProps {
	buttonMoreType: 'watchAll' | 'arrow' | null;
	onClickButtonMore?: () => void;
	maxCardCount?: number;
}

export interface SkillCardsListInfiniteProps extends SkillCardsListProps {
	InfiniteScrollProps: SkillCardsInfiniteScrollProps;
	isHasButtonNew: boolean;
	onClickButtonNew?: () => void;
}
