const resumeLink = '/Si_Sheng_Resume.pdf'

const menuLinks: Record<string, string> = {
	About: '#about',
	Projects: '#projects',
	Contact: '#contact',
}

const contactLinks: Record<string, { text: string; link: string }> = {
	email: {
		text: 'hello@sisheng.my',
		link: 'mailto:hello@sisheng.my',
	},
	phone: {
		text: '+6010-776 1595',
		link: 'tel:60107761595',
	},
}

const socialLinks: Record<string, string> = {
	LinkedIn: 'https://www.linkedin.com/in/sisheng1998',
	Behance: 'https://www.behance.net/sisheng1998',
	GitHub: 'https://github.com/sisheng1998',
}

export { resumeLink, menuLinks, contactLinks, socialLinks }
