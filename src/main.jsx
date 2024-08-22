import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./utils/i18n"
import { ThemeProvider } from "./components/ThemeContext.jsx"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>,
)