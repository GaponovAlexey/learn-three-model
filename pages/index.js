import Head from 'next/head'
import Main from '../Components/Main'
import Ogres from '../Components/Ogre'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Three</title>
        <link rel='icon' href='#!' />
      </Head>
      <div>hi</div>
      <div style={{ width: '20%' }}>
        <Main />
        <Ogres />
      </div>
    </div>
  )
}
