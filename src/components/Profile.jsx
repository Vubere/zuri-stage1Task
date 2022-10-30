import profilePic from '../assets/profilePics.jpg'

export default function Profile()  {
  return (
    <header className="profile">
      <img src={profilePic} alt="victors picture" />
      <p id="twitter">@VictorUbere</p>
    </header>
  )
}