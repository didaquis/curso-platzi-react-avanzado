import React, { Fragment } from 'react'
import { FavsWithQuery } from '../containers/GetFavorites'


export const Favs = () => {
	return (
		<Fragment>
			<h1>
				Favs
			</h1>
			<FavsWithQuery />
		</Fragment>
	)
}