import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Room as Room } from './Room'
import HeroLights from './HeroLights';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ maxWidth: 1024 }); 
    const isMobile = useMediaQuery({ maxWidth: 768 }); 
    return (
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        
        {/* Let there be light⛪️ */}
        <HeroLights />

        {/* Adding Orbit control to move around the model */}
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet} // Disable zoom on tablet devices
          maxDistance={20} //to zoom out
          minDistance={5} //to zoom in
          minPolarAngle={Math.PI / 5} // Limit vertical rotation to prevent flipping
          maxPolarAngle={Math.PI / 2} // Limit vertical rotation to prevent flipping
        />
        {/* Add the 3D model to the scene within the group for more convinient styling */}
        <group
          scale={isMobile?0.7 :1}
          position={[0, -3.5, 0]}
          rotation={[0,-Math.PI/4,0]}>
          <Room />
        </group>
      </Canvas>
    );
}

export default HeroExperience