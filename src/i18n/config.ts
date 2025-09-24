export const defaultLocale = 'es-ES'
export const locales = ['zh-CN', 'en-US', 'es-ES'] as const
export type Locale = typeof locales[number]

export const localeNames: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'en-US': 'English',
  'es-ES': 'Español'
} 