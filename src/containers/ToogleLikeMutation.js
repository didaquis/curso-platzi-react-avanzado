import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'



const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
	likeAnonymousPhoto(input: $input) {
	id,
	liked, 
	likes
	}
}
`

export const ToogleLikeMutation = ( { children } ) => {
	return (
		<Mutation mutation={LIKE_PHOTO}>
			{children}
		</Mutation>
	)
}
