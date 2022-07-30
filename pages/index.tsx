import type { NextPage } from 'next'
import Hero from '../components/home/Hero'

const Home: NextPage = () => {
	return (
		<>
			<Hero />

			<section data-scroll-section className='container -mt-24 pt-0 lg:-mt-16'>
				<p className='max-w-[40ch] text-4xl leading-normal tracking-tight xl:text-3xl lg:text-2xl md:text-xl'>
					Passionate about web development and UI/UX design. Specialized in
					JavaScript and its frameworks/libraries. Independent, highly
					motivated, and proactive self-starter.
				</p>
			</section>
		</>
	)
}

export default Home
