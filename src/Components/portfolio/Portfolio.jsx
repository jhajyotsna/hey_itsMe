import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "My Portfolio",
    github: "https://github.com",
    demo: "https://github.com",
    status: "Completed!"
  },
  {
    id: 2,
    image: IMG2,
    title: "Google Maps Travel Companion Application",
    github: "https://github.com",
    demo: "https://github.com",
    status: "Ongoing..."
  },
  {
    id: 3,
    image: IMG3,
    title: "ECommerce React Application",
    github: "https://github.com",
    demo: "https://github.com",
    status: "Upcoming..."
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>Projects Developed by me.</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, status }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h6>{status}</h6>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
