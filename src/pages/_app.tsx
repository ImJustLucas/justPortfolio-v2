import type { AppProps } from 'next/app'

import '@styles/global.css'

import { Layout } from '@layouts/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
