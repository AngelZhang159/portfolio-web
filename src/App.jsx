import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import i18n from './utils/i18n'
import { languages } from './data/languages'
import { useTheme } from './components/ThemeContext'
import React from "react";


function App() {

	const [language, setLanguage] = useState(languages[0].code)

	const changeLanguage = (code) => {
		i18n.changeLanguage(code)
		setLanguage(code)
	}

	const { isDarkMode, toggleTheme } = useTheme();

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);

	return (
		<>
			{/* FIX THEME CHANGE COLORS
			<button onClick={toggleTheme} className='text-white dark:text-black'>
				Toggle Dark Mode
			</button>*/}
			<Header changeLanguage={changeLanguage} language={language} />
			<Main />
			<Footer />
		</>
	)
}

export default App
