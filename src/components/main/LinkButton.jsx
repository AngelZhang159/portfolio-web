import React from "react"
import PropType from "prop-types"

export default function LinkButton({ text, icon, alt, link }) {
	return (
		<a
			href={link}
			className="right-0 flex items-center justify-center gap-4 rounded-full bg-blue-800 px-4 py-2 font-bold text-white transition-colors duration-300 hover:bg-blue-500"
			target="_blank"
			rel="noreferrer noopener"
		>
			{icon ? <img src={icon} alt={alt} className="size-10" /> : <></>}
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
