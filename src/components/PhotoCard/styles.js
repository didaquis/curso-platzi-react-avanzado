import styled, { keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
	from {
		filter: blur(5px);
		opacity: 0;
	}

	to {
		filter: blur(0);
		opacity: 1;
	}
`

export const ImgWrapper = styled.div`
	border-radius: 10px;
	display: block;
	height: 0;
	overflow: hidden;
	padding: 56.25% 0 0 0; /* Hint: force the aspect ratio of images */
	position: relative;
	width: 100%;
`

export const Image = styled.img`
	animation: 1s ${fadeInKeyFrames} ease;
	box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	padding-top: 8px;
	& svg {
		margin-right: 4px;
	}
`
