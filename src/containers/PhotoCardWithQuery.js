import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const query = gql`
query getSinglePhoto($id: ID!) {
	photo(id:$id) {
		id
		categoryId
		src
		likes
		userId
		liked
	}
}
`

export const PhotoCardWithQuery = ( { id } ) => (
	<Query query={query} variables={ { id } }>
		{
			( { loading, error, data } ) => {
				const { photo = {} } = data || {}
				return <PhotoCard {...photo}/>
			}
		}
	</Query>
)