import React from 'react'
import './Contact.css'
import mesg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import White_Arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8ef66f9e-e55f-457c-b8d4-9eccd9e8f24f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={mesg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />23sahilsojitra@gmail.com</li>
          <li><img src={phone_icon} alt="" />+91 6355330023</li>
          <li><img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type='text' name='name' placeholder='Enter Your Name' required autoComplete='off'/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter Your Phone Number' required autoComplete='off'/>
            <label>Message</label>
            <textarea name='message' rows="6" placeholder='Enter Your Message Here' required autoComplete='off'></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={White_Arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact
