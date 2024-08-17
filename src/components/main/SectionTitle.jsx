export default function SectionTitle({ children, toColor, fromColor }) {
	return (
		<p className={`text-7xl font-bold pb-16 ${toColor} ${fromColor} text-transparent bg-clip-text bg-gradient-to-br`}>
			{"< "}{children}{" />"}
		</p>
	)
}