// Newsletter.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Newsletter.css'; // Import the CSS file

const Newsletter = () => {
  const form = useRef();
  const [subscribed, setSubscribed] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bc94kbe', 'template_c40k3n2', form.current, '4yXeJZOqig0kxqEVF')
      .then((result) => {
        console.log(result.text);
        setSubscribed(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="styled-newsletter-form">
      <div className="newsletter-heading">
        <h2>Want to get the latest updates?</h2>
        <p>Subscribe to our newsletter for news and updates.</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <input type="submit" value="Subscribe" />
        {subscribed && (
          <div className="thanks-message">
            <h3>Thanks for subscribing!</h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
