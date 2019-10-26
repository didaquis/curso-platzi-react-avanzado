import React from 'react'

import { InfoText } from '../InfoText'

import { Link, Grid, Image } from './styles'


export const ListOfFavs = ( { favs = [] } ) => {
	return (
		<Grid>
			{
				favs.map(fav => {
					return (
						<Link key={fav.id} to={`/detail/${fav.id}`}>
							<Image src={fav.src} />
						</Link>
					)
				})
			}
			{
				!favs.length ? <InfoText text={'Todavía no has marcado ninguna fotografía como favorita'} /> : null
			}
		</Grid>
	)
}
