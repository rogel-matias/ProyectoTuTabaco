import { ItemDetail } from "./ItemDetail"
import BBDD from "../Stock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../Loader"

export const ItemDetailContainer = () => {


    const { id } = useParams()

    const [product, setProduct] = useState()

    const getProduct = () => new Promise ((resolve, reject) =>{
        setTimeout(() => resolve(BBDD.find( prod => prod.id === id )), 2000)
    })

    useEffect( () => {
        getProduct()
          .then(response => setProduct(response))
          .catch(error => console.log(error))
    }, [getProduct()])
    
    console.log(product)
    

  return (
    <>
      {
        product
        ?
        <ItemDetail product={product}/>
        :
        <Loader />
      }
    </>
  )
}