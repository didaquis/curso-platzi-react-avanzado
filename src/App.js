import React, { Fragment } from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Logo } from './components/Logo'

import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)
	const detailId = urlParams.get('detail')
	return (
		<Fragment>
			<GlobalStyle />
			<Logo />
			{
				detailId
					? <PhotoCardWithQuery id={detailId} />
					: <Fragment>
						<ListOfCategories />
						<ListOfPhotoCards categoryId={1} />
					</Fragment>
			}
		</Fragment>
	)
}
