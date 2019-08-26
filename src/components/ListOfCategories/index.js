import React, { Fragment, useEffect, useState } from 'react'

import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = ( ) => {
	const [categories, setCategories] = useState([])
	const [showFixed, setShowFixed] = useState(false)

	useEffect(function () {
		window.fetch('https://curso-platzi-react-avanzado.didaquis.now.sh/categories')
			.then(res => res.json())
			.then(response => {
				setCategories(response)
			})
	}, []) /* Remember: if you don't use second parameter of useEffect, the useEffect can force a loop of rendering! */

	useEffect(function () {
		const onScroll = () => {
			const isShowFixed = window.scrollY > 200
			setShowFixed(isShowFixed)
		}

		document.addEventListener('scroll', onScroll)

		/* useEffect can return a function. In this case, we are removing a DOM listener to prevent a memory leak */
		return function () {
			document.removeEventListener('scroll', onScroll)
		}
	}, [showFixed])

	const renderList = (fixed) => (
		<List className={ fixed ? 'fixed' : '' }>
			{
				categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
			}
		</List>
	)

	return (
		<Fragment>
			{ showFixed && renderList(true) }
			{ renderList() }
		</Fragment>
	)
}
