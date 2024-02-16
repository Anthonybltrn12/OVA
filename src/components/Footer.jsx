import React from "react";
import FooterI from './Footer.png';

export default function Footer(){


      return(
        <div className="footer">
          <h5>Email:</h5>
          <h5>Instagram</h5>
          <h5>LinkedIn</h5>
          <img src={FooterI} alt="footer" height='500px' width='1000px' />
        </div>

      )
}