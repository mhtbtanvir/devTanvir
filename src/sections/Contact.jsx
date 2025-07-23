
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value   //dynamic update
    });
  }


  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  
  const showAlertMessage = (message, type) => {
     setShowAlert(true);
     
    setAlertMessage(message);
    setAlertType(type);
   
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }
   
  //service_p8o6tk2
  //template_95220yd

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    try {
     await emailjs.send('service_p8o6tk2', 'template_95220yd', {
      from_name: formData.name,
      to_name: "Tanvir Mahtab",
      from_email: formData.email,
      message: formData.message,
      to_email: "mhtbtanvir@gmail.com"
    },"0A9kAOzLroXrwAy8_");
    
      setIsLoading(false);
      showAlertMessage(" Message sent successfully", "success");
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage(" Message failed to send", "error");}
 

  }

  return (
  <section className='relative flex items-center
    c-space section-spacing ' >
    {showAlert && < Alert text={alertMessage}  type ={alertType} />}
      <div className ="flex flex-col items-center justify-center 
        max-w-md p-5 mx-auto  border border-white/10 rounded-2xl bg-primary ">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Lets Have a Chat..</h2>
          <p classname=" font-normal text-neutral-400"> 
            Whether You're looking for a software Engineer/Web Developer to hire,
            or want to create a new web platform or in need of a collaborator,
            a partner in web developement.
            Even if you like my work or have any 
            suggesions, feel free 
            to send me a text.Peace be with you. 
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className= "mb-5">
            <label htmlFor="name" className="field-label">Your Name</label>
            <input
            id="name"
            name="name"
            type="text"
            className="field-input field-input-focus"
            placeholder="type your name here..."
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required>

            </input>
          </div>

          <div className= "mb-5">
            <label htmlFor="email" className="field-label">Your Email</label>
            <input
            id="email"
            name="email"
            type="text"
            className="field-input field-input-focus"
            placeholder="name@email.com"
            value={formData.email}
            onChange={handleChange}

            autoComplete="email"
            required>

            </input>
          </div>

          <div className= "mb-5">
            <label htmlFor="message" className="field-label"> Message</label>
            <textarea
              id="message"
              name="message"
              type="message"
              rows ="5"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}

              required>

            </textarea>
          </div>

          <button
            type="submit"
            className=" w-full px-1 py-3 text-xl
            text-center cursor-pointer rounded-md bg-radial from-lavender to-royal hover-animation"
           >
            {isLoading ? "Sending..." : "Send"}
          </button>

        </form>



      </div>



  </section>
  )
}

export default Contact