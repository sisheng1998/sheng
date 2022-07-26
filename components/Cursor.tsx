import { useEffect } from 'react'
import MouseFollower from 'mouse-follower'
import gsap from 'gsap'

MouseFollower.registerGSAP(gsap)

const Cursor = () => {
	useEffect(() => {
		const cursor = new MouseFollower({
			className: 'ss-cursor',
			innerClassName: 'ss-cursor-inner',
			textClassName: 'ss-cursor-text',
			mediaClassName: 'ss-cursor-media',
			mediaBoxClassName: 'ss-cursor-media-box',
			iconSvgClassName: 'ss-svgsprite',
		})

		return () => {
			cursor.destroy()
		}
	}, [])

	return null
}

export default Cursor
