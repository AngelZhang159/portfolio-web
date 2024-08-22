import React from "react"
import LangButton from "./LangButton"
import { languages } from "../../data/languages"
import PropTypes from "prop-types"

export default function Languages({ changeLanguage, language }) {
	return (
		<div className="hidden gap-4 font-light lg:flex">
			<LangButton
				languageCode={languages[0].code}
				currentLanguage={language}
				text={languages[0].name}
				changeLanguage={changeLanguage}
			/>
			<span>/</span>
			<LangButton
				languageCode={languages[1].code}
				currentLanguage={language}
				text={languages[1].name}
				changeLanguage={changeLanguage}
			/>
		</div>
	)
}

Languages.propTypes = {
	changeLanguage: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
}
