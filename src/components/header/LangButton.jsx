import PropTypes from 'prop-types';
import React from "react";

export default function LangButton({ languageCode, currentLanguage, text, changeLanguage }) {
	return (
		<button
			className={`${currentLanguage === languageCode ? 'font-extrabold text-primary' : 'font-extralight'}`}
			key={languageCode}
			onClick={() => changeLanguage(languageCode)}
		>
			{text}
		</button>
	)
}

LangButton.propTypes = {
	languageCode: PropTypes.string.isRequired,
	currentLanguage: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	changeLanguage: PropTypes.func.isRequired
}