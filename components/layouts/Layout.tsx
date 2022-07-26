import Header from './Header'
import Scroll from '../Scroll'
import Cursor from '../Cursor'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Scroll>
				<Header />
				<main data-scroll-section>{children}</main>
			</Scroll>

			<Cursor />
		</>
	)
}

export default Layout
