import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 h-36">
        <div className="flex-none sm:ml-5">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Tu Tabaco</Link>
        </div>
        <div className="flex-1 justify-center">
            <ul className="flex gap-x-6 text-xl">
                <Link to="/category/tabaco">
                    <li>Tabacos</li>
                </Link>
                <Link to="/category/filtro">
                    <li>Filtros</li>
                </Link>
                <Link to="/category/seda">
                    <li>Sedas</li>
                </Link>
            </ul>
        </div>
        
        <CartWidget/>
    </div>
  )
}

export default NavBar