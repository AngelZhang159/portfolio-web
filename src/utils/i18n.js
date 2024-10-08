import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enLang from "./locales/en.json"
import esLang from "./locales/es.json"

i18n.use(initReactI18next).init({
	debug: true,
	fallbackLng: "es",
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: enLang,
		},
		es: {
			translation: esLang,
		},
	},
})

export default i18n
