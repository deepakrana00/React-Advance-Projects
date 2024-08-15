import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9d699dc3-2fed-496f-b751-024011c4c73d");
  
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
    <div className='contact'>
        <div className="contact-col">
  <h3>Send us a message <img src={msg_icon} alt="" /></h3>
  <p>Join our vibrant community—ask questions, share insights, and celebrate milestones. Learning is more enjoyable when shared.</p>
  <ul>
    <li> <img src={mail_icon} alt="" />dr543@gmail.com</li>
    <li> <img src={phone_icon} alt="" />+123-46-698</li>
    <li> <img src={location_icon} alt="" />77 Massachuedts Ave, cambtiffg <br /> MA 021356 ,United States</li>
  </ul>
        </div>
        <div className="contact-col">
<form onSubmit={onSubmit}>
    <label htmlFor="">Your name</label>
    <input type="text" name='name' placeholder='Enter your name'  required/>

<label htmlFor="">Phone Number</label>
<input type="tel" name='phone' placeholder='Enter your mobile number ' required />
<label htmlFor="">Write your messages here</label>
<textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
<button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
</form>
<span>{result}</span>
        </div>
    </div>
  )
}

export default Contact