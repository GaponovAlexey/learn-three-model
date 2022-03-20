import { Canvas } from "@react-three/fiber"
import { Suspense } from "react/cjs/react.production.min"
import Model from './model/Danse.js'

const Main = () => {
  return (
    <div>
      
      <Canvas >
        <ambientLight intensity={0.5} />
        <pointLight color='white' intensity={1} position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Main
