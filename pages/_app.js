import '../styles/globals.css'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'


export default function App({ Component, pageProps }) {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        if(!router?.isReady) return
        setIsLoading(false)
    },[router?.isReady])


  if(isLoading) return null ;
  
  return (
    <>
      <Head>
        <link rel="icon" href="./svgs/logo2.svg"/>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#000000" />
        <title>{"Sameer's Portfolio"}</title>
      </Head>
    <Component {...pageProps} />
    </>
  )
}
