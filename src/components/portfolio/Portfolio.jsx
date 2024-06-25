import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'


//Do not use the images in production
const data = [
  
    {
        id: 1,
        image: IMG1,
        title: 'Nmap-API: A graduation project was done by my team, an RESTAPI for network analysis.',
        github: 'https://github.com/morpheuslord/Nmap-API',
    },
     {
	id: 2,
	image: IMG2,
        title : 'Hackbot: Project done with team, A PoC LLM Assistant for analysis and information gathering.',
        github: 'https://github.com/lordprime/HackBot',
    },
    {
        id: 3,
        image: IMG3,
        title: 'CVE-LLM-Dataset: A test dataset to display the structure of LLM trainig dataset.',
        github: 'https://github.com/lordprime/CVE-llm_dataset',
    },

]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
