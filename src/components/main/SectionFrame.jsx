import React from "react";
export default function SectionFrame({ children, id }) {
	return (
		<section id={id} className="block justify-center w-full py-20">
			{children}
		</section>
	)
}