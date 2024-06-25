import React from 'react'
import './footer.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'
/**
 * Thêm link tại footer dòng 26
 * <li><a href="#testimonials">Testimonials</a></li>
 */

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'> R ABHISHEK REDDY</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/r-abhishek-reddy-56b950215/"><FaLinkedinIn /></a>
                
            </div >

            <div className="footer__copyright">
                <small>&copy; <b><a href="https://www.linkedin.com/in/r-abhishek-reddy-56b950215/">R ABHISHEK REDDY</a></b>. </small>
            </div>
        </footer >
    )
}

export default Footer