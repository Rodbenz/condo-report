import SnackBarDiaLog from '../src/snackbar'
import '../styles/globals.css'
import Footer from './components/footer'
import HeaderAppbar from './components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <HeaderAppbar/> */}
      <SnackBarDiaLog />
      <Component {...pageProps} />
      {/* <Footer/> */}
    </div>
  )
}

export default MyApp
