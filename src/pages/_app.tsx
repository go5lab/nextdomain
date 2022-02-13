import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.scss'
import Footer from "../components/Footer"

const _App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Layout>
        <Component {...pageProps} />
      <Footer />
    </Layout>
    </>
  )
}
export default _App