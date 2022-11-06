import { useEffect, useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [checked, setChecked] = useState(false)

  const [errorfName, setfName] = useState(false)
  const [errorlName, setlName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(()=>{
    document.title = 'Contact Victor Ubere'
  },[])
  const handleSubmit = (e) => {
    e.preventDefault()
    if(firstName==''){
      setfName(true)
      return
    }else{
      if(errorfName)
      setfName(false)
    }
    if(lastName==''){
      setlName(true)
      return
    }else{
      if(errorlName)
      setlName(false)
    }
    if(email==''){
      setErrorEmail(true)
      return
    }else{
      if(errorEmail)
      setErrorEmail(false)
    }
    if(message==''){
      setErrorMessage(true)
      return
    }else{
      if(errorMessage)
      setErrorMessage(false)
    }
    setMessage('')
  }


  return (
    <section className="contact">
      <div className="center">
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="names">
            <label htmlFor="first_name">
              First name
              <input
                type="name"
                id="first_name"
                placeholder="Enter your first name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
                style={{
                  border: `${errorfName ? "1px solid red" : "1px solid #3337"}`,
                }}
              />
              <div
                className="errorMessage"
                style={{
                  color: "red",
                  fontSize: "0.6em",
                  display: `${errorfName ? "block" : "none"}`,
                }}
              >
                Please enter first name
              </div>
            </label>
            <label htmlFor="last_name">
              Last name
              <input
                type="name"
                id="last_name"
                placeholder="Enter your last name"
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
                style={{
                  border: `${errorlName ? "1px solid red" : "1px solid #3337"}`,
                }}
              />
              <div
                className="errorMessage"
                style={{
                  color: "red",
                  fontSize: "0.6em",
                  display: `${errorlName ? "block" : "none"}`,
                }}
              >
                Please enter last name
              </div>
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
              style={{
                border: `${errorEmail ? "1px solid red" : "1px solid #3337"}`,
              }}
            />
            <div
              className="errorMessage"
              style={{
                color: "red",
                fontSize: "0.6em",
                display: `${errorEmail ? "block" : "none"}`,
              }}
            >
              Please enter your email
            </div>
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
              style={{
                border: `${errorMessage ? "1px solid red" : "1px solid #3337"}`,
              }}
            />
            <div
              className="errorMessage"
              style={{
                color: "red",
                fontSize: "0.6em",
                display: `${errorMessage ? "block" : "none"}`,
              }}
            >
              Please enter a message
            </div>
          </label>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              value={checked}
              onChange={({ target }) => {
                if (checked) {
                  setChecked(false);
                } else {
                  setChecked(true);
                }
              }}
            />
            You agree to providing your data to Victor Ubere who may contact
            you.
          </label>
          <button
            id="btn__submit"
            className={`${checked ? "" : "disabled"}`}
            disabled={!checked}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
