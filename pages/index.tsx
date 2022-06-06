import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>steven arellano</title>
        <meta name="description" content="My personal portfolio website for you, the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-screen'>
        <Layout />
      </main>
    </div>
  )
}

export default Home
