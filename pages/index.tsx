import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-Commerce App</title>
        <meta name="description" content="E-Commerce app demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container mx-auto min-h-screen py-4'>
        <h1 className='text-2xl text-green-500'>
          Welcome to E-Commerce App
        </h1>

        
      </main>
      
    </div>
  )
}

export default Home
