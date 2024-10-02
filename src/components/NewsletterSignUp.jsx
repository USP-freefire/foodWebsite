import React from 'react'

const NewsletterSignUp = () => {
    return (
      <section className="combine">
        <section className="red">
          <h1>Sign up for our <br /> weekly newsletter</h1>
          <p className="short">A short message about what the newsletter will consist of...</p>
          <section className="class">
            <input className="place" type="text" placeholder="First name*" />
            <input className="place" type="text" placeholder="Last name*" />
            <input className="place" type="text" placeholder="Email address*" />
          </section>
          <p className="jon">Join Now</p>
        </section>
      </section>
    );
  };
  

export default NewsletterSignUp
