import '../globals.scss'
import NextUiProvider from '@/context/providers/nextUi.provider'
import localFont from 'next/font/local'
import dynamic from 'next/dynamic'
import { type Locale, i18n } from '@/i18n.config'
import { type Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const SWRProvider = dynamic(
  async () => await import('@/context/providers/swr.provider'),
  {
    ssr: false
  }
)

export const viewport: Viewport = {
  themeColor: '#0F03C1'
}

export const metadata = {
  title: 'Thomas Barenghi'
}

const firsNeue = localFont({
  src: [
    {
      path: '../../assets/fonts/TTFirsNeue-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/TTFirsNeue-ExtraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/TTFirsNeue-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/TTFirsNeue-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/TTFirsNeue-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/TTFirsNeue-DemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/TTFirsNeue-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/TTFirsNeue-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/TTFirsNeue-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
})

export const generateStaticParams = async () =>
  i18n.locales.map((locale) => ({ lang: locale }))

const RootLayout = ({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) => (
  <html lang={params.lang}>
    <body className={firsNeue.className}>
      <SWRProvider>
        <NextUiProvider>{children}</NextUiProvider>
      </SWRProvider>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
)

export default RootLayout
