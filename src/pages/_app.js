import '../styles/global.css'

import Whatsapp from '../components/Whatsapp'

import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const routerName = useRouter().pathname
  const ObjColorStyle = {
    '': "#FFE600",
    '/': "#FFE600",
    '/Principal': "#FFE600",
    '/About': "#4FDDAA",
    '/Portfolio': "#F8354C",
    '/Contact': "#29B6D1",
}

  try {
    const html = document.querySelector('html')
    html.style.backgroundColor = `${ObjColorStyle[routerName]}`
  }
  catch (error) {
      console.log(error)
    }
  

  return <div>
            <Component {...pageProps} />    
            <Whatsapp />
          </div>
}

export default MyApp

