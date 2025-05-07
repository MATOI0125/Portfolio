import React from 'react';
import "./home.css";
import Me from "../../assets/me.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home_img"/>
                <h1 className="home_name">SHENBA</h1>
                <span className="home_education">日本電子専門学校　Webデザイン科2年生<br />私の職種志望はWebデザイナーです</span>
            <HeaderSocials />            
            <a href="#contact" className="btn">お問合せ</a>
            <ScrollDown />
            </div>
        </section>
    )
}

export default Home;