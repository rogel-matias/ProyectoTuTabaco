import { Link } from "react-router-dom"

export const ItemFinish = () => {
  return (
    <Link to='/cart'>
        <button className="btn sm:btn-wide pt-10 px-6 pb-12 mt-1 transition-all duration-500 hover:bg-green-100 hover:text-black hover:underline underline-offset-8">Carrito de compras</button>
    </Link>
  )
}