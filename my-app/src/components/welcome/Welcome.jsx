import React from 'react'
import './Welcome.css'

const Welcome = () => {
  const titleText = "Welcome to SHINHA's Portfolio Website";
  const subtitleText = "Discover my work and journey";

  const renderAnimatedText = (text, className) => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className={`${className}__char`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="welcome" id="welcome">
      <div className="welcome__container">
        <h1 className="welcome__title">
          {renderAnimatedText(titleText, 'welcome__title')}
        </h1>
        <p className="welcome__subtitle">
          {renderAnimatedText(subtitleText, 'welcome__subtitle')}
        </p>
      </div>
    </section>
  )
}

export default Welcome