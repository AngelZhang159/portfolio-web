import Badge from "./main/Badge";
import MainTitle from "./main/MainTitle";

export default function Main() {
	return (
		<main className="block justify-center items-center text-white relative">
			<MainTitle />

			{/*<Badge text={"React"} icon={"/icons/react.svg"} color={"border-blue-300"} />*/}

			<section id="About">

			</section>

			<section id="Experience" className="flex items-center justify-center">

				<div className="w-1/2 text-xl">

					<p className="text-7xl font-bold pb-16">
						Experience
					</p>
					<p className="text-3xl"><b>Mobile developer internship</b></p>
					<br />
					<b>
						The company
					</b>
					<p>
						MundoSMS is a telecommunications operator that offers small and medium-sized businesses a customizable phone system, along with other services such as internet and sending SMS to clients.
					</p>
					<br />
					<b>
						My role
					</b>
					<p>
						During my 3-month internship at MundoSMS, I developed and launched their first mobile application for both the Apple App Store and Google Play Store. The app was built on an open-source SIP softphone, enhancing the company's service offerings.
					</p>
					<br />
					<p>
						Additionally, I deployed a Linux server running Kamailio to intercept incoming calls and notify users, complementing the functionality of the mobile applications.
					</p>

					<div className="flex flex-wrap gap-4 py-8">
						<Badge color="" icon={"/icons/vscode.svg"} text={"VS Code"} />
						<Badge color="" icon={"/icons/android-studio.svg"} text={"Android Studio"} />
						<Badge color="" icon={"/icons/xcode.svg"} text={"Xcode"} />
						<Badge color="" icon={"/icons/linux.svg"} text={"Linux"} />
						<Badge color="" icon={"/icons/kamailio.svg"} text={"Kamailio"} />
					</div>
				</div>

			</section>

			<section id="Projects">

			</section>
		</main>
	)
}
