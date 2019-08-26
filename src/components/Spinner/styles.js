import styled, { css, keyframes } from 'styled-components'

const spinnerRotationKeyFrame = keyframes`
	100% {
		transform: rotate(360deg);
	}
`

const spinnerDashKeyFrame = keyframes`
	0% {
		stroke-dasharray: 1, 150;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -35;
	}
	100% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -124;
	}
`

const rotation = () => css`animation: 2s ${spinnerRotationKeyFrame} linear infinite;`
const dash = () => css`animation: 1.5s ${spinnerDashKeyFrame} ease-in-out infinite;`

export const Svg = styled.svg`
	${rotation()};
	z-index: 2;
	position: absolute;
	top: 65px;
	left: 50%;
	margin: -25px 0 0 -25px;
	width: 50px;
	height: 50px;

	& .path {
		stroke: rgba(0, 0, 0, .7);
		stroke-linecap: round;
		${dash()};
	}
`
