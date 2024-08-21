import React from 'react'
import PropType from 'prop-types'

export default function LinkButton({ text, icon, alt, link }) {
	return (
		<a href={link} className='right-0 font-bold text-white bg-blue-800 rounded-full py-2 px-4 hover:bg-blue-500 transition-colors duration-300' target='_blank' rel='noreferrer noopener'>
			{icon ? <img src={icon} alt={alt} /> : <></>}
			{text}
		</a>
	)
}

LinkButton.propTypes = {
	text: PropType.string.isRequired,
	icon: PropType.string,
	alt: PropType.string,
	link: PropType.string.isRequired,
}