import React, { Fragment } from 'react'
import { FavsWithQuery } from '../containers/GetFavorites'

import { PageTitle } from '../components/PageTitle'


export const Favs = () => {
	return (
		<Fragment>
			<PageTitle text="Tus favoritos" />
			<FavsWithQuery />
		</Fragment>
	)
}