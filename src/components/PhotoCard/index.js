import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { ImgWrapper, Image, Article } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToogleLikeMutation } from '../../containers/ToogleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ( { id, liked, likes = 0, src = DEFAULT_IMAGE } ) => {
	const [show, element] = useNearScreen()

	return (
		<Article ref={element}>
			{
				show && <Fragment>
					<Link to={`/detail/${id}`}>
						<ImgWrapper>
							<Image src={src}/>
						</ImgWrapper>
					</Link>

					<ToogleLikeMutation>
						{
							(toggleLike) => {
								const handleFavClick = () => {
									toggleLike( { variables: { input: { id } } } )
								}
								return (
									<FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
								)
							}
						}
					</ToogleLikeMutation>
				</Fragment>
			}
		</Article>
	)
}

PhotoCard.propTypes = {
	id: PropTypes.string.isRequired,
	liked: PropTypes.bool.isRequired,
	likes: function (props, propName, componentName) {
		const propValue = props[propName]

		if (propValue === undefined) {
			return new Error(`Error in component: ${componentName}. The ${propName} value must be defined`)
		}

		if (propValue < 0) {
			return new Error(`Error in component: ${componentName}. The ${propName} value must be greater than 0`)
		}
	},
	src: PropTypes.string.isRequired
}















