import { StyledIcon } from './Icon.styled';
import { IconProps } from './Icon.types';

const Icon: React.FC<IconProps> = ({ name, color, size, ...otherProps }) => {
	return <StyledIcon className={`icon-${name}`} color={color} size={size} {...otherProps} />;
};

export default Icon;
