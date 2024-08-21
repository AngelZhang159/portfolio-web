import HeaderTitle from './header/HeaderTitle'
import React, { useState } from "react";
import HeaderSections from './header/HeaderSections'
import Languages from './header/Languages'
import { domain } from '../data/domain'
import PropTypes from 'prop-types';
import HamburgerMenu from './main/HamburgerMenu';
import SectionMobile from './main/SectionMobile';

export default function Header({ changeLanguage, language }) {

	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className='px-4 lg:px-20 shadow-xl py-4 lg:py-12 w-full'>
			<div className='flex justify-center lg:justify-between items-center'>
				<HeaderTitle domain={domain} className="contents" />

				<div className='hidden lg:flex'>

					<HeaderSections />
				</div>

				<Languages changeLanguage={changeLanguage} language={language} />

				<HamburgerMenu onClick={toggleIsOpen} />

			</div>

			{isOpen ?
				<SectionMobile onClick={toggleIsOpen} />
				:
				<></>
			}

		</header>
	)
}

Header.propTypes = {
	changeLanguage: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
};