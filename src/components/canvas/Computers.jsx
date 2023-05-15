import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"

import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={[50, 50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile?0.35:0.7}
        position={[0, -0.6, 0]}
        rotation ={[0, 1.1, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false)


  //Check if mobile
  useEffect(()=>{
    //Adds event listener for changes to the screen size
    const mediaQuery=window.matchMedia('(max-width:820px)')

    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to mediaQuery
    const handleMediaQueryChange= (event)=>{
      setIsMobile(event.matches)
    }
    //Add the callback funtion as a listener for changes to mediaQuery
    mediaQuery.addEventListener('change',handleMediaQueryChange)
    
    // Remove the listener when the component is unmounted
    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  return(
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1,1]}
      camera={{position:[9,-5,1], fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;