import React from 'react'

import { Svg } from './styles'

export const Spinner = () => {
	return (
		<Svg viewBox="0 0 50 50">
			<circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
		</Svg>
	)
}
