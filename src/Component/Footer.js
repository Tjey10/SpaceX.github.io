import React from 'react';
import ReactDOM from 'react-dom/client';



function Footer(){
return(
<div div className='footer'>
        <div className='socials'>
            <a href='https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><i class="fa-brands fa-twitter"></i></a>
            <a href='https://www.instagram.com/spacex/?hl=en'><i class="fa-brands fa-instagram"></i></a>
            <a href='https://www.instagram.com/spacex/?hl=en'><i class="fa-brands fa-facebook"></i></a>
            <a href='https://www.linkedin.com/company/spacex/'><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div className='trademark'>
            <p>SPACEX © 2024</p>
           
        </div>
        <div className='legals'>
             <a href='https://www.spacex.com/media/privacy_policy_spacex.pdf'>Privacy Policy</a>
             <a href='https://www.spacex.com/supplier/'>Supplier</a>
        </div>
</div>
)
}

export default Footer;