import Link from 'next/link'
import { projectData } from '../data/projects'
import MagneticButton from '../MagneticButton'

const ProjectCard = ({
	title,
	description,
	src,
	alt,
	url,
	links,
	skills,
}: projectData) => {
	return (
		<div className='flex flex-col pb-32 lg:pb-24 md:pb-16'>
			<div
				data-cursor-text='Visit Website'
				className='group overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-95'
			>
				<Link href={url}>
					<a target='_blank' rel='noreferrer noopener'>
						<picture>
							<source srcSet={src} type='image/jpg' />
							<img
								src={src}
								alt={alt}
								width='664'
								height='498'
								className='w-full transition-transform duration-500 group-hover:scale-110 group-hover:duration-700'
							/>
						</picture>
					</a>
				</Link>
			</div>

			<p className='mb-8 mt-9 flex flex-wrap items-center'>
				{skills.map((skill, index) => (
					<span
						key={index}
						className={`mr-2 mt-3 rounded-full bg-opacity-75 py-1 px-3 font-medium ${skill.classes} md:mr-1.5 md:mt-2.5 md:text-sm`}
					>
						{skill.name}
					</span>
				))}
			</p>

			<h3 className='text-3xl font-medium leading-tight md:text-2xl'>
				{title}
			</h3>
			<p className='mt-4 mb-12 text-xl'>{description}</p>

			<div className='mt-auto space-x-12 md:space-x-8'>
				<Link href={url}>
					<a
						data-cursor='-hidden'
						className='ss-link-underline pb-3 text-xl leading-none lg:text-lg'
						target='_blank'
						rel='noreferrer noopener'
					>
						Visit Website
					</a>
				</Link>

				{Object.keys(links).length !== 0 &&
					Object.keys(links).map((key: string, index: number) => (
						<MagneticButton key={index} className='overflow-hidden'>
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
