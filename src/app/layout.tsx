import { Metadata } from 'next';
import '@/assets/styles/index.scss';
import Layout from '@/component/hoc/Layout';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import NextTopLoader from 'nextjs-toploader';
import "./globals.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Light Source",
  description: "It's a simple progressive web application made with NextJS",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/icon-192x192.png" },
  ],
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
export default RootLayout;
