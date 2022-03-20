import Head from 'next/head'
import Brake from '../Components/Brake'
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
        <Brake />
        <Ogres />
      </div>
    </div>
  )
}
