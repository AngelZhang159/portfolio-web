import MadeByMe from "./footer/MadeByMe";
import WebInfo from "./footer/WebInfo";

export default function Footer() {
	return (
		<footer id="contact" className=' w-full text-white'>
			<hr />
			<div className="flex justify-around items-center p-10">

				<MadeByMe />

				<WebInfo />
			</div>
		</footer>
	)
}
