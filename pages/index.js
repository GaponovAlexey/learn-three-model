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
      <h1>dance</h1>
      <div className='container'>
        <Brake />
        <Ogres />
      </div>
    </div>
  )
}
