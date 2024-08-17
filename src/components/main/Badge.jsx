export default function Badge({ text, icon, color }) {
	return (
		<div className={`inline-flex px-4 py-2 items-center border rounded-full ${color}`}>
			<img src={icon} className="size-6">
			</img>
			<p className="pl-4 font-bold">
				{text}
			</p>
		</div>
	)
}