import { Link } from "react-router-dom"

export const Item = ( {id, pictureUrl, imageAlt, title, price} ) => {
  return (
      <Link to={`/item/${id}`}>
        <div id={id} className="group divide-y border relative pb-3">
            <div className="bg-teal-900 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={pictureUrl}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:-translate-y-10 group-hover:opacity-75 "
                />
                <div className="absolute left-[6.6rem] bottom-[5.5rem] invisible group-hover:visible">
                    <span className="text-xl text-stone-100">Ver más</span>
                </div>
            </div>
            <div className="px-3">
                <h3 className="mt-3 text-center  text-gray-700">{title}</h3>
                <p className="mt-1 text-center text-xl font-medium text-gray-900">${price}</p>
            </div>
        </div>
      </Link>
  )
}