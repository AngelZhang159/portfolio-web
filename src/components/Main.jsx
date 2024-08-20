import React from "react";
import Experience from "./main/sections/Experience";
import MainTitle from "./main/sections/MainTitle";
import About from "./main/sections/About";
import Projects from "./main/sections/Projects";

export default function Main() {
	return (
		<main className="block justify-center items-center text-white mx-auto w-2/3">
			<MainTitle />

			<About />

			<Experience />

			<Projects />

		</main>
	)
}
