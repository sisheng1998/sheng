const Hero = () => {
	return (
		<section
			data-scroll-section
			className='container flex min-h-screen flex-col justify-center lg:min-h-0'
		>
			<div className='my-20 lg:my-14 md:my-10'>
				<picture>
					<source srcSet='/images/meme.jpg' type='image/jpg' />
					<img
						src='/images/meme.jpg'
						alt='Meme'
						width='800'
						height='800'
						className='mx-auto mb-16 hidden w-full max-w-xs object-contain md:block'
					/>
				</picture>

				<h3 className='text-2xl lg:text-xl md:text-lg'>
					Hi there, I&apos;m Si Sheng
				</h3>

				<h1
					data-cursor-img='/images/meme.jpg'
					className='outline-text -ml-1.5 -mt-4 cursor-default py-3 text-9xl font-semibold leading-tight transition-colors duration-300 hover:text-black 2xl:text-[9vw] xl:-ml-1 xl:-mt-2 lg:-ml-0.5 md:hidden'
				>
					Full Stack Developer
				</h1>

				<h2 className='-ml-0.5 -mt-2 hidden py-3 text-6xl font-medium md:block'>
					Full Stack Developer
				</h2>
			</div>
		</section>
	)
}

export default Hero
