import React from "react"
import MadeByMe from "./footer/MadeByMe"
import WebInfo from "./footer/WebInfo"

export default function Footer() {
	return (
		<footer id="contact" className="text-white">
			<hr />
			<div className="m-auto flex w-2/3 flex-col items-center gap-12 text-balance py-10 lg:flex-row lg:justify-between">
				<MadeByMe />

				<WebInfo />
			</div>
		</footer>
	)
}
