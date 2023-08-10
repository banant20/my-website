import React, { useState, useEffect } from 'react';
import styles from '../styles/components/Skills.module.css';

const School = ({ logoSrc, years, location, name, description, paragraph }) => (
  <div className={styles.school}>
    <img className={styles.schoolLogo} src={logoSrc} alt={name} />
    <div className={styles.schoolInfo}>
      <div className={styles.schoolYearsAndLocation}>{years} - {location}</div>
      <div className={styles.schoolName}>{name}</div>
      <div className={styles.schoolDescription}>{description}</div>
      <div className={styles.paragraph}>{paragraph}</div>
    </div>
  </div>
);

const Skills = () => {
  const [activeSection, setActiveSection] = useState('education');

  const handleScroll = () => {
    const educationSection = document.getElementById('educationSection');
    const experienceSection = document.getElementById('experienceSection');
    const skillsSection = document.getElementById('skillsSection');
  
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (
      educationSection &&
      scrollTop < experienceSection.offsetTop - 170 // adjust the offset as needed
    ) {
      setActiveSection('education');
    } else if (
      experienceSection &&
      scrollTop >= experienceSection.offsetTop - 170 && // adjust the offset as needed
      scrollTop < skillsSection.offsetTop - 170 // adjust the offset as needed
    ) {
      setActiveSection('experience');
    } else if (skillsSection && scrollTop >= skillsSection.offsetTop - 250) { // adjust the offset as needed
      setActiveSection('skills');
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offsetTop = sectionElement.offsetTop;
  
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      <div id="sideMenu" className={styles.sideMenu}>
        <ul>
          <li
            className={activeSection === 'education' ? styles.active : null}
            onClick={() => scrollToSection('educationSection')}
          >
            {activeSection === 'education' ? ' —— Education' : 'Education'}
          </li>
          <li
            className={activeSection === 'experience' ? styles.active : null}
            onClick={() => scrollToSection('experienceSection')}
          >
            {activeSection === 'experience' ? ' —— Experience' : 'Experience'}
          </li>
          <li
            className={activeSection === 'skills' ? styles.active : null}
            onClick={() => scrollToSection('skillsSection')}
          >
            {activeSection === 'skills' ? ' —— Skills' : 'Skills'}
          </li>
        </ul>
      </div>

      <div className={styles.sections}>
        <div id="educationSection" className={styles.section}>
          <h2>Education</h2>
          <School 
            logoSrc="/images/umich.png"
            years="2020-2024" 
            location="Ann Arbor, Michigan" 
            name="University of Michigan" 
            description="B.S in Computer Science and Statistics (Double Major) from the school of Literature, Science, & the Arts" 
            paragraph="Relevant Coursework: Data Structures & Algorithms, Linear Algebra, Web Systems, Foundations of Computer Science, 
                       Data Mining & Statistical Learning, User Interface Design, Database Management Systems, Computational Methods in Statistics, 
                       Applied Regression Analysis, Bayesian Data Analysis, Mobile App Development for Entrepreneurs"
          />
          <hr className={styles.divider} />
          <School 
            logoSrc="/images/aisc.png" 
            years="2016-2020" 
            location="Chennai, India"
            name="American International School Chennai"
            description="Varsity Basketball Captain, Model United Nations, Jumpstart" 
          />
          <hr className={styles.divider} />
        </div>
        <div id="experienceSection" className={styles.section}>
          <h2>Experience & Extracurriculars</h2>
          <School 
            logoSrc="/images/urbansci.png"
            years="May 2023-Present" 
            location="Detroit, Michigan" 
            name="Data Engineer Intern"
            description="Urban Science" 
          />
          <hr className={styles.divider} />
          <School 
            logoSrc="/images/harman.png"
            years="May 2022-August 2022" 
            location="Novi, Michigan" 
            name="Systems / Software Engineer Intern"
            description="Harman International" 
          />
           <hr className={styles.divider} />
          <School 
            logoSrc="/images/mft.png"
            years="January 2022-Present" 
            location="Ann Arbor, Michigan" 
            name="Vice President of Technology Development"
            description="Michigan FinTech" 
          />
          <hr className={styles.divider} />
          <School 
            logoSrc="/images/tek.png"
            years="April 2022-Present" 
            location="Ann Arbor, Michigan" 
            name="Technical Development Committee"
            description="Tau Epsilon Kappa - Professional Technology Fraternity" 
          />
          <hr className={styles.divider} />
        </div>
        <div id="skillsSection" className={styles.section}>
          <h2>Skills</h2>
          <div className={styles.text}>Hover over each card!</div>
          <div className={styles.cardWrapper}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.imgcontent}>
                <span className={styles.imgcontentText}>Programming <br/> & <br/> Development</span>
              </div>
              <div className={styles.content}>
              Python<br/>C++<br/>R<br/>Javascript<br/>HTML5<br/>CSS3<br/>React<br/>Next.js<br/>Node.js<br/>Flask<br/>REST APIs
              </div>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.imgcontent}>
                <span className={styles.imgcontentText}>Data Analysis <br/> & <br/> Database Management</span>
              </div>
              <div className={styles.content}>
              Pandas<br/>Numpy<br/>Apache Arrow<br/>SQL<br/>SQL Server Management Studio<br/>R Studio<br/>
              </div>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.imgcontent}>
                <span className={styles.imgcontentText}>Tools <br/> & <br/> Environments</span>
              </div>
              <div className={styles.content}>
              Git<br/>AWS<br/>Microsoft Azure<br/>Linux<br/>VS Code<br/>Visual Studio<br/>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
