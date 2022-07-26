import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll'

interface ScrollProps {
	children: React.ReactNode
}

const Scroll = ({ children }: ScrollProps) => {
	const { asPath } = useRouter()
	const containerRef = useRef(null)

	return (
		<RLSProvider
			options={{
				smooth: true,
				scrollbarClass: 'ss-scrollbar',
			}}
			watch={[]}
			location={asPath}
			onLocationChange={(scroll: any) =>
				scroll.scrollTo(0, { duration: 0, disableLerp: true })
			}
			containerRef={containerRef}
		>
			<div data-scroll-container ref={containerRef}>
				{children}
			</div>
		</RLSProvider>
	)
}

export default Scroll
