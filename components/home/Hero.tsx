const Hero = () => {
	return (
		<section
			id='about'
			data-scroll-section
			className='container flex min-h-screen flex-col justify-center lg:min-h-0'
		>
			<div className='my-20 lg:my-14 sm:my-10'>
				<picture>
					<source srcSet='/images/meme.jpg' type='image/jpg' />
					<img
						src='/images/meme.jpg'
						alt='Meme'
						width='800'
						height='800'
						className='mx-auto mb-16 hidden w-full max-w-xs object-contain sm:block'
					/>
				</picture>

				<h3 className='text-2xl sm:text-lg'>Hi there, I&apos;m Si Sheng</h3>

				<h1
					data-cursor-img='/images/meme.jpg'
					className='outline-text -ml-1.5 -mt-4 cursor-default whitespace-nowrap py-3 text-9xl font-semibold leading-tight transition-colors duration-300 hover:text-black xl:-ml-1 xl:mt-0 xl:text-8xl lg:-ml-0.5 lg:text-7xl sm:hidden'
				>
					Full Stack Developer
				</h1>

				<h2 className='-ml-0.5 hidden py-3 text-5xl font-medium sm:block'>
					Full Stack Developer
				</h2>
			</div>
		</section>
	)
}

export default Hero
