import PropTypes from "prop-types"
import React from "react"

export default function SectionButton({ text, section, onClick }) {
	const scrollSmooth = (e) => {
		e.preventDefault()
		const targetSection = document.getElementById(section)
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth" })
		}
	}

	const handleClick = (e) => {
		if (onClick) {
			scrollSmooth(e)
			onClick()
		} else {
			scrollSmooth(e)
		}
	}

	return (
		<li
			href={`/${section}`}
			className="transition-transform hover:scale-110 hover:text-white"
			onClick={handleClick}
		>
			{text}
		</li>
	)
}

SectionButton.propTypes = {
	text: PropTypes.string.isRequired,
	section: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}
