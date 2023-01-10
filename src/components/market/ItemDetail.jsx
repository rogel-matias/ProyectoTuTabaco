import { useState } from "react"
import { ItemCount } from "./ItemCount"
import { ItemFinish } from "./ItemFinish"

export const ItemDetail = ( {product} ) => {

    const [finish, setFinish] = useState(false)

  return (
    <div className="pt-52 pb-20 backDetail">
        <div className="flex flex-column lg:flex-row lg:max-h-[500px] lg:divide-x divide-teal-700 card lg:card-side bg-zinc-300 shadow-xl lg:my-20 mx-4 sm:mx-20 md:mx-28 xl:mx-32 drop-shadow-xl ">
            <div className="basis-1/3 flex items-center justify-center ">
                <figure className="w-full m-10 "><img src={product.pictureUrl} alt={product.imageAlt}/></figure>
            </div>
            <div className="flex flex-col justify-evenly items-center content-around basis-1/3 mx-5">
                <h2 className="card-title text-3xl pt-8 text-poppins">{product.title}</h2>
                <div className="max-h-[300px] overflow-auto">
                    <p className="xl:text-xl p-2 sm:p-8 text-justify text-roboto">{product.description && product.description}</p>        
                </div>
            </div>
            <div className="flex flex-col justify-center items-center basis-1/3">
                <span className="text-3xl text-poppins mb-12">Precio: ${product.price}</span>
                <div className="mb-4 flex flex-col">
                {
                    finish 
                    ?
                    <ItemFinish />
                    :
                    <ItemCount product={product} setFinish={setFinish}/>   
                }              
                </div>
            </div>
        </div>
    </div>
  )
}