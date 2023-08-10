import React from 'react';
import styles from '../styles/components/About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faSpotify} from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageContainer}>
        <Image src="/images/meee.png" alt="Image description" width={300} height={500}/>
      </div>
      <div>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Welcome to my digital playground! I am currently a <u>student</u> at 
          <u> The University of Michigan</u> (Go Blue!) pursuing a double major in <u>Computer Science</u> and <u>Statistics</u>.
          I am passionate about leveraging <u>software development</u> and <u>data analysis</u> to spearhead meaningful initiatives. I thrive in challenging environments
          and enjoy navigating complex issues through <u>critical thinking</u> and <u>problem solving</u>. My goal is to positively impact society 
          through <u>scalable</u> and <u>sustainable technology</u> and <u>have fun</u> along the way! <br/> <br/> Outside of work, you can catch me travelling, 
          playing with my dogs, listening to music, working out, cooking, and being a prideful diehard Detroit sports fan!
        </p>
        <div className={styles.iconContainer}>
          <Link href="https://www.linkedin.com/in/anantbajaj/" prefetch={false}>
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon}/>
          </Link>
          <Link href="https://github.com/banant20" prefetch={false}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
          </Link>
          <Link href="https://www.instagram.com/anantbajaj/" prefetch={false}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
          </Link>
          <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrzjLtLVvBHRdhbGQlbGSRZpWKfVGKTtdbrgxqWCCNSTtGCFwmJGhbMHCRfkvtBZLsBCN" prefetch={false}>
            <FontAwesomeIcon icon={faSquareEnvelope} className={styles.icon}/>
          </Link>
          <Link href="https://open.spotify.com/user/anantb13" prefetch={false}>
            <FontAwesomeIcon icon={faSpotify} className={styles.icon}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
