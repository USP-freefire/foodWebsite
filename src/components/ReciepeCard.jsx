import React from 'react'

const ReciepeCard = ({ imgSrc, altText, title }) => {
    return (
      <section className="one">
        <img src={imgSrc} alt={altText} />
        <p className="ones">{title}</p>
        <img className="arrow" src="Arrow 1.png" alt="arrow" />
      </section>
    );
  };

export default ReciepeCard
