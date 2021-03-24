import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {TRANSLATIONS_JP} from "./jp/translations";
import {TRANSLATIONS_DE} from "./de/translations";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            jp: {
                translation: TRANSLATIONS_JP
            },
            de: {
                translation: TRANSLATIONS_DE
            }
        }
    });

i18n.changeLanguage("de");