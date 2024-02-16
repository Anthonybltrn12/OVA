import React from "react";
import './About.css' ;
import Image from './holder-pic.png';
import Headshot from './headshotova.png';
import F1 from './f1xnba.png';
import O from './oraa header.png';
import { Link } from "react-router-dom";
import F1xnba from "./F1xnba"; 

export default function About(){
    const Whiteline = ({color}) =>(
        <hr 
        style={{color : color,
        backgroundColor : color,
        height : 2,
        width : 700 }}
     />
    )

    return(
        <>
        <h1>ABOUT US.</h1>
        <div className="about-container">
        <img 
        src={Headshot} alt="headshot" height="200px" width='200px'/>
        <p className="about-p">
        Jessica Sloan is a seasoned branding, partnerships, and influencer
         marketing specialist with numerous years of dedicated expertise in
          the field. Originally hailing from Australia, Jessica made a bold
           move to the United States in 2018 to pursue her career in marketing.
            Her passion lies in crafting and executing strategic partnership
             strategies that drive revenue growth for brands and individuals
              through the power of creator marketing. Jessica's knack for identifying
               key opportunities and fostering valuable collaborations has earned her
                a reputation as a go-to expert in the industry.

        In addition to her brand-focused work, Jessica extends her talents to 
        individuals, offering guidance on personal branding and endorsement deals.
         Working with some of the top NBA and celebrity talent such as Andre Drummond,
          Julius Randle and many more, her unique approach helps individuals enhance 
          their brand ethos and awareness, resulting in increased recognition and market
           impact. With a track record of delivering results and a commitment to
            excellence, Jessica Sloan continues to be a driving force in the world of
             branding, activations and influencer marketing.
        </p>
        
        </div>
        <Whiteline color = "white"  />

        <section className="piclinks">
            <a to={<F1xnba />}>
            <img src={F1} alt="holder" height='150px' width='400px'/>
            </a>
            <img src={O} alt="holder"  height='150px' width='400px'/>
        </section>
        </>
    )
}