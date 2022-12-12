import { ItemCount } from "./ItemCount"

export const ItemDetail = ( {product} ) => {

  return (
    <div>
        <div className="card lg:card-side bg-base-100 shadow-xl flex-column my-10 lg:my-20 mx-4 sm:mx-20 xl:mx-48 drop-shadow-xl flex lg:flex-row">
            <div className="basis-1/2">
                <figure className="m-10"><img src={product.pictureUrl} alt={product.imageAlt}/></figure>
            </div>
            <div className="flex flex-col justify-evenly items-center content-around basis-1/2">
                <h2 className="card-title text-3xl">{product.title}</h2>
                <span class="text-3xl">${product.price}</span>
                <div className="mb-4 card-actions flex flex-col">
                    <ItemCount stock={product.stock} />
                </div>
            </div>
        </div>
    </div>
  )
}