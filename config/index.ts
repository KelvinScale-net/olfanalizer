import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Kelvin AI',
  description: 'Toda la inteligencia que te falta, la tengo yo',
  copyright: 'KelvinScale',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

// config.ts
export const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://dify-dify.khno1f.easypanel.host'
  : 'http://localhost:3000';