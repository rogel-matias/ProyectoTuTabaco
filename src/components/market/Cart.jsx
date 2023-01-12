import { useCartContext } from "../../context/cartContext";
import { DeleteProduct } from "./DeleteProduct";

export const Cart = ({id, title, quantity, price, pictureUrl}) => {

    const { removeToCart } = useCartContext();

  return (
    <div className="flex justify-between py-5 border-t-2">
        <div className="flex">
            <div className="ml-1 sm:ml-7 h-36 w-36">
                <img
                    src={pictureUrl}
                    alt="{product.imageAlt}"
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="font-semibold sm:mr-7 flex flex-col items-start justify-around ml-1 sm:ml-10">
                <span>{title}</span>
                <span>Cantidad: {quantity}</span>
                <span>Precio: ${price}</span>
            </div>
        </div>
        <div className="flex items-center mr-8">
            <button onClick={() => removeToCart(id)} className=""><DeleteProduct /></button>
        </div>
    </div>
  )
}