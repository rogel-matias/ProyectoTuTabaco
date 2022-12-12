import { Link } from "react-router-dom"

export const Item = ( {id, pictureUrl, imageAlt, title, price} ) => {
  return (
      <Link to={`/item/${id}`}>
        <div id={id} className="group border pb-3">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={pictureUrl}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <div className="px-3">
                <h3 className="mt-4 text-start text-sm text-gray-700">{title}</h3>
                <p className="mt-1 text-start text-lg font-medium text-gray-900">{price}</p>
            </div>
        </div>
      </Link>
  )
}