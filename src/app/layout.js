import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Water Detection Map | Next.js Google Maps App',
  description: 'Interactive map application to detect water and land using Google Maps and advanced algorithms. Perfect for geography enthusiasts and environmental researchers.',
  keywords: 'water detection, Google Maps, Next.js, geography, environmental research, interactive map',
  openGraph: {
    title: 'Water Detection Map',
    description: 'Detect water and land using our interactive Google Maps application.',
    url: 'https://google-map-detect-water.vercel.app',
    siteName: 'Water Detection Map',
    images: [
      {
        url: 'https://google-map-detect-water.vercel.app/banner.png',
        width: 1200,
        height: 630,
        alt: 'Water Detection Map Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Detection Map',
    description: 'Detect water and land using our interactive Google Maps application.',
    images: ['https://google-map-detect-water.vercel.app/banner.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
