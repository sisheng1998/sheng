import { useRef } from 'react'
import Link from 'next/link'
import MagneticButton from './MagneticButton'

interface ButtonProps {
	text: string
	href: string
	newTab?: boolean
	className?: string
}

const Button = ({ text, href, newTab = false, className }: ButtonProps) => {
	const linkRef = useRef<HTMLAnchorElement>(null)
	const currentButton = text.replace(/\s+/g, '-').toLowerCase() + '-btn'

	return (
		<MagneticButton
			data-cursor='-hidden'
			data-cursor-stick={`.${currentButton}`}
			className='group relative before:absolute before:-inset-6 before:-inset-y-10 before:block before:hover:-inset-12 before:hover:-inset-y-16 xl:before:-inset-4 xl:before:-inset-y-8 xl:before:hover:-inset-4 xl:before:hover:-inset-y-12'
			onClick={() => linkRef.current?.click()}
		>
			<Link href={href}>
				<a
					ref={linkRef}
					className={`ss-btn ${currentButton} ${className ? className : ''}`}
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
