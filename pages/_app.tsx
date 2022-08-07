import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import '../styles/scroll.css'
import '../styles/cursor.css'

import Preloader from '../components/Preloader'
import Layout from '../components/layouts/Layout'
import * as gtag from '../utils/gtag'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			gtag.pageview(url)
		}

		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<>
			<Head>
				<title>Si Sheng - Full Stack Developer</title>
				<meta name='title' content='Si Sheng - Full Stack Developer' />
				<meta
					name='description'
					content='Full Stack Developer in Malaysia. Specialized in JavaScript and its frameworks / libraries. Independent, highly motivated, and proactive self-starter.'
				/>
				<meta
					name='keywords'
					content='Full Stack Developer, JavaScript Developer, Web Developer, Si Sheng'
				/>
				<meta name='robots' content='index, follow' />
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta name='language' content='English' />
				<meta name='author' content='Ooi Si Sheng' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sisheng.my/' />
				<meta property='og:title' content='Si Sheng - Full Stack Developer' />
				<meta
					property='og:description'
					content='Full Stack Developer in Malaysia. Specialized in JavaScript and its frameworks / libraries. Independent, highly motivated, and proactive self-starter.'
				/>
				<meta
					property='og:image'
					content='https://sisheng.my/images/open-graph-img.jpg'
				/>
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://sisheng.my/' />
				<meta
					property='twitter:title'
					content='Si Sheng - Full Stack Developer'
				/>
				<meta
					property='twitter:description'
					content='Full Stack Developer in Malaysia. Specialized in JavaScript and its frameworks / libraries. Independent, highly motivated, and proactive self-starter.'
				/>
				<meta
					property='twitter:image'
					content='https://sisheng.my/images/open-graph-img.jpg'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicons/favicon-16x16.png'
				/>
				<link
					rel='mask-icon'
					href='/favicons/safari-pinned-tab.svg'
					color='#ffffff'
				/>
			</Head>

			<Preloader />

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
