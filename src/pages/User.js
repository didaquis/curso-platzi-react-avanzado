import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'

import { SubmitButton } from '../components/SubmitButton'
import { PageTitle } from '../components/PageTitle'


export const User = () => {
	const { removeAuth } = useContext(Context)
	return (
		<Fragment>
			<PageTitle text="Tu perfil" />
			<SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
		</Fragment>
	)
}