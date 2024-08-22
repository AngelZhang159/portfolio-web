import React from "react"
import PropTypes from "prop-types"

export default function HamburgerMenu({ onClick }) {
	return (
		<nav className="ml-auto border-gray-200 lg:hidden dark:border-gray-700">
			<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
				<button
					data-collapse-toggle="navbar-solid-bg"
					type="button"
					className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-solid-bg"
					aria-expanded="false"
					onClick={onClick}
				>
					<span className="sr-only">Open menu</span>
					<svg
						className="h-5 w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
			</div>
		</nav>
	)
}

HamburgerMenu.propTypes = {
	onClick: PropTypes.func.isRequired,
}
