import type { AppProps } from 'next/app'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration:1200
    })
  })
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
