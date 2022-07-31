import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface MagneticButtonProps {
	children: React.ReactNode
	className?: string
	isMenu?: boolean
	onClick?: React.MouseEventHandler<EventTarget>
}

const MagneticButton = ({
	children,
	className = '',
	onClick = () => {},
	isMenu = false,
	...props
}: MagneticButtonProps) => {
	const buttonRef = useRef<any>(null)

	const interpolationFactorX = isMenu ? 0.08 : 0.24
	const interpolationFactorY = isMenu ? 0.08 : 0.24

	const magneticEffect = (btn: HTMLInputElement, e: MouseEvent) => {
		const position = btn.getBoundingClientRect()

		const x = e.pageX - (position.left + position.width / 2)
		const y = e.pageY - (position.top + position.height / 2)

		gsap.to(btn, { x: x * interpolationFactorX, y: y * interpolationFactorY })
	}

	const removeMagneticEffect = (btn: HTMLInputElement) => {
		gsap.to(btn, { x: 0, y: 0, duration: 0.8 })
	}

	useEffect(() => {
		if (buttonRef && buttonRef.current) {
			const btn = buttonRef.current

			btn.addEventListener('mousemove', (e: MouseEvent) =>
				magneticEffect(btn, e)
			)

			btn.addEventListener('mouseleave', () => removeMagneticEffect(btn))

			return () => {
				btn.removeEventListener('mousemove', (e: MouseEvent) =>
					magneticEffect(btn, e)
				)

				btn.removeEventListener('mouseleave', () => removeMagneticEffect(btn))
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<button ref={buttonRef} className={className} onClick={onClick} {...props}>
			{children}
		</button>
	)
}

export default MagneticButton
