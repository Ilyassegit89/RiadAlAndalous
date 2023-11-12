import { useTranslation } from "react-i18next"
import FrenchPng from '../assets/French.png'
import BritishPng from '../assets/British.png'


const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const locales = {
        en : {title : 'English' , img: BritishPng},
        fr: {title : 'Francais', img: FrenchPng},
    }

  return (
        <ul className="flex justify-between gap-4 py-7">
            {Object.keys(locales).map((localKey) => {
                const locale = locales[localKey];
                return (
                    <li key={localKey} className="flex gap-2">
                        <button style={{fontWeight : i18n.resolvedLanguage === localKey ? 'bold': 'normal'}} onClick={() => i18n.changeLanguage(localKey)}>
                            {locale.title}
                        </button>
                        <img src={locale.img} className="w-[45px] h-[35px]" alt={locale.title} />
                    </li>
                )
            }

            )}
        </ul>
  )
}

export default LanguageSelector
