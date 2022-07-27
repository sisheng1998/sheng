import { useState } from 'react'
import Logo from '../Logo'
import MagneticButton from '../MagneticButton'
import Menu from './Menu'

const NavBar = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false)

	return (
		<nav className={openMenu ? '-open' : ''}>
			<Logo
				className={`fixed top-16 left-16 z-[251] ${
					openMenu ? '' : 'pointer-events-none opacity-0'
				}`}
			/>

			<MagneticButton
				data-cursor='-large'
				data-cursor-stick='.menu'
				className='menu fixed top-16 right-16 z-[251] inline-block h-6 w-6 transition-colors duration-200 before:absolute before:-inset-6 hover:text-white hover:delay-150 before:hover:-inset-[5rem]'
				isMenu={true}
				onClick={() => setOpenMenu((prev) => !prev)}
			>
				<span className='relative top-0 my-1.5 block h-0.5 w-full bg-current'></span>
				<span className='relative top-0 my-1.5 block h-0.5 w-full bg-current'></span>
			</MagneticButton>

			<Menu openMenu={openMenu} />
		</nav>
	)
}

export default NavBar
