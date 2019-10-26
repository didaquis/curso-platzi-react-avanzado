import React, { Fragment } from 'react'
import { SubmitButton } from '../SubmitButton'
import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Title, Error } from './styles'


export const UserForm = ({ error, disabled, onSubmit, title }) => {

	const email = useInputValue('')
	const password = useInputValue('')

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit({ email: email.value, password: password.value })
	}

	return (
		<Fragment>
			<Form disabled={disabled} onSubmit={handleSubmit}>
				<Title>{title}</Title>
				<Input disabled={disabled} placeholder='Email' {...email} required autoFocus />
				<Input disabled={disabled} placeholder='Contraseña' type='password' {...password} required />
				<SubmitButton disabled={disabled}>{title}</SubmitButton>
			</Form>
			{
				error && <Error>{error}</Error>
			}
		</Fragment>
	)
}