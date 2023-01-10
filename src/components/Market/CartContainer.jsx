import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { Cart } from "./Cart";
import { CartEmpty } from "./CartEmpty";

export const CartContainer = ( {} ) => {

  const [total, setTotal] = useState();

  const { cart, clear, totalPrice } = useCartContext();

  useEffect(()=> {

      setTotal(totalPrice());
      
  },[cart])


  return (
    <div className="backCart">
        <div className="flex flex-col pt-52 pb-20 ">
            <h1 className="pb-10 md:pb-20 text-2xl md:text-6xl font-extrabold bg-clip-text drop-shadow-2xl text-transparent bg-gradient-to-r from-slate-700 to-slate-900">Shopping Cart</h1>

            { cart.length
              
              ?
                
              <div className="lg:w-9/12 xl:w-6/12 flex flex-col sm:mx-10 lg:mx-auto bg-zinc-400/60"> 
                  { cart.map( product => <Cart key={product.id} {...product}/>) }
                   
                  <div className="flex flex-col md:flex-row justify-around gap-y-5 md:gap-y-0 mb-10 mx-2 text-3xl border-t-2 pt-14">
                      <button onClick={clear} className="btn transition ease-in bg-rose-900 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300">VACIAR CARRITO</button>
                      <span>TOTAL: <strong>${total}</strong> </span>
                      
                      <Link to="/formOrder" className="btn transition ease-in bg-teal-900 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300">
                          <button>CONTINUAR</button>
                      </Link>
                  </div>
              </div>

              :

              <CartEmpty />

            }
        </div>
    </div>
  )
}