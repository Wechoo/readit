import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from '../components'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Read.it</title>
        <link
          rel="preload"
          href="/fonts/FiraSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main>Hello Read.it</main>
      <Link href="/generator">
        <a>Generator</a>
      </Link>
      <div style={{ width: '100px' }}>
        <Button.Flat label="Hello" />
      </div>
    </div>
  )
}

export default Home
