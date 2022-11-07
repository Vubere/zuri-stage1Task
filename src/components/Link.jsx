import slack from "../assets/Slack.png";
import github from "../assets/githubLogo.png";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <section className="links">
      <a href="https://twitter.com/VictorUbere" id="twitter__link">
       Twitter Link
      </a>
      <a href="https://training.zuri.team/" id="btn__zuri">
        Zuri Team
      </a>
      <a
        href="https:///books.zuri.team"
        title="Find books about design and coding."
        id="books"
      >
        Zuri Books
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=Victor_Ubere"
        id="book__python"
      >
       Python Books
      </a>
      <a href="https://background.zuri.team" id="pitch">
       Background Check For Coders
      </a>
      <a href="https://books.zuri.team/design-rules" id="book__design">
        Design Books
      </a>
      <a href="/contact" id="contact">
        Contact Me
      </a>
      <section id="social">
        <img src={slack} alt="slack logo" id="slack" />
        <a href="https://github.com/Vubere">
          <img src={github} alt="github logo" />
        </a>
      </section>
    </section>
  );
}
