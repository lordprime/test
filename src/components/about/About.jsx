import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Level</h5>
                            <small>Entry level </small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Certification</h5>
                            <small>CEH v12</small>
                            <small>CND v2</small>
                            <small>Cybersecurity Analyst</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>+3 Completed</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Research</h5>
                            <small>+4 Completed</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Work Experience</h5>
                            <small>10 Months</small>
                        </article>
                    </div>

                    <p>
                       A fervent cybersecurity aficionado, Certified Ethical Hacker and Network defender with bachelor’s degree in Cybersecurity. My expertise spans Penetration testing and Cloud Security. With a strong academic background and hands-on experience, I am dedicated to safeguarding digital landscapes. I thrive on continuous learning and staying ahead of cybersecurity advancements. Energetic and hardworking, I am eager to embrace new challenges and contribute to innovative security solutions. 
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Connect </a>
                </div>
            </div>
        </section>
    )
}

export default About