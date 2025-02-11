/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [
		'bg-[#EFE7FA]',
		'text-[#5A0FC8]',
		'bg-[#EFFBFF]',
		'text-[#61DAFB]',
		'bg-[#EBEBEB]',
		'text-[#353535]',
		'bg-[#EBF5EB]',
		'text-[#339933]',
		'bg-[#EDF7EC]',
		'text-[#4DB33D]',
		'bg-[#EBF8FE]',
		'text-[#38BDF8]',
		'bg-[#E9F1F5]',
		'text-[#21759B]',
		'bg-[#FCEDE9]',
		'text-[#E34C26]',
		'bg-[#E9EDFC]',
		'text-[#264DE4]',
		'bg-[#FEFCE9]',
		'text-[#F7DF1E]',
		'bg-[#E6F0F7]',
		'text-[#0769AD]',
		'bg-[#EDEDF3]',
		'text-[#474A8A]',
		'bg-[#E6E6E6]',
		'bg-[#EAF2F9]',
		'text-[#3178C6]',
		'bg-[#EDF5E8]',
		'text-[#4E9815]',
	],
	theme: {
		screens: {
			'2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }

			tall: { raw: '(min-height: 769px)' },
			// => @media (min-height: 769px) { ... }
		},
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
