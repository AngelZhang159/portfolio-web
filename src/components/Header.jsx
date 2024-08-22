import HeaderTitle from "./header/HeaderTitle"
import React, { useState } from "react"
import HeaderSections from "./header/HeaderSections"
import Languages from "./header/Languages"
import { domain } from "../data/domain"
import PropTypes from "prop-types"
import HamburgerMenu from "./main/HamburgerMenu"
import SectionMobile from "./main/SectionMobile"

export default function Header({ changeLanguage, language }) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleIsOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className="w-full px-4 py-4 shadow-xl lg:px-20 lg:py-12">
			<div className="flex items-center justify-center lg:justify-between">
				<HeaderTitle domain={domain} className="contents" />

				<div className="hidden lg:flex">
					<HeaderSections />
				</div>

				<Languages changeLanguage={changeLanguage} language={language} />

				<HamburgerMenu onClick={toggleIsOpen} />
			</div>

			{isOpen ? <SectionMobile onClick={toggleIsOpen} /> : <></>}
		</header>
	)
}

Header.propTypes = {
	changeLanguage: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
}
