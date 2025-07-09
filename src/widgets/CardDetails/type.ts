export type TCardDetailsProps = {
	isLiked: boolean;
	skillName: string;
	skillCategory: string;
	skillSubCategory: string;
	skillDescription: string;
	photos: string[];
	onShareButtonClick?: () => void;
	onLikeButtonClick?: () => void;
	onMoreButtonClick?: () => void;
	onOfferButtonClick?: () => void;
};
