import Link from 'next/link'
import {
	resumeLink,
	menuLinks,
	contactLinks,
	socialLinks,
} from '../config/links'
import MagneticButton from '../MagneticButton'

interface MenuProps {
	openMenu: boolean
	setOpenMenu: Function
	setSection: Function
}

const Menu = ({ openMenu, setOpenMenu, setSection }: MenuProps) => {
	return (
		<>
			<div
				className={`fixed inset-0 z-[199] bg-neutral-100 bg-opacity-70 transition-opacity duration-300 ${
					openMenu ? '' : 'pointer-events-none opacity-0'
				}`}
			></div>

			<div
				className={`fixed top-0 right-0 bottom-0 z-[200] flex w-full max-w-xl flex-col overflow-auto bg-white p-28 transition-all duration-700 xl:max-w-md xl:p-14 md:left-0 md:p-6 ${
					openMenu ? '' : 'pointer-events-none translate-x-full opacity-0'
				}`}
			>
				<div className='mt-auto mb-14 tall:mb-32'>
					<p className='mb-4 text-black/50 lg:text-sm'>Menu</p>

					<MagneticButton
						className='mb-3 hidden overflow-hidden md:block'
						onClick={() => setOpenMenu(false)}
					>
						<Link href='/'>
							<a
								data-text='Home'
								data-cursor='-exclusion -large'
								className='ss-link py-1 text-5xl tracking-tight lg:text-4xl'
							>
								Home
							</a>
						</Link>
					</MagneticButton>

					{Object.keys(menuLinks).map((key: string, index: number) =>
						menuLinks[key].startsWith('/') ? (
							<MagneticButton
								key={index}
								className='mb-3 block overflow-hidden'
								onClick={() => {
									setOpenMenu(false)
								}}
							>
								<Link href={menuLinks[key]}>
									<a
										data-text={key}
										data-cursor='-exclusion -large'
										className='ss-link py-1 text-5xl tracking-tight lg:text-4xl'
									>
										{key}
									</a>
								</Link>
							</MagneticButton>
						) : (
							<MagneticButton
								key={index}
								className='mb-3 block overflow-hidden'
								onClick={() => {
									setSection(menuLinks[key])
									setOpenMenu(false)
								}}
							>
								<span
									data-text={key}
									data-cursor='-exclusion -large'
									className='ss-link py-1 text-5xl tracking-tight lg:text-4xl'
								>
									{key}
								</span>
							</MagneticButton>
						)
					)}

					<MagneticButton className='block overflow-hidden'>
						<Link href={resumeLink}>
							<a
								data-text='Resume'
								data-cursor='-exclusion -large'
								className='ss-link py-1 text-5xl tracking-tight lg:text-4xl'
								target='_blank'
								rel='noreferrer noopener'
							>
								Resume
							</a>
						</Link>
					</MagneticButton>
				</div>

				<div className='mb-12'>
					<p className='mb-4 text-black/50 lg:text-sm'>Get In Touch</p>

					<Link href={contactLinks.email.link}>
						<a
							data-cursor='-hidden'
							className='ss-link-underline text-xl leading-none lg:text-lg'
							target='_blank'
							rel='noreferrer noopener'
						>
							{contactLinks.email.text}
						</a>
					</Link>
				</div>

				<div>
					<p className='mb-4 text-black/50 lg:text-sm'>Social Links</p>

					<div className='space-x-8'>
						{Object.keys(socialLinks).map((key: string, index: number) => (
							<MagneticButton key={index} className='overflow-hidden'>
								<Link href={socialLinks[key]}>
									<a
										data-text={key}
										data-cursor='-exclusion -large'
										className='ss-link text-lg lg:text-base'
										target='_blank'
										rel='noreferrer noopener'
									>
										{key}
									</a>
								</Link>
							</MagneticButton>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Menu
