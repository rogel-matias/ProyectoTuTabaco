import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 py-6">
        <div className="flex-none">
            <a href=" " className="btn btn-ghost normal-case text-xl">Tu Tabaco</a>
        </div>
        <div className="flex-1 justify-center">
            <ul className="flex gap-x-4">
                <li><a href=" ">Home</a></li>
                <li><a href=" ">Contacto</a></li>
                <li><a href=" ">Nosotros</a></li>
                <li><a href=" ">Tienda</a></li>
            </ul>
        </div>
        
        <CartWidget/>
    </div>
  )
}

export default NavBar