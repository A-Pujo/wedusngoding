import "./globals.css"
import { Roboto, Work_Sans } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { ReCaptchaProvider } from "next-recaptcha-v3"

export const metadata = {
  title: "WedusCoding",
  description: "WedusCoding, menemanimu dalam setiap data dan teknologi!",
}

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const workSans = Work_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export default function RootLayout({ children }) {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
    <html lang="en" className={`${roboto.variable} ${workSans.variable}`}>
      <body className={`antialiased`}>
        {/* Page content goes here */}
        <main>
          {children}
        </main>
      </body>
      <Analytics/>
    </html>
    </ReCaptchaProvider>
  )
}
