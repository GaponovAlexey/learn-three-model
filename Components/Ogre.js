import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react/cjs/react.production.min'
import Ogre from './model/Orge.js'

const Ogres = () => {
  return (
    <div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight color='white' intensity={1} position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Ogre />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Ogres
