import { useEffect, useRef } from 'react'
import gsap, { Power2 } from 'gsap'

const Animation = () => {
	const isAnimated = useRef(false)

	useEffect(() => {
		if (isAnimated.current) return

		gsap.from('.ss-hero-section h3 span', {
			delay: 3.5,
			duration: 1.25,
			y: '120%',
			skewY: 6,
			ease: Power2.easeInOut,
		})

		gsap.from('.ss-hero-section h1 span', {
			delay: 3.75,
			duration: 1.25,
			y: '120%',
			skewY: 6,
			ease: Power2.easeInOut,
			stagger: {
				amount: 0.5,
			},
		})

		gsap.from('.ss-about-section p', {
			delay: 4.25,
			duration: 1.25,
			y: '150%',
			skewY: 6,
			ease: Power2.easeInOut,
		})

		gsap.from('.ss-projects-section > *', {
			delay: 5,
			duration: 1.25,
			opacity: 0,
			ease: Power2.easeInOut,
		})

		if (window.innerWidth < 768) {
			const { CSSRulePlugin } = require('gsap/CSSRulePlugin')
			gsap.registerPlugin(CSSRulePlugin)

			const imageReveal = CSSRulePlugin.getRule('.img-container::after')

			gsap.from(imageReveal, {
				delay: 3.75,
				duration: 1.25,
				width: '100%',
				ease: Power2.easeInOut,
			})
		}

		isAnimated.current = true
	})

	return null
}

export default Animation
