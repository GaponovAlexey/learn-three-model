import Head from 'next/head'
import Main from '../Components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Three</title>
        <link rel='icon' href='#!' />
      </Head>
      <div>hi</div>
      <div style={{width: '10%'}} >
        <Main />
      </div>
    </div>
  )
}
