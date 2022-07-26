import { useLayoutEffect, useEffect } from 'react'
import { useRouter } from 'next/router'

const Custom404 = () => {
	const router = useRouter()

	const useIsomorphicLayoutEffect =
		typeof window !== 'undefined' ? useLayoutEffect : useEffect

	useIsomorphicLayoutEffect(() => {
		router.replace('/')
	})

	return null
}

export default Custom404
