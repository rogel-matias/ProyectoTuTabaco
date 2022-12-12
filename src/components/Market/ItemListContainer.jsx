import { ItemList } from "./ItemList"
import BBDD from "../Stock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Loader } from "../Loader";

export const ItemListContainer = ( {greeting} ) => {

    const { categoryId } = useParams();

    
    const [products, setProducts] = useState([])
    
    console.log(products)

    useEffect( () => {
        if (categoryId) {
            getProducts()
              .then(response => setProducts(response.filter( prod => prod.category == categoryId)))
        } else {
            getProducts()
              .then(response => setProducts(response))
              .catch(error => console.log(error))
        }

        return () => setProducts([])

    }, [categoryId])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve (BBDD), 2000)
        })
    }

  return (
    <div className="pb-96">
          <p className="text-5xl py-20"> {greeting} </p>
          {
            products.length
            ?
            <ItemList products={products} />
            :
            <Loader />
          }
    </div>
  )
}