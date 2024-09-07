import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Olfanalyzer AI',
  description: 'Un asistente experto en perfumes y fragancias entrenado para ayudarte a crear, analizar y personalizar acordes olfativos según tus necesidades. Con amplio conocimiento que abarca desde ingredientes y acordes olfativos hasta tendencias del mercado español y europeo, y siempre cumplo con las regulaciones IFRA.',
  copyright: 'Olfanalyzer AI',
  privacy_policy: 'https://kelvinscale.net/privacidad/',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = ''

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

// config.ts
export const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://ai.kelvinscale.net'
  : 'http://localhost:3000';