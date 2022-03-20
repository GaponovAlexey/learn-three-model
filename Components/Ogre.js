import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react/cjs/react.production.min'
import Ogre from './model/Orge.js'

const Ogres = () => {
  return (
    <div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1} />
        {/* <pointLight color='white' intensity={1}  /> */}
        <Suspense fallback={null}>
          <Ogre position={[0, -1.2, 3]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Ogres
