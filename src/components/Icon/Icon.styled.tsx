import styled from 'styled-components';
import { IconStyleProps } from './Icon.types';

const StyledIcon = styled.i<IconStyleProps>`
	display: inline;
	color: ${({ color }) => color};
	font-size: ${({ size }) => size};
	height: ${({ size }) => size};
	width: ${({ size }) => size};
`;

export { StyledIcon };
