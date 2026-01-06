import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''

  // Redirect 2024 subdomain
  if (hostname.startsWith('2024.')) {
    return NextResponse.redirect('https://dataengineeringopenforumatnetf.splashthat.com/', 301)
  }

  // Redirect 2025 subdomain
  if (hostname.startsWith('2025.')) {
    return NextResponse.redirect('https://2025dataengineeringopenforumat.splashthat.com/', 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
