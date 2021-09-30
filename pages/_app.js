import Layout from '../components/Layout'
import RouteLoading from '../components/RouteLoading'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/styles.scss'
import Head from 'next/head'
import AppContext from '../utils/AppContext'

export default function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoadingPage] = useState(false)
  const router = useRouter()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoadingPage(true))
    router.events.on('routeChangeComplete', () => setLoadingPage(false))
    router.events.on('routeChangeError', () => setLoadingPage(false))
  }, [router.events])

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>mramp</title>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='preload'
          as='style'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
          rel='preload'
          as='style'
        ></link>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <Layout>
        {loading && <RouteLoading />}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
