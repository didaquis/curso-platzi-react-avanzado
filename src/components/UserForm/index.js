import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'


export const UserForm = ({ onSubmit }) => {

	const email = useInputValue('')
	const password = useInputValue('')

	return (
		<form onSubmit={onSubmit}>
			<input placeholder='Email' {...email} required autoFocus />
			<input placeholder='Contraseña' type='password' {...password} required />
			<button>Iniciar sesión</button>
		</form>
	)
}