import React from 'react';
import './header.css';
// import '../../index.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
       <div className='container header__container'> {/* the type header__container is called bim */}
      <h5>Hello I'm</h5>
      <h1>Jyotsna Jha</h1>
      <h5 className="text-light">Frontend Developer and a would be Fullstack developer!</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    
    {/* We are creating CTA(call to action button in a separate file to keep the code simple) */}

      </div>
    </header>
  )
}

export default Header;
