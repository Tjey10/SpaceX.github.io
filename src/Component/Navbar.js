import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';




function Navbar(){

const [lastScrollTop, setLastScrollTop] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);




const toggleHamburger = () => {
   const hamburger = document.getElementById('hamburger');
   const subMenu = document.getElementById('sub-menu');
   const mobile = document.getElementById('mobile-menu');
   const X = document.getElementById('X');
   const X2 = document.getElementById('X-2');

   hamburger.addEventListener("click", () =>{
   subMenu.classList.add("show-sub-menu");
   })

    X.addEventListener("click", () =>{
     subMenu.classList.remove("show-sub-menu");
   })


   hamburger.addEventListener("click", () =>{
    mobile.classList.add("show-sub-menu-2");
    })
 
     X2.addEventListener("click", () =>{
      mobile.classList.remove("show-sub-menu-2");
    })
}

     return(
        <>
           <nav className={showNavbar ? "show" : "hide"} id='navbar'>
                <div className='logo'>
                    <img src={`${process.env.PUBLIC_URL}/Imgs/spaceX-logo.jpg`} alt='Logo'/>
                </div>
                <ul className='menu-1'>
                    <li><a href='https://www.spacex.com/vehicles/falcon-9/' className='menu-item'>FALCON 9</a></li>
                    <li><a href='https://www.spacex.com/vehicles/falcon-heavy/' className='menu-item'>FALCON HEAVY</a></li>
                    <li><a href='https://www.spacex.com/vehicles/dragon/' className='menu-item'>DRAGON</a></li>
                    <li><a href='https://www.spacex.com/vehicles/starship/' className='menu-item'>STARSHIP</a></li>
                    <li><a href='https://www.spacex.com/humanspaceflight/' className='menu-item'>HUMAN SPACEFLIGHT</a></li>
                    <li><a href='https://www.spacex.com/rideshare/' className='menu-item'>RIDESHARE</a></li>
                    <li><a href='https://www.spacex.com/starshield/' className='menu-item'>STARSHIELD</a></li>
                    <li><a href='https://www.starlink.com/' className='menu-item'>STARLINK</a></li>
                </ul>
                <ul className='menu-2'>
                    <li><a href='https://shop.spacex.com/' className='menu-item'>SHOP</a></li>
                    <li className='hamburger' id='hamburger' onClick={toggleHamburger}><i className="fa-solid fa-bars"></i></li>
                </ul>
                <ul class="sub-menu" id="sub-menu">
                  <p id="X"><i class="fa-solid fa-xmark"></i></p>
                  <li><a href="https://www.spacex.com/mission/">MISSION</a></li>
                  <li><a href="https://www.spacex.com/launches/">LAUNCHES</a></li>
                  <li><a href="https://www.spacex.com/launches/">CAREERS</a></li>
                  <li><a href='https://www.spacex.com/updates/'>UPDATES</a></li>
                  <li><a href="'https://shop.spacex.com/'">SHOP</a></li>
                </ul>

                <ul class="mobile-menu" id="mobile-menu">
                  <p id="X-2"><i class="fa-solid fa-xmark "></i></p>
                  <li><a href='https://www.spacex.com/vehicles/falcon-9/' className='menu-item'>FALCON 9</a></li>
                  <li><a href='https://www.spacex.com/vehicles/falcon-heavy/' className='menu-item'>FALCON HEAVY</a></li>
                  <li><a href='https://www.spacex.com/vehicles/dragon/' className='menu-item'>DRAGON</a></li>
                  <li><a href='https://www.spacex.com/vehicles/starship/' className='menu-item'>STARSHIP</a></li>
                  <li><a href='https://www.spacex.com/humanspaceflight/' className='menu-item'>HUMAN SPACEFLIGHT</a></li>
                  <li><a href='https://www.spacex.com/rideshare/' className='menu-item'>RIDESHARE</a></li>
                  <li><a href='https://www.spacex.com/starshield/' className='menu-item'>STARSHIELD</a></li>
                  <li><a href='https://www.starlink.com/' className='menu-item'>STARLINK</a></li>
                  <li><a href="https://www.spacex.com/mission/">MISSION</a></li>
                  <li><a href="https://www.spacex.com/launches/">LAUNCHES</a></li>
                  <li><a href="https://www.spacex.com/launches/">CAREERS</a></li>
                  <li><a href='https://www.spacex.com/updates/'>UPDATES</a></li>
                  <li><a href="'https://shop.spacex.com/'">SHOP</a></li>
                </ul>
           </nav>
        </>
     )
}

export default Navbar;