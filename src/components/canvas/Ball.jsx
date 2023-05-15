import React, {Suspense, useRef, Fragment, useState,useEffect} from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import {Flex, Box} from '@react-three/flex'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal]=useTexture([props.imgUrl])
  const position = props.position
  const isMobile=props.isMobile
  const size = props.size

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={0.5}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,-1]}/>
      <mesh
        position={position}
        castShadow
        receiveShadow
        scale={isMobile?5/size:6.3/size}
      >
        <sphereGeometry />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          map={decal}
          position={[0,0,1]}
          rotation = {[2 * Math.PI, 0, 6.25]}
          scale={1.5}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({content}) =>{

  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:820px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)
    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  return(
    <Canvas
      camera={{position:[0,0,60], fov:5}}
      dpr={[1, 2]}
      gl={{preserveDrawingBuffer:true}}
      shadows
    >
      <Suspense>
        <OrbitControls
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Flex flexDirection='row' plane="xy" flexWrap='wrap' size={[20, 50, 0]} justifyContent='center'>
          {content.map((tech,index)=>(
            <Box
              key={index}
              centerAnchor
            >
              <Ball 
                position={[-10.1, 7/content.length,0]} 
                imgUrl={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`} 
                isMobile={isMobile}
                size={content.length}
              />
            </Box> 
          ))}
        </Flex>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas