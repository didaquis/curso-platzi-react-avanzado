import React, { Fragment, useContext } from 'react'

import { Context } from '../Context'

import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

import { UserForm } from '../components/UserForm'


export const NotRegisteredUser = () => {

	const { activateAuth} = useContext(Context)

	return (
		<Fragment>
			<RegisterMutation>
				{
					(register, { data, loading, error }) => {
						const onSubmit = ({ email, password }) => {
							const input = { email, password }
							const variables = { input }
							register({ variables }).then(({ data }) => {
								const { signup } = data
								activateAuth(signup)
							}).catch(e => {
								console.error(e.message) // eslint-disable-line no-console
							})
						}

						const errorMsg = error && 'El usuario ya existe o hay algún problema.'

						return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
					}
				}
			</RegisterMutation>

			<LoginMutation>
				{
					(login, { data, loading, error }) => {
						const onSubmit = ({ email, password }) => {
							const input = { email, password }
							const variables = { input }
							login({ variables }).then(({ data }) => {
								const { login } = data
								activateAuth(login)
							}).catch(e => {
								console.error(e.message) // eslint-disable-line no-console
							})
						}

						const errorMsg = error && 'Las credenciales no son correctas.'

						return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar sesión' />
					}
				}
			</LoginMutation>
		</Fragment>
	)
}