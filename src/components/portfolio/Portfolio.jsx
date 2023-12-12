import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard  Financial Visualization",
    github: "htttp: //github.com",
    demo: "http://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG1,
    title: "Crypto Currency Dashboard  Financial Visualization",
    github: "htttp: //github.com",
    demo: "http://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 3,
    image: IMG1,
    title: "Crypto Currency Dashboard  Financial Visualization",
    github: "htttp: //github.com",
    demo: "http://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 4,
    image: IMG1,
    title: "Crypto Currency Dashboard  Financial Visualization",
    github: "htttp: //github.com",
    demo: "http://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 5,
    image: IMG1,
    title: "Crypto Currency Dashboard  Financial Visualization",
    github: "htttp: //github.com",
    demo: "http://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 6,
    image: IMG1,
    title: "Crypto Currency Dashboard  Financial Visualization",
    github: "htttp: //github.com",
    demo: "http://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <a href={github} className="btn" target="_blank">
                GitHub
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </article>
          );
        })}
        {/*  <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="" />
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn"></a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          ></a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="" />
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn"></a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          ></a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="" />
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn"></a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          ></a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="" />
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn"></a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          ></a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="" />
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn"></a>
          <a
            href="https://dribble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          ></a>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
