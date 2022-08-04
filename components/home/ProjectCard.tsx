import Link from 'next/link'
import { contactLinks } from '../data/links'
import { projectData } from '../data/projects'
import MagneticButton from '../MagneticButton'

const ProjectCard = ({
	title,
	description,
	requestDemoEmailData,
	src,
	alt,
	url,
	links,
	skills,
}: projectData) => {
	const isCurrentWebsite = url === '/'

	return (
		<div className='flex flex-col pb-32 lg:pb-24 md:pb-16'>
			<div
				data-cursor-text={
					isCurrentWebsite ? 'Current Website' : 'Visit Website'
				}
				className='group overflow-hidden rounded-2xl'
			>
				<Link href={url}>
					<a
						className={
							isCurrentWebsite ? 'pointer-events-none cursor-default' : ''
						}
						target='_blank'
						rel='noreferrer noopener'
					>
						<picture>
							<source srcSet={src} type='image/jpg' />
							<img
								src={src}
								alt={alt}
								width='664'
								height='498'
								className='w-full transition-transform duration-500 group-hover:scale-105 group-hover:duration-700'
							/>
						</picture>
					</a>
				</Link>
			</div>

			<div className='mt-6 mb-9'>
				<p className='flex flex-wrap items-center'>
					{skills.map((skill, index) => (
						<span
							key={index}
							className={`mr-2 mt-3 rounded-full bg-opacity-75 py-1 px-3 ${skill.classes} md:text-sm`}
						>
							{skill.name}
						</span>
					))}
				</p>

				<h3 className='mt-9 text-3xl font-medium leading-tight md:text-2xl'>
					{title}
				</h3>

				<p className='mt-3 text-xl text-black/75 md:text-lg'>{description}</p>

				{requestDemoEmailData && (
					<Link href={contactLinks.email.link + requestDemoEmailData}>
						<a
							data-cursor='-hidden'
							className='ss-link-underline mt-6 text-base md:text-sm'
							target='_blank'
							rel='noreferrer noopener'
						>
							Request Demo Account
						</a>
					</Link>
				)}
			</div>

			<div className='mt-auto'>
				<Link href={url}>
					<a
						data-cursor='-hidden'
						className={`ss-link-underline mt-3 mr-12 pb-1.5 text-xl lg:text-lg md:mr-8 ${
							isCurrentWebsite ? 'pointer-events-none line-through' : ''
						}`}
						target='_blank'
						rel='noreferrer noopener'
					>
						Visit Website
					</a>
				</Link>

				{Object.keys(links).length !== 0 &&
					Object.keys(links).map((key: string, index: number) => (
						<MagneticButton
							key={index}
							className='mr-12 mt-3 overflow-hidden md:mr-8'
						>
							<Link href={links[key]}>
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
	)
}

export default ProjectCard
