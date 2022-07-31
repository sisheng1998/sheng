import Link from 'next/link'
import { resumeLink, contactLinks, socialLinks } from '../data/links'
import MagneticButton from '../MagneticButton'
import Logo from '../Logo'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer
			data-scroll-section
			id='contact'
			className='mt-auto flex min-h-screen flex-col'
		>
			<div className='container pt-20 lg:pt-16 md:pt-12'>
				<hr className='bg-black/30' />

				<p className='my-36 max-w-[45ch] text-2xl leading-normal tracking-tight xl:my-32 lg:my-28 lg:text-xl md:my-20 md:text-lg'>
					Feel free to contact me if you have any questions or just want to say
					hello. Any collaborations and opportunities are always more than
					welcomed. Grab a copy of{' '}
					<Link href={resumeLink}>
						<a
							data-cursor='-hidden'
							className='ss-link-underline'
							target='_blank'
							rel='noreferrer noopener'
						>
							my resume
						</a>
					</Link>{' '}
					if you need. Thanks!
				</p>

				<p className='mb-4 text-lg text-black/50 lg:mb-3 lg:text-base'>
					Get In Touch
				</p>
				<Link href={contactLinks.email.link}>
					<a
						data-cursor='-hidden'
						className='ss-link-underline pb-3 text-4xl leading-none lg:text-3xl'
						target='_blank'
						rel='noreferrer noopener'
					>
						{contactLinks.email.text}
					</a>
				</Link>

				<div className='mt-6 space-x-12 md:space-x-8'>
					{Object.keys(socialLinks).map((key: string, index: number) => (
						<MagneticButton key={index} className='overflow-hidden'>
							<Link href={socialLinks[key]}>
								<a
									data-text={key}
									data-cursor='-exclusion -large'
									className='ss-link text-xl lg:text-lg'
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

			<div className='container mt-auto flex items-end justify-between pb-12 pt-0 text-lg text-black/50 lg:pb-8 md:block md:space-y-3 md:pb-6 md:text-base'>
				<p>&copy; {currentYear} - All Rights Reserved</p>
				<p>
					Design & Development
					<Logo className='ml-2 text-2xl text-black' />
				</p>
			</div>
		</footer>
	)
}

export default Footer
