import React, { useRef } from 'react';
import styles from '../styles/components/contact.module.css';

const Contact = () => {
    const formRef = useRef();

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c4395a7b-4ec7-4b62-a8f9-7309e9f24fea");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            formRef.current.reset();
        }
    }

    return (
        <>
            <div className={styles.title}>Contact Me </div>
            <div className={styles.center}>
                Fill out the form below to get in touch with me in regards  <br/> to anything you're curious or want to know more about!
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit} className={styles.form} ref={formRef}>
                    <div className={styles.flexRow}>
                        <input type="text" name="name" placeholder="Name" className={styles.inputHalf} required />
                        <input type="email" name="email" placeholder="Email" className={styles.inputHalf} required />
                    </div>
                    <input type="text" name="subject" placeholder="Subject" required />
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="submit" className={styles.button}>Submit &rarr;</button>
                </form>
            </div>
            <div className={styles.footerContainer}>
                <span className={styles.specialFont}> © </span> Anant Bajaj 2023
            </div>
        </>
    );
};

export default Contact;
