import React, { Fragment, useEffect, useRef, useState } from 'react'

import { ImgWrapper, Image, Button, Article } from './styles'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ( { id, likes = 0, src = DEFAULT_IMAGE } ) => {

	/* Podemos saber que elemento está en el viewport y cual no. 
	 * Esto permite evitar renderizar elementos que no se van a visualizar
	 */
	const [show, setShow] = useState(false)

	const key = `like-${id}`
	const [liked, setLiked] = useState(() => {
		try {
			const like = window.localStorage.getItem(key)
			return like
		} catch (e) {
			return false
		}
	})


	const element = useRef(null)
	useEffect(function () {
		Promise.resolve(
			typeof window.IntersectionObserver !== 'undefined'
				? window.IntersectionObserver
				: import('intersection-observer') // import dinámico. Lo usamos para cargar el polyfill y obtener soporte para IE11
		).then(() => {
			const observer = new window.IntersectionObserver(function (entries) {
				const { isIntersecting } = entries[0]
				if (isIntersecting) {
					setShow(true)
					observer.disconnect()
				}
			})

			observer.observe(element.current)
		})
	}, [element])


	const Icon = liked ? MdFavorite : MdFavoriteBorder /* Es importante que la primera letra de la constante esté en mayúscula para que React la interprete como un componente durante el renderizado */

	const setLocalStorage = value => {
		try {
			window.localStorage.setItem(key, value)
			setLiked(value)
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<Article ref={element}>
			{
				show && <Fragment>
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Image src={src}/>
						</ImgWrapper>
					</a>

					<Button onClick={() => setLocalStorage(!liked)}>
						<Icon size='32px' /> {likes} likes!
					</Button>
				</Fragment>
			}
		</Article>
	)
}
