import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { MinusSvgPath } from "./MinusSvgPath";
import { PlusSvgPath } from "./PlusSvgPath";


export const ItemCount = ( {product, setFinish} ) => {


    const [count, setCount] = useState(1);
    const { addToCart } = useCartContext();

    
    const upCount = () => {
        if (count < product.stock) {
            setCount(count => count + 1);
        }
    }

    const downCount = () => {
        if (count > 1) {
            setCount(count => count - 1);
        }
    }

    const onAdd = () => {
        if (product.stock >= count) {
            addToCart(product, count)
            setFinish(true);
        }
    }


  return (

    product.stock > 0
    ?   
        <div className="flex flex-col gap-y-6 m-auto">
            <div className="flex flex-row rounded border border-gray-900 gap-x-8 mx-auto bg-zinc-600 text-white">
                <button onClick={downCount} className="border-r transition-colors duration-500 hover:bg-red-600 border-gray-900 p-4 group ">
                    <MinusSvgPath />
                </button>
                <div className="text-2xl mt-1 mr-1 "><span> {count} </span></div>
                <button onClick={upCount} className="border-l transition-colors duration-500 hover:bg-green-600 border-gray-900 p-4 group ">
                    <PlusSvgPath />
                </button>
            </div>
            <button onClick={onAdd} className="btn sm:btn-wide pt-10 px-6 pb-12 mt-1 transition-all duration-500 hover:bg-green-100 hover:text-black hover:underline underline-offset-8">Agregar al carrito</button>
        </div>
    : 
        <p className="text-3xl my-10 text-red-600">SIN STOCK</p>
  )
}