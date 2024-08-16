import { Trans } from "react-i18next";
import IconButtonLink from "./footer/IconButtonLink";
import MadeByMe from "./footer/MadeByMe";

export default function Footer() {
	return (
		<footer id="contact" className=' w-full text-white'>
			<hr />
			<div className="flex justify-around items-center p-10">

				<MadeByMe />

				<p>
					<Trans i18nKey="built-with">
						Built with <b className="text-primary">React</b> and <b className="text-primary">TailwindCSS</b> using <b className="text-primary">Visual Studio Code</b>, <br /> deployed via <b className="text-primary">GitHub Pages</b>, and served by <b className="text-primary">Cloudflare</b>.
					</Trans>
				</p>
			</div>
		</footer>
	)
}
