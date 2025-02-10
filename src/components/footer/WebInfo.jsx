import React from "react"
import { Trans } from "react-i18next"

export default function WebInfo() {
	return (
		<p className="flex-1 text-center lg:ml-auto">
			<Trans i18nKey="built-with">
				Built with <b className="text-primary">React</b> and
				<b className="text-primary">TailwindCSS</b> using
				<b className="text-primary">Visual Studio Code</b>, <b /> deployed via
				<b className="text-primary">GitHub Pages</b>, and served by
				<b className="text-primary">Cloudflare</b>. <br />
				<br />
				<a className="font-bold" href="https://github.com/AngelZhang159/portfolio-web"> ➡️ Check out the code here! </a>
			</Trans>
		</p>
	)
}
