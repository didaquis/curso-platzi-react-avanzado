import React, { Fragment, useEffect, useState } from 'react'

import { Category } from '../Category'
import { Spinner } from '../Spinner'

import { List, Item } from './styles'

function useCategoriesData () { /* This is a custom hook! */
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(function () {
		setLoading(true)

		window.fetch('https://curso-platzi-react-avanzado.didaquis.now.sh/categories')
			.then(res => res.json())
			.then(response => {
				setCategories(response)
				setLoading(false)
			})
	}, []) /* Remember: if you don't use second parameter of useEffect, the useEffect can force a loop of rendering! */

	return { categories, loading }
}

export const ListOfCategories = () => {
	const { categories, loading } = useCategoriesData()
	const [showFixed, setShowFixed] = useState(false)

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
		<List fixed={fixed}>
			{
				loading
					? <Spinner key={'loading'} />
					: categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
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
