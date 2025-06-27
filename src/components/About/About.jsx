import React from 'react';
import './About.css'
import { RobotOutlined } from '@ant-design/icons';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import { Button } from "antd";
import { ParticlesComponent } from './components/ParticlesComponent';
import AboutText from './components/AboutText';
import { Link } from 'react-router-dom';

const Hero = () => {
const FloatingCircle = ({ className, style }) => {
  const controls = useAnimation();

  useEffect(() => {
    const float = () => {
      const x = Math.floor(Math.random() * 40 - 20); // -20 to +20
      const y = Math.floor(Math.random() * 40 - 20);

      controls.start({
        x,
        y,
        transition: {
          duration: 3 + Math.random() * 2, // 3s - 5s
          ease: "easeInOut",
          onComplete: float, // repeat randomly
        },
      });
    };

    float();
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className={`absolute rounded-full ${className}`}
      style={style}
    />
  );
};



  return (
<div>
        <div className='relative py-32 bg-[#0A1022] overflow-hidden'>

      {/* Limit Particles to this section only */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      <div className='flex flex-col z-20 relative justify-center items-center gap-4'>
        <RobotOutlined />
        <h3 className='text-[#3980F5] text-4xl font-bold'>Clin Technology</h3>
        <p className='text-xl text-center w-[80vw] text-slate-300'>
          Revolutionizing clinical documentation through HIPAA COMPLIANT advanced artificial intelligence, giving healthcare providers more time for what truly matters — patient care. Try it for FREE today.
        </p>
        <p className='text-white w-[50vw] text-center '>
          Our sophisticated AI platform intelligently processes clinical conversations, creating accurate documentation that integrates with your existing EMR system.
        </p>
        <div className='flex gap-3'>
          <Link to='/signup'><Button type='dashed' size='large'>Signup</Button></Link>
          <Link to='/login'><Button size='large' type='primary'>Login</Button></Link>
        </div>
      </div>

   {/* Circles */}
<div className='absolute bg-[#192B4B] z-10 w-60 h-60 rounded-full top-0 -left-16 animate-float-x'></div>
<div className='absolute bg-[#192B4B] z-10 w-44 h-44 rounded-full bottom-0 right-0 animate-float-y delay-[1s]'></div>
<div className='absolute bg-[#192B4B] z-10 w-36 h-36 rounded-full top-40 right-36 animate-float-xy delay-[2s]'></div>

    </div>
    <AboutText />
</div>
  );
};

export default Hero;
