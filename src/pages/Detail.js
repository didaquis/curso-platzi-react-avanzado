import React from 'react'

import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

const DetailPage = ( { detailId } ) => {
	return (
		<PhotoCardWithQuery id={detailId} />
	)
}

DetailPage.displayName = 'Detail'

export default DetailPage