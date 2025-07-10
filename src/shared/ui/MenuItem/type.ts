export default interface MenuItemUIProps {
	to: string;
	logoUrl?: string;
	svg?: React.ReactElement;
	text: string;
	onClick?: () => void;
	isActiveHardCoded?: boolean;
	end?: boolean;
}
