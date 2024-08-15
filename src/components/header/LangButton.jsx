export default function LangButton({ languageCode, currentLanguage, text, changeLanguage }) {
	return (
		<button
			className={`${currentLanguage === languageCode ? 'font-bold text-primary' : 'font-normal'}`}
			key={languageCode}
			onClick={() => changeLanguage(languageCode)}
		>
			{text}
		</button>
	)
}