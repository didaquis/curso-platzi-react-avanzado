import React, { Fragment } from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Button, Title } from './styles'


export const UserForm = ({ onSubmit, title }) => {

	const email = useInputValue('')
	const password = useInputValue('')

	return (
		<Fragment>
			<Title>{title}</Title>
			<Form onSubmit={onSubmit}>
				<Input placeholder='Email' {...email} required autoFocus />
				<Input placeholder='Contraseña' type='password' {...password} required />
				<Button>{title}</Button>
			</Form>
		</Fragment>
	)
}