import HeaderTitle from './header/HeaderTitle'
import HeaderSections from './header/HeaderSections'
import Languages from './header/Languages'
import { domain } from '../data/domain'

export default function Header({ changeLanguage, language }) {
	return (
		<header className='px-20 shadow-xl py-12 text-white w-full'>
			<nav className='flex justify-between items-center'>
				<HeaderTitle domain={domain} />

				<HeaderSections />

				<Languages changeLanguage={changeLanguage} language={language} />
			</nav>
		</header>
	)
}
