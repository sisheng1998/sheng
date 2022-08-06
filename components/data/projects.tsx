import skills, { skillsData } from './skills'

export interface projectData {
	title: string
	description: string
	requestDemoEmailData?: string
	src: string
	alt: string
	url: string
	links: {
		Behance?: string
		GitHub?: string
		[key: string]: any
	}
	skills: skillsData[]
}

const projects: projectData[] = [
	{
		title: 'Personal Website',
		description:
			'Designed & developed a personal website from scratch to promote myself and showcase my projects while learning new frameworks / languages at the same time.',
		src: '/images/personal-website.jpg',
		alt: 'Personal Website',
		url: '/',
		links: {
			GitHub: 'https://github.com/sisheng1998/sheng',
		},
		skills: [skills[12], skills[13], skills[5], skills[14]],
	},
	{
		title: 'SCIMS',
		description:
			'A web-based inventory management system with mobile app supports that helps users to manage the chemical easily.',
		requestDemoEmailData:
			'?subject=Request%20Demo%20Account%20for%20SCIMS&body=Hi%20Si%20Sheng%2C%0A%0AI%20would%20like%20to%20request%20a%20demo%20account%20for%20SCIMS.%0A%0AThanks.',
		src: '/images/scims.jpg',
		alt: 'SCIMS',
		url: 'https://scims.sisheng.asia',
		links: {
			Behance:
				'https://www.behance.net/gallery/148756031/Smart-Chemical-Inventory-Management-System',
			GitHub: 'https://github.com/sisheng1998/SCIMS',
		},
		skills: [skills[0], skills[1], skills[2], skills[3], skills[4], skills[5]],
	},
	{
		title: 'Creatinno Tech Solutions',
		description:
			'Re-designed, developed, and maintaining the brand new corporate website for Creatinno Tech Solutions.',
		src: '/images/creatinno-tech.jpg',
		alt: 'Creatinno Tech Solutions',
		url: 'https://www.creatinnotech.com',
		links: {
			Behance:
				'https://www.behance.net/gallery/131715663/Website-Redesign-Creatinno-Tech-Solutions',
		},
		skills: [skills[6], skills[7], skills[8], skills[9], skills[11]],
	},
	{
		title: 'We Lit',
		description:
			'A landing page that designed and developed in Website Design Competition with the theme of "Empowering Young Digital Talent".',
		src: '/images/we-lit.jpg',
		alt: 'We Lit',
		url: 'https://welit.sisheng.my',
		links: {
			Behance:
				'https://www.behance.net/gallery/136263721/PYDC-Website-Design-Competition-2021',
		},
		skills: [
			skills[6],
			skills[7],
			skills[8],
			skills[9],
			skills[10],
			skills[11],
		],
	},
	{
		title: 'Cahaya XR',
		description:
			"Website developed for the virtual exhibition of Cahaya XR, showcasing Penang's traditional stories with immersive technologies.",
		src: '/images/cahaya-xr.jpg',
		alt: 'Cahaya XR',
		url: 'https://cahayaxr.com',
		links: {},
		skills: [skills[7], skills[8], skills[9]],
	},
	{
		title: 'SSF Home',
		description:
			'Fully customized e-commerce website with well-designed interface, providing customer a seamless online shopping experience.',
		src: '/images/ssf-home.jpg',
		alt: 'SSF Home',
		url: 'https://ssfhome.com',
		links: {},
		skills: [
			skills[6],
			skills[7],
			skills[8],
			skills[9],
			skills[10],
			skills[11],
		],
	},
]

export default projects
