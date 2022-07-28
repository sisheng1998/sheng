import { useRef } from 'react'
import Link from 'next/link'
import MagneticButton from './MagneticButton'

interface ButtonProps {
	text: string
	link: string
	newTab?: boolean
	className?: string
}

const Button = ({ text, link, newTab = false, className }: ButtonProps) => {
	const linkRef = useRef<HTMLAnchorElement>(null)

	return (
		<MagneticButton
			data-cursor='-hidden'
			data-cursor-stick='.ss-btn'
			className='group before:absolute before:-inset-6 before:-inset-y-10 before:block before:hover:-inset-12 before:hover:-inset-y-16'
			onClick={() => linkRef.current?.click()}
		>
			<Link href={link}>
				<a
					ref={linkRef}
					className={`ss-btn ${className ? className : ''}`}
					target={newTab ? '_blank' : ''}
					rel={newTab ? 'noreferrer noopener' : ''}
				>
					<span className='ss-btn-title'>
						<span data-text={text}>{text}</span>
					</span>

					<div className='ss-btn-ripple'></div>
				</a>
			</Link>
		</MagneticButton>
	)
}

export default Button
