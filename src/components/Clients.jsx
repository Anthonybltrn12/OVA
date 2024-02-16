import React from "react";
import Image from './holder-pic.png'
import './Clients.css'


export default function Client(){

    const Whiteline = ({color}) =>(
        <hr 
        style={{color : color,
        backgroundColor : color,
        height : 2}}
     />
    )

    return(
        <div id="body">
            <div className="header">
            <h1 >NBA & CELEBRITY ROSTER.</h1>
            </div>
            < div className="client-boxes" >
                
                   <h3 className="c1"> 
                    
                    <img src={Image} alt="Client image" height="200px" width="200px" />
                    <section className="title1">
                    <h6>@drummond</h6>
                    <h6>2 X NBA All Star</h6>
                    <h6>Chicago Bulls</h6>
                    </section>
                    </h3>
                    <h3 className="c2"> 
                    
                    <img src={Image} alt="Client image" height="200px" width="200px" />
                    <section className="title2">
                    <h6>@coreycalliet</h6>
                    <h6>Celebrity Trainer to</h6>
                    <h6>Michael B Jordan,</h6> 
                     <h6>Khloe Kardashian,</h6>
                        <h6>etc</h6>
                    </section>
                    </h3>

                    {/* <h3 className="c3"> 
                    
                    <img src={Image} alt="Client image" height="200px" width="200px" />
                    <section className="title3">
                    <h6>blank</h6>
                    <h6>blank</h6>
                    <h6>blank</h6>
                    </section>
                    </h3> */}
                   
                 
                    
            </div>
            <Whiteline color = "white" />
            <h1>OTHER TALENT.</h1>
            <div className="talentlist">
              <ul >
                <li>@jujusmith-NFL</li>
                <li>@traviskelce-NFL</li>
                <li>@patrickmahomes-NFL</li>
                <li>@dakprescott-NFL</li>
                <li>@deandrehopkins-NFL</li>
                <li>@shannonsharpe-Celebrity</li>
                <li>@fatjoe-Celebrity</li>
                </ul>
                <ul>
                <li>@djkhaled-Artist</li>
                <li>@kendricklamar-Artist</li>
                <li>@jcole-Artist</li>
                <li>@postmalone-Artist</li>
                <li>@burnaboy-Artist</li>
                <li>@asake-Artist</li>
                <li>@wizkid-Artist</li>
                <li>@justintimberlake-Artist</li>
              </ul>
        </div>
        <Whiteline color = "white" />
        <div className="influencer">
            <h1 className="i-title">
                INFLUENCER ROSTER.
            </h1>
            <div className="ipics1" >
            <img src={Image} alt="holder" height='100px' width='100px' />
            <img src={Image} alt="holder" height='100px' width='100px' />
            <img src={Image} alt="holder" height='100px' width='100px' />
            </div>
        </div>
       </div> 
    )
}