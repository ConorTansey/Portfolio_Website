

import React  from 'react';
import './Footer.css'

function Footer() {

    const currentYear =new Date().getFullYear();

    return ( 
        <div className="Footer">
            <div className="Footer_Content">
                <p>@ Conor Tansey {currentYear}</p>
                
            </div>
        </div>
     );
}

export default Footer;