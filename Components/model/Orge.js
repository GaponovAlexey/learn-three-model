/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Ogre({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('orge.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.danse.play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            geometry={nodes.Warrok.geometry}
            material={materials.warrok_MAT}
            skeleton={nodes.Warrok.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('orge.glb')
