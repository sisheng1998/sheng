import Link from 'next/link'

const Logo = ({ className }: { className: string }) => {
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
