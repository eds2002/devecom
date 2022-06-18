import App from 'next/app'
import '../styles/globals.css'
import {Layout} from '../components'
import { UpdateCartProvider } from '../stores/cartUpdateContext'

function MyApp({ Component, pageProps }) {
  return (
    <UpdateCartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UpdateCartProvider>
  )
}


export default MyApp
