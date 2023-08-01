import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll, Element } from 'react-scroll';
import styles from '../styles/components/header.module.css';
import ProgressBar from "react-scroll-progress-bar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
          <div onClick={scrollToTop}>
            <img src="/images/logo.png" alt="Logo" className={styles.logo} />
          </div>
        </Link>
      </div>
      <ProgressBar bgcolor="#3399CC"/>
      <nav>
        <div className={styles.nav}>
          <ScrollLink
            to="home" // Scroll to the "home" section
            smooth={true}
            duration={500}
            className={styles.navItem}
            onClick={scrollToTop}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={1000}
            className={styles.navItem}
            offset={-155}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={900}
            className={styles.navItem}
          >
            Profile
          </ScrollLink>
          <ScrollLink
            to="music"
            smooth={true}
            duration={900}
            className={styles.navItem}
          >
            Music
          </ScrollLink>
          <ScrollLink
            to="travel"
            smooth={true}
            duration={900}
            className={styles.navItem}
            offset={-155}
          >
            Travel
          </ScrollLink>
          {/* <ScrollLink
            to=""
            smooth={true}
            duration={900}
            className={styles.navItem}
            offset={-155}
          >
            Projects
          </ScrollLink> */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={styles.navItem}
            offset={-155}
          >
            Contact Me
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
