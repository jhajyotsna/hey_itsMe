import React from 'react';
import './company.css';
import NCS from '../../assets/ncs.jpg'

const Company = () => {
  return (
    <section id="company">
      <h5>Company</h5>
      <h2>Organizations I worked in..</h2>

      <div className="company__container">
        <div className="about__company">
          <a href="https://www.ncs.co/en-in/" target="_blank">
            <h3>NCSI Technologies</h3>
          </a>
          <p>March 2022 - Current</p>
          <p>Position : Associate Engineer</p>
        </div>

        <div className="about__company-image">
          <a href="https://www.ncs.co/en-in/" target='_blank'>
            <img className="company-image" src={NCS} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Company;
