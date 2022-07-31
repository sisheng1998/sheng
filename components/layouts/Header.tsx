import { useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Logo from '../Logo'
import Button from '../Button'
import { resumeLink } from '../data/links'

interface HeaderProps {
	section: string
	setSection: Function
}

const Header = ({ section, setSection }: HeaderProps) => {
	const { scroll } = useLocomotiveScroll()

	useEffect(() => {
		if (section !== '') {
			const option: { offset: number } = {
				offset: section.includes('about') ? -160 : 0,
			}

			scroll.scrollTo(document.querySelector(section), option)
			setSection('')
		}
	}, [section, setSection, scroll])

	return (
		<header
			data-scroll-section
			className='absolute inset-x-0 top-0 z-10 flex items-center justify-between p-16 xl:p-10 lg:p-8 md:p-6'
		>
			<Logo />

			<div className='flex items-center md:hidden'>
				<Button
					text='Resume'
					href={resumeLink}
					newTab={true}
					className='-my-4'
				/>

				<div className='pointer-events-none ml-14 h-8 w-6'></div>
			</div>
		</header>
	)
}

export default Header
