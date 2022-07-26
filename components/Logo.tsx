import Link from 'next/link'

const Logo = ({ classes }: { classes: string }) => {
	return (
		<Link href='/'>
			<a
				className={`text-3xl font-medium tracking-tighter${
					classes ? classes : ''
				}`}
			>
				Sheng
			</a>
		</Link>
	)
}

export default Logo
