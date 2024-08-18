import { t } from "i18next";
import Badge from "./main/Badge";
import Experience from "./main/sections/Experience";
import MainTitle from "./main/sections/MainTitle";
import SectionFrame from "./main/SectionFrame";
import SectionTitle from "./main/SectionTitle";
import { Trans } from "react-i18next";
import About from "./main/sections/About";

export default function Main() {
	return (
		<main className="block justify-center items-center text-white mx-auto w-2/3">
			<MainTitle />

			<About />

			<Experience />

			<section id="Projects">

			</section>
		</main>
	)
}
