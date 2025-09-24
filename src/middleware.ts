
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './i18n/config'


/**function getLocale(request: NextRequest): string {
 * 
 *  import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 * 
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const localeList = [...locales]
  
  return matchLocale(languages, localeList, defaultLocale)
}*/

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    // Reescribe al locale por defecto sin cambiar la URL pública
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|download).*)',
  ],
} 