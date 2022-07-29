import type { NextPage } from 'next'
import Hero from '../components/home/Hero'

const Home: NextPage = () => {
	return (
		<>
			<Hero />

			<section data-scroll-section className='container -mt-24 pt-0'>
				<p className='max-w-[40ch] text-4xl leading-normal tracking-tight lg:text-3xl sm:text-xl'>
					Leading digital agency with solid design and development expertise. We
					build ready-made websites, mobile applications, and elaborate online
					business services.
				</p>
			</section>
		</>
	)
}

export default Home
