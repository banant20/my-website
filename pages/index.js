import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import dynamic from 'next/dynamic';

const Music = dynamic(() => import('../components/Music'));
const Travel = dynamic(() => import('../components/Travel'));
const Contact = dynamic(() => import('../components/Contact'));
const Skills = dynamic(() => import('../components/Skills'));
const About = dynamic(() => import('../components/About'));

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const startPosition = window.pageYOffset;
      const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      const offset = -155; 
      const duration = 1000; 
      const startTime = performance.now();
  
      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const position = startPosition + (targetPosition - startPosition + offset) * easeInOutQuad(elapsedTime / duration);
  
        window.scroll(0, position);
  
        if (elapsedTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };
  
      requestAnimationFrame(animateScroll);
    }
  };
  
  return (
    <div className={styles.container}>
      <Head>
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>Anant Bajaj</title>
        <link rel="icon" href="/images/A.png" />
      </Head>
      
      <Header />
      <main>
        <div className={styles.landing} />
        <div className={`${styles.content} ${isScrolled ? styles.scrolled : ''}`}>
          <div className={styles.center}>
            <h1 className={styles.smallText}>
              Hi, it's <span className={styles.name}>Anant Bajaj!</span> I'm a
            </h1>
            <h2 className={styles.bigText}>
              <Typewriter
                options={{
                  strings: ['Programmer', 'Traveler', 'Problem Solver', ' Developer', 'Melomaniac', 'Innovator', 'Dog Lover', 'Statistician'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 120,
                }}
                onInit={(typewriter) => {
                  typewriter.changeDelay(20).changeDeleteSpeed(10).start();
                }}
              />
            </h2>
            <img src="/images/circle-button.png" alt="Scroll Down Button" className={styles.icon} onClick={scrollToAbout} />

          </div>
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="music">
          <Music />
          </section>

          <section id="travel">
            <Travel />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
      <style jsx global>{`
  html,
  body,
  #root {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }

  .${styles.container} {
    transition: background-color 0.5s ease;
    min-height: 100vh;
  }

  .${styles.content} {
    transition: background-color 0.5s ease;
    background: url('/images/big-house.png') no-repeat center center fixed;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .${styles.content}.${styles.scrolled} {
    background-color: #123456;
  }
`}</style>
    </div>
  );
}
