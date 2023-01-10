import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import CartWidget from "./CartWidget"
import { MenuSvg } from "./MenuSvg"

const NavBar = () => {

        const {cart} = useCartContext()

  return (
    <div className="navbar fixed top-0 z-40 flex flex-col sm:flex-row h-40 justify-between bg-teal-700">

        <div className="sm:ml-14">
            <Link to="/" className="btn btn-ghost normal-case text-4xl sm:text-6xl sm:pb-20 text-stone-200">Tu Tabaco</Link>
        </div>

        <div>
            { cart.length > 0          
                &&  <Link to="/cart">
                        <CartWidget/>
                    </Link>
            }
            <div className="dropdown dropdown-bottom dropdown-end">
                <button className="sm:mr-20 "><MenuSvg /></button>
                <ul className="mt-14 dropdown-content shadows menu bg-teal-900 rounded-box w-56 text-white text-poppins">
                    <li className="hover-bordered">
                        <Link className="py-8" to="/category/tabaco">TABACOS</Link>
                    </li>
                    <li className="hover-bordered">
                        <Link className="py-8" to="/category/filtro">FILTROS</Link>
                    </li>
                    <li className="hover-bordered">
                        <Link className="py-8" to="/category/seda">SEDAS</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar