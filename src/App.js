import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { Logo } from './components/Logo'

import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Logo />
			<Router>
				<Home path='/' />
				<Home path='/pet/:id' />
				<Detail path='/detail/:detailId' />
			</Router>
		</Fragment>
	)
}
