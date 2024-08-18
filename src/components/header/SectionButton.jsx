import React from "react";
export default function SectionButton({ text, section }) {

	return (
		<a href={`#${section}`} className='hover:scale-110 transition-transform hover:text-white' >
			{text}
		</a >
	)
}