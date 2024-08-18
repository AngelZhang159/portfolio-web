import React from "react";
export default function Badge({ text, icon, color }) {
	return (
		<div className={"inline-flex px-4 py-2 items-center rounded-full border-2"} style={{ borderColor: color }}>
			{icon ? <img src={icon} className="size-9 pr-4">
			</img> : <></>}
			<p className="font-bold">
				{text}
			</p>
		</div>
	)
}