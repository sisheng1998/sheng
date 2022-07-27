import NavBar from './NavBar'
import Header from './Header'
import Scroll from '../Scroll'
import Cursor from '../Cursor'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<NavBar />

			<Scroll>
				<Header />
				{children}
			</Scroll>

			<Cursor />
		</>
	)
}

export default Layout
