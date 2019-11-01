import React, { Fragment } from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

const HomePage = ( { id } ) => {
	return (
		<Fragment>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={id} />
		</Fragment>
	)
}

export const Home = React.memo(HomePage, (prevProps, props) => {
	return prevProps.id === props.id
})