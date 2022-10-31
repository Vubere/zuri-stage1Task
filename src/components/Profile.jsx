import profilePic from "../assets/profilePics.jpg";

export default function Profile() {
  return (
    <header className="profile">
      <div>
        <div className="img">
          <img src={profilePic} alt="victors picture" id="profile__img"/>
        </div>
        <p id="twitter">Victor Ubere</p>
        <p id="slack" style={{'display': 'none'}}>Victor Ubere</p>
      </div>
    </header>
  );
}
