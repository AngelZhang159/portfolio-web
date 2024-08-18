import HeaderTitle from './header/HeaderTitle'
import React from "react";
import HeaderSections from './header/HeaderSections'
import Languages from './header/Languages'
import { domain } from '../data/domain'

export default function Header({ changeLanguage, language }) {
	return (
		<header className='px-20 shadow-xl py-12 w-full'>
			<div className='flex justify-between items-center'>
				<HeaderTitle domain={domain} />

				<HeaderSections />

				<Languages changeLanguage={changeLanguage} language={language} />
			</div>
		</header>
	)
}
