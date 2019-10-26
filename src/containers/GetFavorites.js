import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { Spinner } from '../components/Spinner'
import { ErrorAlert } from '../components/ErrorAlert'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_FAVS = gql`
query getFavs {
	favs {
		id
		categoryId
		src
		likes
		userId
	}
}
`

const renderProp = ( { loading, error, data } ) => {
	if (loading) return <Spinner key={'loading'} />
	if (error) return <ErrorAlert errorMessage={error.message} />

	const { favs } = data
	return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
	<Query query={GET_FAVS} fetchPolicy="cache-and-network">
		{
			renderProp
		}
	</Query>
)