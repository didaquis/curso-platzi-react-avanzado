import React from 'react'
import PropTypes from 'prop-types'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { Button } from './styles'


export const FavButton = ( { liked, likes, onClick } ) => {
	const Icon = liked ? MdFavorite : MdFavoriteBorder /* Es importante que la primera letra de la constante esté en mayúscula para que React la interprete como un componente durante el renderizado */

	return (
		<Button onClick={onClick}>
			<Icon size='32px' /> {likes} likes!
		</Button>
	)
}

FavButton.propTypes = {
	liked: PropTypes.bool.isRequired,
	likes: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}
