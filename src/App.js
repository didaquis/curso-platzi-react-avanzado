import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import Context from './Context'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Favs } from './pages/Favs'
import { User } from './pages/User'

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

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

			<Context.Consumer>
				{
					({isAuth}) =>
						isAuth
							? <Router>
								<Favs path='/favs' />
								<User path='/user' />
							</Router>
							: <Router>
								<NotRegisteredUser path='/favs' />
								<NotRegisteredUser path='/user' />
							</Router>
				}
			</Context.Consumer>

			<NavBar />
		</Fragment>
	)
}
