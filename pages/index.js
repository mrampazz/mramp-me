import Head from 'next/head'
import Menu from '../components/Menu'
import { Content } from '../components/Content'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"></link>
      </Head>

      <header>
        <Menu />
      </header>

      <main>
      <Content />
      </main>
    </div>
  )
}
