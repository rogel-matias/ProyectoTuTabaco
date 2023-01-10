import { useEffect, useState } from "react";
import { useCartContext } from "../../context/cartContext"
import { CartSvg } from "./CartSvg"


const CartWidget = () => {

    const [ count, setCount] = useState();

    const { cart, countWidget } = useCartContext();

    useEffect( ()=>{
        setCount(countWidget())
    }, [cart])

  return (
    <div className="flex-none pr-6">
        <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle box-border mr-5">
                <div className="indicator">
                    <CartSvg />
                    <span className="badge badge-sm indicator-item text-xl p-3">{count && count}</span>
                </div>
            </label>
        </div>
    </div>
  )
}
export default CartWidget