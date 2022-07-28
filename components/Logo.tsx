import Link from 'next/link'

interface LogoProps {
	className?: string
}

const Logo = ({ className }: LogoProps) => {
	return (
		<Link href='/'>
			<a
				data-cursor='-hidden'
				className={`text-3xl font-medium tracking-tighter transition-opacity duration-700 ${
					className ? className : ''
				}`}
			>
				Sheng
			</a>
		</Link>
	)
}

export default Logo
