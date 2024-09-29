import { useTranslation } from "react-i18next";

import "../../styles/components/Magic-Ball/Lang-Selector.scss";

const languages = [
  { code: "en", lang: "En" },
  { code: "ua", lang: "Ua" },
  { code: "deu", lang: "Deu" },
];

const LangSelector = () => {
  const { i18n } = useTranslation("global");
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="lang-selector">
      {languages.map((lng) => {
        return (
          <button
            className={
              lng.code === i18n.language
                ? "lang-selector__btn selected"
                : "lang-selector__btn"
            }
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LangSelector;
