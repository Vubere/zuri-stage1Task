import zuri from "../assets/zuri.png";
import ingressive from "../assets/ingressive.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <img src={zuri} alt="zuri logo" id="zuri_internship_logo"/>
          <p>HNG Internship 9 Frontend Task</p>
          <img src={ingressive} alt="ingressive logo" id="I4G"/>
        </div>
      </div>
    </footer>
  );
}
