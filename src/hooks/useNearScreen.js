import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
	/* Podemos saber que elemento está en el viewport y cual no. 
	 * Esto permite evitar renderizar elementos que no se van a visualizar
	 */

	const element = useRef(null)
	
	const [show, setShow] = useState(false)


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

	return [show, element]
}