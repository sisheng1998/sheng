import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<>
			<div data-scroll-section className='h-screen bg-red-50'>
				test
			</div>
			<div data-scroll-section id='projects' className='h-screen bg-blue-50'>
				projects
			</div>
			<div data-scroll-section className='h-screen bg-gray-50'>
				test
			</div>
			<div data-scroll-section id='about' className='h-screen bg-green-50'>
				about
			</div>
			<div data-scroll-section className='h-screen bg-indigo-50'>
				test
			</div>
			<div data-scroll-section className='h-screen'>
				test
			</div>
			<div data-scroll-section className='h-screen'>
				test
			</div>
			<div data-scroll-section id='contact' className='h-screen'>
				contact
			</div>
		</>
	)
}

export default Home
