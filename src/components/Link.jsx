import slack from "../assets/Slack.png";
import github from "../assets/githubLogo.png";

export default function Links() {
  return (
    <main>
      <a href="https://twitter.com/VictorUbere">
        <button id="twitter_link">Twitter Link</button>
      </a>
      <a href="https://training.zuri.team/">
        <button id="btn_zuri">Zuri Team</button>
      </a>
      <a href="https:///books.zuri.team" title="Find books about design and coding.">
        <button id="books">Zuri Books</button>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=Victor_Ubere">
        <button id="book_python">Python Books</button>
      </a>
      <a href="https://background.zuri.team">
        <button id="pitch">Background Check For Coders</button>
      </a>
      <a href="https://books.zuri.team/design-rules">
        <button id="book_design">Design Books</button>
      </a>
      <div className="slack_github">
        <img src={slack} alt="slack logo" id="slack"/>
        <a href="https://github.com/Vubere">
          <img src={github} alt="github logo" />
        </a>
      </div>
    </main>
  );
}
