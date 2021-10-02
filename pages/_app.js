import Layout from '../components/Layout'
import '../styles/styles.scss'
import CustomHead from '../components/CustomHead'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
