import zuri from "../assets/zuri.png"
import ingressive from "../assets/ingressive.png"

export default function Footer(){
  return (
    <footer>
      <img src={zuri} alt="zuri logo" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={ingressive} alt="ingressive logo" />
    </footer>
  )
}