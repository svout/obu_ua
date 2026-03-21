import type { Metadata } from 'next'
import './globals.css'
import { AppBoot } from '@/components/layout/AppBoot'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { fontSans } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Oxford Brookes Ukrainian Society | OBU UA',
  description:
    'Join Oxford Brookes vibrant Ukrainian community. Connect, collaborate, and celebrate our culture together.',
  keywords: ['Oxford Brookes', 'Ukrainian Society', 'Student Community', 'OBU', 'Ukraine'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body className={`${fontSans.className} min-h-screen bg-surface-muted`} suppressHydrationWarning>
        <AppBoot>
          <div id="site-shell" className="flex min-h-screen flex-col bg-surface-muted">
            <div className="grain-overlay" aria-hidden />
            <Navbar />
            <main className="relative z-10 flex-1">{children}</main>
            <Footer />
          </div>
        </AppBoot>
      </body>
    </html>
  )
}
