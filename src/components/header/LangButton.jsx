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