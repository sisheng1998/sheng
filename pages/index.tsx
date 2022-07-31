import type { NextPage } from 'next'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Projects from '../components/home/Projects'

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<About />
			<Projects />
		</>
	)
}

export default Home
