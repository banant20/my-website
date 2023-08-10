import * as React from "react";
import WorldMap from "react-svg-worldmap";
import styles from '../styles/components/Travel.module.css';


const Travel = () => {
    const data = [
        { country: "us", value: " " }, // united states
        { country: "mx", value: " "  }, // mexico
        { country: "cn", value: " " }, // china
        { country: "ae", value: " " }, // uae
        { country: "fr", value: " " }, // france
        { country: "va", value: " " }, // vatican city
        { country: "nl", value: " " }, // netherlands
        { country: "de", value: " " }, // germany
        { country: "at", value: " " }, // austria
        { country: "bs", value: " " }, // bahamans
        { country: "in", value: " " }, // india
        { country: "ch", value: " " }, // switzerland
        { country: "gb", value: " " }, // uk
        { country: "ma", value: " " }, // morocco
        { country: "br", value: " " }, // brazil
        { country: "pe", value: " " }, // peru
        { country: "th", value: " " }, // thailand
        { country: "my", value: " " }, // malaysia
        { country: "sg", value: " " }, // singapore
        { country: "it", value: " " }, // italy
        { country: "ca", value: " " }, // canada
        { country: "id", value: " " }, // indonesia
        { country: "il", value: " " }, // israel
        { country: "np", value: " " }, // nepal
        { country: "om", value: " " }, // oman
        { country: "qa", value: " " }, // qatar
        { country: "jo", value: " " }, // jordan
        { country: "vn", value: " " }, // vietnam
        { country: "pr", value: " " }, // puerto rico
        { country: "ke", value: " " }, // kenya
        { country: "tz", value: " " }, // tanzania
        { country: "eg", value: " " }, // egypt
        { country: "is", value: " " }, // iceland
        { country: "au", value: " " }, // australia
        { country: "nz", value: " " }, // new zealand

      ];
    
      return (
        <div className={styles.container}>
        <div className={styles.title}>Travel </div>
        <div className={styles.center}>
            One of my passions in life is exploring the world, immersing myself in diverse cultures, and experiencing new perspectives. 
            This interactive map you see below is a testament to my journeys, highlighting the countries I've been fortunate 
            enough to visit. It's also a reflection of how I love to use technology to make information more visual, 
            interactive, and engaging.<br/> <br/>
        
            Each highlighted country represents a story, a journey, and a piece of a world that I've had the privilege to experience.
            If you have any recommendations for where to go to next or any can't miss spots, I would love to hear from you! &#9992; &#127758; &#9992;
            <WorldMap
            color="#BDEDFF"
            size={800}
            data={data}
            borderColor="#0000A5"
            richInteraction='True'
            strokeOpacity={0.3}
            fillOpacity={0.5}
            
          />
        </div>
          
        </div>
      );
};
  
export default Travel;
  