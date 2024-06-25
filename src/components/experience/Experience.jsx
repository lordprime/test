import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5> Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                {/* Offensive Security Engineer Experience */}
                <div className="experience__section">
                    <h3> PENETRATION TESTING - Intern</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Vulnerability Assessment</h4>
                                <small className='text-light'>Conducted vulnerability assessments and penetration tests on web applications, network 						infrastructure and android.</small>
 				<small className='text-light'>Mastered tools like Burp Suite, Metasploit, Nmap to access and analyze target systems.</small>
			        <small className='text-light'>Successfully identified and reported an high security Vuln in web application. Performed automated security testing and worked in configuration of security testing with custom scripts.</small>
                            </div>
                        </article>
                    </div>
                </div>
                </div>

                {/* Programming Languages */}
                <div className="experience__section">
                    <h3>Programming & Scripting Languages</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Latex</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Shell Scripting - Bash and Batch</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Docker, Docker-compose</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Technologies and Tools */}
                <div className="experience__section">
                    <h3>Technologies and Tools</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Nmap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Wireshark</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Metasploit</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Burp Suite</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Splunk</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>TexStudio</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Docker, Docker-compose</h4>
                                <small className='text-light'>intermediate</small>
                            </div>
                        </article>
                        
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;
