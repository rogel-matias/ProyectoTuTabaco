import { ItemDetail } from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../Loader"
import { doc, getDoc, getFirestore } from "firebase/firestore"

export const ItemDetailContainer = () => {


    const { id } = useParams()

    const [product, setProduct] = useState()
    console.log(product)


    const getProduct = () => {

        const db = getFirestore();
        const docRef = doc(db, 'items', id);

        getDoc(docRef).then( snapshot => {
            setProduct( {id: snapshot.id, ...snapshot.data()})
        })
    }

    
    useEffect( () => {

      getProduct()
      
    }, [])



  return (
    <>
      {
        product
        
        ? <ItemDetail product={product}/>
        : <Loader />
      }
    </>
  )
}