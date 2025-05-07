import React from 'react';
import "./about.css";
import Image from "../../assets/me1.png";
import AboutBox from './AboutBox';


const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section_title">私について</h2>

            <div className="about_container grid">
                <img src={Image} alt="" className="about_img" />
                <div className="about_data grid">
                    <div className='about_info'>
                    <p className="about_description">私はWebデザイナーとして、ユーザーにとって使いやすく、美しいウェブサイトを作ることに情熱を注いでいます。私の目標は、クライアントのビジョンを実現し、オンラインプレゼンスを向上させることです。</p>
                    <a href="#contact" className="btn">MORE</a>
                    </div>

                    <div className="about_skills grid">

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Development</h3>
                                <span className="skills_number">70%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Coding</h3>
                                <span className="skills_number">70%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage coding">
                                    
                                </span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Design</h3>
                                <span className="skills_number">80%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage design">
                                    
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
            <AboutBox />
        </section>
    )
}

export default About;