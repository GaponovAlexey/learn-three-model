import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react/cjs/react.production.min'
import Model from './model/Anim.js'

const Brake = () => {
  return (
    <div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight color='white' intensity={1}  />
        <Suspense fallback={null}>
          <Model position={[0, -0.4, 4]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Brake
