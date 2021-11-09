import '../styles/globals.css'
import Home from './home'
import Layout from './layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Home />
    </Layout>
  )
}

export default MyApp
