import React from 'react'

import { Alert } from './styles'

export const ErrorAlert = ( {errorMessage = ''} ) => (
	<Alert>
		<h4>Error!</h4>
		<p>{errorMessage}</p>
	</Alert>
)