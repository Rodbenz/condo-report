import SnackBarDiaLog from '../src/snackbar'
import '../styles/globals.css'
import store from '../store'
import Footer from './components/footer'
import HeaderAppbar from './components/navbar'
import { Provider } from 'react-redux'
import LoadingScreen from './components/loadingscreen'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <HeaderAppbar/> */}
      <LoadingScreen />
      <SnackBarDiaLog />
      <Component {...pageProps} />
      {/* <Footer/> */}
    </Provider>
  )
}

export default MyApp
