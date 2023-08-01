import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Music from '../components/Music';
import Travel from '../components/Travel'; 
import Contact from '../components/Contact';

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

  return (
    <div className={styles.container}>
      <Head>
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
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className={styles.icon}
            style={{ color: '#3399cc' }}
          />
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
