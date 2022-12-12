import iconInstagram from "../../assets/icons/instagram.png"
import iconTwitter from "../../assets/icons/twitter.png"
import iconFacebook from "../../assets/icons/facebook.png"
import iconWhatsapp from "../../assets/icons/whatsapp.png"

const Footer = () => {
  return (
    <div className="flex flex-col justify-around py-16 bg-base-100 sm:flex-row">
        <div>
            <p><strong>Diseño y desarrollo - Matías Rogel</strong></p>
            <p><strong>Copyright © 2022</strong></p>
        </div>
        <div className="sm:mt-0 mt-8">
            <nav className="flex flex-row gap-x-4">
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
    </div>
  )
}
export default Footer