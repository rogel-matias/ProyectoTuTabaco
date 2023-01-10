import { Link } from "react-router-dom"

export const CartEmpty = () => {
  return (
    <div>
        <h3 className="text-3xl">CARRITO VACIO! Vuelve atras para agregar elementos</h3>
        <Link to="/">
            <button className="btn mt-10">VOLVER</button>
        </Link>
    </div>
  )
}