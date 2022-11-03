import profilePic from "../assets/profilePics.jpg";
import share from "../assets/share.png";
import icon from "../assets/icon.png";

export default function Profile() {
  return (
    <header className="profile">
      <div className="icons">
        <img src={share} alt="share" className="share" />
        <div className="iconDiv">
          <img src={icon} alt="icon" className="icon" />
        </div>
      </div>
      <div>
        <div className="img">
          <img src={profilePic} alt="victors picture" id="profile__img" />
        </div>
        <p id="twitter">Victor Ubere</p>
        <p id="slack" style={{ display: "none" }}>
          Victor Ubere
        </p>
      </div>
    </header>
  );
}
