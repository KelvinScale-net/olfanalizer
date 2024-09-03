'use client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonEn from './lang/common.en'
import commonZh from './lang/common.zh'
import appEn from './lang/app.en'
import appZh from './lang/app.zh'
import toolsEn from './lang/tools.en'
import toolsZh from './lang/tools.zh'
import appEs from './lang/app.es'
import commonEs from './lang/common.es'
import toolsEs from './lang/tools.es'
import type { Locale } from '.'

const resources = {
  'en': {
    translation: {
      common: commonEn,
      app: appEn,
      // tools
      tools: toolsEn,
    },
  },
  'zh-Hans': {
    translation: {
      common: commonZh,
      app: appZh,
      // tools
      tools: toolsZh,
    },
  },
  'es': {
    translation: {
      common: commonEs,
      app: appEs,
      tools: toolsEs,
    },
  },
}

i18n.use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'es',
    fallbackLng: 'en',
    // debug: true,
    resources,
  })

export const changeLanguage = (lan: Locale) => {
  i18n.changeLanguage(lan)
}
export default i18n
