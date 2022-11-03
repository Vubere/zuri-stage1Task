export default function Contact() {
  return (
    <section className="contact me">
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <div className="names">
          <label htmlFor="first_name">First name</label>
          <input type="name" id="first_name" />
          <label htmlFor="last_name">Last name</label>
          <input type="name" id="last_name" />
        </div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="message"></label>
        <textarea name="" id="message" cols="30" rows="10"></textarea>
        <input type="checkbox" name="" id="checkbox" />
        <label htmlFor="checkbox">You agree to providing your data to Victor Ubere who may contact you.</label>
        <button id="btn__submit">submit</button>
      </form>
    </section>
  );
}
