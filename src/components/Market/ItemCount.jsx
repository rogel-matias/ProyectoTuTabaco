import { useState } from "react";
import { MinusSvgPath } from "./MinusSvgPath";
import { PlusSvgPath } from "./PlusSvgPath";

export const ItemCount = ( props ) => {

    const [count, setCount] = useState(1);

    
    const upCount = () => {
        console.log("aumentar")
        if (count < props.stock) {
            setCount(count => count + 1);
        }
    }

    const downCount = () => {
        console.log("disminuir")
        if (count > 1) {
            setCount(count => count - 1);
        }
    }

    const onAdd = () => {
        console.log("agregar")
        if (props.stock >= count) {
            console.log("producto agregado")
        }
    }


  return (
    <div className="flex flex-col gap-y-6 m-auto">
        <div className="flex gap-x-8 mx-auto mt-2">
            <button onClick={downCount} className="rounded border hover:bg-red-600 hover:border-none border-gray-900 p-2 transition duration-300 ease-out hover:ease-in">
                <MinusSvgPath />
            </button>
            <span className="pt-2"> {count} </span>
            <button onClick={upCount} className="rounded border hover:bg-green-600 hover:border-none border-gray-900 p-2 transition duration-300 ease-out hover:ease-in">
                <PlusSvgPath />
            </button>
        </div>
        <button onClick={onAdd} className="btn btn-wide mt-2 hover:bg-indigo-900 px-6 ">Agregar al carrito</button>
    </div>
  )
}