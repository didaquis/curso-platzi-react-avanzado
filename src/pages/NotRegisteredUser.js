import React, { Fragment } from 'react'
import Context from '../Context'

import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

import { UserForm } from '../components/UserForm'


export const NotRegisteredUser = () => {
	return (
		<Context.Consumer>
			{
				({ activateAuth }) => {
					return (
						<Fragment>
							<RegisterMutation>
								{
									(register, { data, loading, error }) => {
										const onSubmit = ({ email, password }) => {
											const input = { email, password }
											const variables = { input }
											register({ variables }).then(activateAuth)
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
											login({ variables }).then(activateAuth)
										}

										const errorMsg = error && 'Las credenciales no son correctas.'

										return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar sesión' />
									}
								}
							</LoginMutation>

						</Fragment>
					)
				}
			}
		</Context.Consumer>
	)
}