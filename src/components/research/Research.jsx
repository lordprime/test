import React from 'react'
import './research.css'
import IMG1 from '../../assets/research1.jpg'
import IMG2 from '../../assets/research2.jpg'
import IMG4 from '../../assets/research4.jpg'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG4,
        title: 'API-based network scanning: Implementation of the Nmap-API project findings.',
        github: 'https://drive.google.com/file/d/1Xjkk2BuDRdfo6VWmQ-USImYHxlnRVpkA/view',
    },
    {
        id: 2,
        image: IMG1,
        title: 'AI BASED ENUMERATION AND EXPLOIT SUGGESTER: A proposal paper on AI with cybersecurity research.',
        github: 'https://www.jetir.org/view.php?paper=JETIRFM06037',
    },
    {
        id: 3,
        image: IMG2,
        title: 'ENHANCING FOG COMPUTING BY EXPANDING DATA CENTERS',
        github: 'https://drive.google.com/file/d/1PlmUE3-Fy2GrRJdVuCCki2rtM-yLwCB-/view',
    },
    
]


const Research = () => {
    return (
        <section id='research'>
            <h5>My Recent Papers</h5>
            <h2>Research</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>View Paper</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Research