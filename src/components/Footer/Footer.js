import iconInstagram from "../../assets/icons/instagram.png"
import iconTwitter from "../../assets/icons/twitter.png"
import iconFacebook from "../../assets/icons/facebook.png"
import iconWhatsapp from "../../assets/icons/whatsapp.png"

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-y-20 py-16 bg-teal-700 text-white">
        <div>
            <p className="text-xl mb-4"><strong>Diseño y desarrollo - Matías Rogel</strong></p>
            <p><strong>Copyright © 2022</strong></p>
        </div>
        <div className="sm:mt-0 mt-8">
            <nav className="bg-teal-700 flex flex-row gap-x-4">
                <a href=" ">
                  <img src={iconInstagram} alt="Red Social"/>
                </a>
                <a href=" ">
                  <img src={iconTwitter} alt="Red Social"/>
                </a>
                <a href=" ">
                  <img src={iconFacebook} alt="Red Social"/>
                </a>
                <a href=" ">
                  <img src={iconWhatsapp} alt="Red Social"/>
                </a>
            </nav>
        </div>
        <a target="_blank" href="https://icons8.com/icon/8818/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
  )
}   
export default Footer