import { useState } from 'react'

import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import Scroll from '../Scroll'
import Cursor from '../Cursor'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	const [section, setSection] = useState('')

	return (
		<>
			<NavBar setSection={setSection} />

			<Scroll>
				<Header section={section} setSection={setSection} />
				{children}
				<Footer />
			</Scroll>

			<Cursor />
		</>
	)
}

export default Layout
