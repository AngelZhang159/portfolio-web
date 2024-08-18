import React from "react";
import MadeByMe from "./footer/MadeByMe";
import WebInfo from "./footer/WebInfo";

export default function Footer() {
	return (
		<footer id="contact" className='text-white'>
			<hr />
			<div className="flex justify-between items-center m-auto py-10 w-2/3">
				<MadeByMe />

				<WebInfo />
			</div>
		</footer>
	)
}