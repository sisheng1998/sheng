import { useState } from 'react'
import Logo from '../Logo'
import MagneticButton from '../MagneticButton'
import Menu from './Menu'

interface NavBarProps {
	setSection: Function
}

const NavBar = ({ setSection }: NavBarProps) => {
	const [openMenu, setOpenMenu] = useState<boolean>(false)

	return (
		<nav className={openMenu ? '-open' : ''}>
			<Logo
				className={`fixed top-16 left-16 z-[251] lg:top-8 lg:left-8 sm:hidden ${
					openMenu ? '' : 'pointer-events-none opacity-0'
				}`}
			/>

			<MagneticButton
				data-cursor='-large'
				data-cursor-stick='.menu'
				className='menu fixed top-16 right-16 z-[251] flex h-8 w-6 items-center transition-colors duration-200 before:absolute before:-inset-6 hover:text-white hover:delay-150 before:hover:-inset-20 lg:top-8 lg:right-8'
				isMenu={true}
				onClick={() => setOpenMenu((prev) => !prev)}
			>
				<div className='relative w-full'>
					<span className='absolute -top-1 left-0 h-0.5 w-full rounded-full bg-current'></span>
					<span className='absolute top-1 left-0 h-0.5 w-full rounded-full bg-current'></span>
				</div>
			</MagneticButton>

			<Menu
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
				setSection={setSection}
			/>
		</nav>
	)
}

export default NavBar
