import React from 'react'

const NewsletterComponent = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <h1 className="newsletter__title">Subscribe to Our Newsletter</h1>
        <p className="newsletter__info-update">To get special promotions & keep updated</p>
        <form className="newsletter__form">
          <input 
            placeholder="Enter your email address"
            type="email"
            autoComplete="off"
            className="newsletter__input-email"
          />
          <button className="newsletter__submit-form">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterComponent
