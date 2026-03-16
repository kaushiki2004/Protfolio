import React from 'react'
import { words } from '../constants'
import Button from '../components/button'
import HeroExperience from '../components/HeroModels/HeroExperience';
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';
import ShowcaseSection from './ShowcaseSection';
import LogoSection from './LogoSection';
import FeatureCards from './FeatureCards';
import Experience from './Experience';
import Blog from './Blog';
import Contact from './Contact';


const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y:50,
                opacity:0,
            },
            {
                y:0,
                opacity:1,
                stagger:0.2,
                duration:1,
                ease:'power2.out',
            }
        )
    })

  return (
    <>
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
          <img src="/images/bg.png" alt="background" />
        </div>
        <div className="hero-layout">
          {/* LEFT: HERO CONTENT */}
          <header className="flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Building
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word) => (
                        <span
                          key={word.text}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>with AI</h1>
                <h1>for the Future.</h1>
              </div>
              <p className="text-white-50 md:text-xl realtive z-10 pointer-events-none">
                Hi, I'm Kaushiki, an AI engineer passionate about creating
                scalable AI solutions.
              </p>
              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="See my Work"
              />
            </div>
          </header>

          {/* RIGHT: 3D MODEL */}
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
        </div>
      </section>
      <section id="about" className="scroll-mt-24">
        <AnimatedCounter />
      </section>
      <section>
        <FeatureCards />
      </section>
      <section id="portfolio">
        <ShowcaseSection />
      </section>
      <section id="logoSection">
        <LogoSection />
      </section>
      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>
      <section id="blog" className="scroll-mt-24">
        <Blog />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact/>
      </section>
    </>
  );
}

export default Hero