import React from "react";
import Image from './brands.png';
import Picture from './holder-pic.png';
import './Brands.css';
import Babe from './babeworkimage.png';
import Babe2 from './babework2.png'
export default function Brands(){


    return(
        
    <div >
    <div className="header">
       <h1 className="clientwork">CLIENT WORK.</h1>
       <div className="smallheader">
       <h2 className="item">BABE ORIGINAL</h2>
       <h3>OVA was onboarded in Nov of 2022 to lead and strategize the Babe Original Influencer Department and since leading the team has driven the below results.</h3>
    </div>
       
       </div>
       <div className="first-list">
       <ul>
        <li>1st Campaign: Dec 2022-Jan 2023</li>
        <ul>
        <li>8 Affiliates posted</li>
        <li>51 posts total with a frequency of 6.4 post per affiliated</li>
        <li>$209,718EMV</li>
        <li>2,019,969 impressions</li>
        <li>5,691,102 reach</li>
        </ul>
       </ul>
       <ul>
        <li></li>
        <ul className="rightside1">
        <li>Lifted affiliate revenue to drive 40% MOM of total of total DTC revenue</li>
        <li>Successfully strategised and executed 2 National Affiliate Costco Campaigns for the brands Essential Lash Serum driving brand awareness and foot traffic into Costco stores around the nation</li>
        </ul>
        </ul>
       </div>

        <div className="second-list">
       <ul>
        <li>2nd Campaign</li>
        <ul>
        <li>22 Affiliates posted</li>
        <li>39 posts total with a frequency of 2.8 posts</li>
        <li>$429,178EMV</li>
        <li>4,312,461 impressions</li>
        <li>14,201,409 reach</li>
       </ul>
       </ul>
       
       <img className="babepic1" src={Babe} alt="holder" height='200px' width='800px' />
       </div>

       <section>
        <ul className="third-list">
      <li> From Jan 2023 - Dec 2023 OVA raised the brands EMV (earned media value; engagement rate) 188% to $49.3million EMV</li>
<ul>
<li>Created almost 548,798,266 million impressions with a reach of 302,113,934 million from 601 Influencers (screenshot below includes brand ambassador data)</li>
</ul>
<li>Out of 2063 creators, the brand generated $12,000 posts with a potency of $24k from each creator that posted about the brand</li>
<li>Create and ran an annual brand ambassador campaign with a focus on driving viral content alongside influencer activations</li>
<li>Supported 5 new product launches throughout the year, contracting a total of 122 affiliates to drive over 5 million dollars in revenue for the year</li>
</ul>
<img src= {Babe2} alt="babework" height='200px' width='800px' />
       </section>
      <h1 className="brandheader">BRAND PARTNERS.</h1> 
       <section>
       <img className="brandpic" src={Image} alt="brands" height='500px' width='900px' />
     </section>
   
   
    </div>

    )
}