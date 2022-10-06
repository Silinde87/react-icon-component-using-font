import { IconNames } from '../../utils/constants/icon.constants';

export interface IconProps {
	name: IconNames;
	color: string;
	size: IconSizes;
	style?: object;
}

export enum IconSizes {
	SMALL = '18px',
	MEDIUM = '24px',
	LARGE_MOBILE = '40px',
	LARGE = '48px',
}

export type IconStyleProps = {
	color: string;
	size: IconSizes;
};
