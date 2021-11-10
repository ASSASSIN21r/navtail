import '../styles/globals.css'
import Layout from './components/Layouts/layout'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/home/home'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Home />
    </Layout>
  )
}

export default MyApp
