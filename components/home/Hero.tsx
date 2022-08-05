const Hero = () => {
	return (
		<section
			data-scroll-section
			className='ss-hero-section container flex min-h-screen flex-col justify-center lg:min-h-0'
		>
			<div className='my-20 lg:my-14 md:my-10'>
				<div className='img-container mx-auto mb-16 hidden w-full max-w-xs md:block'>
					<picture>
						<source srcSet='/images/meme.jpg' type='image/jpg' />
						<img
							src='/images/meme.jpg'
							alt='Meme'
							width='800'
							height='800'
							className='w-full object-contain'
						/>
					</picture>
				</div>

				<h3 className='overflow-hidden text-2xl lg:text-xl md:text-lg'>
					<span className='inline-block'>Hi there, I&apos;m Si Sheng</span>
				</h3>

				<h1
					data-cursor-img='/images/meme.jpg'
					className='outline-text -ml-1.5 -mt-4 cursor-default overflow-hidden py-3 text-9xl font-semibold leading-tight transition-colors duration-300 hover:text-black 2xl:text-[9vw] xl:-ml-1 xl:-mt-2 lg:-ml-0.5 md:hidden'
				>
					<span className='inline-block'>Full</span>{' '}
					<span className='inline-block'>Stack</span>{' '}
					<span className='inline-block'>Developer</span>
				</h1>

				<h1 className='-ml-0.5 -mt-2 hidden overflow-hidden py-3 text-6xl font-medium md:block'>
					<span className='inline-block'>Full Stack Developer</span>
				</h1>
			</div>
		</section>
	)
}

export default Hero
