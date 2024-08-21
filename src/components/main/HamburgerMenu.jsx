import React from 'react'
import PropTypes from 'prop-types'

export default function HamburgerMenu({ onClick }) {
	return (
		<nav className="border-gray-200  dark:border-gray-700 ml-auto lg:hidden">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

				<button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false"
					onClick={onClick}>
					<span className="sr-only">Open menu</span>
					<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
					</svg>
				</button>

			</div>
		</nav>
	)
}

HamburgerMenu.propTypes = {
	onClick: PropTypes.func.isRequired,
}