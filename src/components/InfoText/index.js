import React from 'react'

import { Info } from './styles'

export const InfoText = ( {text = ''} ) => (
	<Info>
		<p>{text}</p>
	</Info>
)