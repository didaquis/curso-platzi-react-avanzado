import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

import { Home } from './pages/Home'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))

import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { GlobalStyle } from './styles/GlobalStyles'



export const App = () => {
	const { isAuth } = useContext(Context)

	return (
		<Suspense fallback={<div />}>
			<GlobalStyle />
			<Logo />
			<Router>
				<NotFound default />
				<Home path='/' />
				<Home path='/pet/:id' />
				<Detail path='/detail/:detailId' />
				{ !isAuth && <NotRegisteredUser path='/login' /> }
				{ !isAuth && <Redirect from='/favs' to='/login' noThrow /> }
				{ !isAuth && <Redirect from='/user' to='/login' noThrow /> }

				{ isAuth && <Redirect from='/login' to='/' noThrow /> }
				<Favs path='/favs' />
				<User path='/user' />
			</Router>
			<NavBar />
		</Suspense>
	)
}
