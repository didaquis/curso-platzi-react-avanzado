import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCard } from './components/PhotoCard'

import { GlobalStyle } from './GlobalStyles'

export const App = () => (
	<React.Fragment>
		<GlobalStyle />
		<ListOfCategories />
		<PhotoCard />
	</React.Fragment>
)
