import React from "react";
import LangButton from "./LangButton";
import { languages } from "../../data/languages"

export default function Languages({ changeLanguage, language }) {

	return (
		<div className='font-light gap-4 flex'>
			<LangButton languageCode={languages[0].code} currentLanguage={language} text={languages[0].name} changeLanguage={changeLanguage} />
			<span>/</span>
			<LangButton languageCode={languages[1].code} currentLanguage={language} text={languages[1].name} changeLanguage={changeLanguage} />
		</div>
	)
}