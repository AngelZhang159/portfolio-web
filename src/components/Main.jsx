import React from "react";
import Experience from "./main/sections/Experience";
import MainTitle from "./main/sections/MainTitle";
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
