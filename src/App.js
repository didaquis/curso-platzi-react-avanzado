import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
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
					: <Router>
						<Home path='/' />
						<Home path='/pet/:id' />
					</Router>
			}
		</Fragment>
	)
}
