import React from 'react'
import { FavsWithQuery } from '../containers/GetFavorites'

import { Layout } from '../components/Layout'


const FavsPage = () => {
	return (
		<Layout title={'Tus favoritos'} subtitle={'Aquí puedes encontrar tus favoritos'}>
			<FavsWithQuery />
		</Layout>
	)
}

FavsPage.displayName = 'Favs'

export default FavsPage