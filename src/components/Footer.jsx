import { Trans } from "react-i18next";
import IconButtonLink from "./footer/IconButtonLink";
import MadeByMe from "./footer/MadeByMe";

export default function Footer() {
	return (
		<footer id="contact" className='bottom-0 fixed w-full text-white'>
			<hr />
			<div className="flex justify-around items-center p-10">

				<MadeByMe />

				<p>
					<Trans i18nKey="built-with">
						Built with <b>React</b> and <b>TailwindCSS</b> using <b>Visual Studio Code</b>, <br /> deployed via <b>GitHub Pages</b>, and served by <b>Cloudflare</b>.
					</Trans>
				</p>
			</div>
		</footer>
	)
}
