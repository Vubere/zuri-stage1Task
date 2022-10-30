import profilePic from "../assets/profilePics.jpg";

export default function Profile() {
  return (
    <header className="profile">
      <div>
        <div className="img">
          <img src={profilePic} alt="victors picture" />
        </div>
        <p id="twitter">@VictorUbere</p>
      </div>
    </header>
  );
}
