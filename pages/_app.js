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
        <link rel="icon" href="./png/favIcon.png"/>
        <meta name="description" content="This website showcasing his projects and skills in web development and software engineering."/>
        <meta name="keywords" content="Sameer Bajaj, portfolio, web development, software engineering, projects, skills, bajaj , mr. bajaj, Sam , Mr. Bajaj,Sameer, MERN Stack Developer, Fullstack Developer, fullstack, NodeJs"/>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#000000" />
        <title>{"Sameer Bajaj (Portfolio)"}</title>
      </Head>
    <Component {...pageProps} />
    </>
  )
}
