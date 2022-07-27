import Link from 'next/link'
import {
	resumeLink,
	menuLinks,
	contactLinks,
	socialLinks,
} from '../config/links'
import MagneticButton from '../MagneticButton'

const Menu = ({ openMenu }: { openMenu: boolean }) => {
	return (
		<>
			<div
				className={`fixed inset-0 z-[199] bg-black/5 transition-opacity duration-300 ${
					openMenu ? '' : 'pointer-events-none opacity-0'
				}`}
			></div>

			<div
				className={`fixed top-0 right-0 bottom-0 z-[200] flex w-full max-w-xl flex-col overflow-auto bg-white p-28 transition-all duration-700 ${
					openMenu ? '' : 'pointer-events-none translate-x-full opacity-0'
				}`}
			>
				<div className='mb-32 mt-auto'>
					<p className='mb-4 text-black/50'>Menu</p>

					<MagneticButton className='block overflow-hidden'>
						<Link href={resumeLink}>
							<a
								data-text='Resume'
								data-cursor='-exclusion -large'
								className='ss-link py-1 text-5xl tracking-tight'
								target='_blank'
								rel='noreferrer noopener'
							>
								Resume
							</a>
						</Link>
					</MagneticButton>

					{Object.keys(menuLinks).map((key: string, index: number) => (
						<MagneticButton key={index} className='mt-3 block overflow-hidden'>
							<Link href={menuLinks[key]}>
								<a
									data-text={key}
									data-cursor='-exclusion -large'
									className='ss-link py-1 text-5xl tracking-tight'
								>
									{key}
								</a>
							</Link>
						</MagneticButton>
					))}
				</div>

				<div className='mb-12'>
					<p className='mb-4 text-black/50'>Get In Touch</p>

					<Link href={contactLinks.email.link}>
						<a
							data-cursor='-hidden'
							className='ss-link-underline text-xl'
							target='_blank'
							rel='noreferrer noopener'
						>
							{contactLinks.email.text}
						</a>
					</Link>
				</div>

				<div>
					<p className='mb-4 text-black/50'>Social Links</p>

					<div className='space-x-8'>
						{Object.keys(socialLinks).map((key: string, index: number) => (
							<MagneticButton key={index} className='overflow-hidden'>
								<Link href={socialLinks[key]}>
									<a
										data-text={key}
										data-cursor='-exclusion -large'
										className='ss-link text-lg'
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
