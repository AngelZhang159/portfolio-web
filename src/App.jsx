import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import i18n from './utils/i18n'
import { languages } from './data/languages'

function App() {

	const [language, setLanguage] = useState(languages[0].code)

	const changeLanguage = (code) => {
		i18n.changeLanguage(code)
		setLanguage(code)
	}

	return (
		<>
			<Header changeLanguage={changeLanguage} language={language} />
			<Main />
			<Footer />
		</>
	)
}

export default App
