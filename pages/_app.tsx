import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import '../styles/scroll.css'
import '../styles/cursor.css'

import Layout from '../components/layouts/Layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Sheng - Full Stack Developer</title>
				<meta
					name='description'
					content='Interested in web development, JavaScript and its libraries / frameworks. Passionate about programming and designing.'
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
				<meta name='google' content='notranslate' />
				<meta httpEquiv='Content-Language' content='en' />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
