import { useEffect, useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [checked, setChecked] = useState(false)

  useEffect(()=>{
    document.title = 'Contact Victor Ubere'
  },[])

  return (
    <section className="contact">
      <div className="center">
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className="names">
            <label htmlFor="first_name">
              First name
              <input
                type="name"
                id="first_name"
                placeholder="Enter your first name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
            </label>
            <label htmlFor="last_name">
              Last name
              <input
                type="name"
                id="last_name"
                placeholder="Enter your last name"
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
              />
            </label>
          </div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              placeholder="yourname@email.com"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and I'll reply you as soon as possible"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            />
          </label>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              value={checked}
              onChange={({ target }) => setChecked(target.value)}
            />
            You agree to providing your data to Victor Ubere who may contact
            you.
          </label>
          <button id="btn__submit">Send message</button>
        </form>
      </div>
    </section>
  );
}
