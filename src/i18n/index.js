import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

const i18n = createI18n({
    legacy: false,
    locale: navigator.language.slice(0, 2),
    fallbackLocale: 'en',
    messages: {
        en,
        zh
    }
})

export default i18n
