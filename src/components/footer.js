import React from 'react'

const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          <h3>WHERE ARE WE?</h3>
          <span>65 Park Row</span>
          <span>Edinburgh, EH1 4PE</span>
        </div>
        <div className="hours">
          <h3>HOURS</h3>
          <span>Weekdays / 8-5</span>
          <span>Weekdays / 10-5</span>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <span>01632 960966</span>
          <span>@yourSocialName</span>
        </div>
      </section>
      <p>Built by
        <a href="https://crollacreations.com" target="_blank" rel="noopener noreferrer">crollacreations</a>
      </p>
    </footer>
  )
}

export default Footer;