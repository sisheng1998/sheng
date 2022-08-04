import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

interface ScrollProps {
	children: React.ReactNode
}

const Scroll = ({ children }: ScrollProps) => {
	const { asPath } = useRouter()
	const containerRef = useRef(null)

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				scrollbarClass: 'ss-scrollbar',
				smartphone: {
					smooth: true,
				},
				tablet: {
					smooth: true,
				},
			}}
			watch={[]}
			containerRef={containerRef}
			location={asPath}
			onLocationChange={(scroll: any) =>
				scroll.scrollTo(0, { duration: 0, disableLerp: true })
			}
		>
			<main data-scroll-container ref={containerRef} className='flex flex-col'>
				{children}
			</main>
		</LocomotiveScrollProvider>
	)
}

export default Scroll
