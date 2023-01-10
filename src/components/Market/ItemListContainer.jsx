import { ItemList } from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Loader } from "../Loader";
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const ItemListContainer = ( {greeting} ) => {

    const { categoryId } = useParams();

    const [products, setProducts] = useState([])


    useEffect( () => {

        getProducts()

        return () => setProducts([])

    }, [categoryId])


    const getProducts = () => {
        
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        getDocs(itemsCollection).then( snapshot => {

            if (categoryId) {

                const get = snapshot.docs.map( doc => ( {id: doc.id, ...doc.data()} ));
                setProducts(get.filter( product => product.category == categoryId ))

            } else {

                setProducts(snapshot.docs.map( doc => ( {id: doc.id, ...doc.data()} )))

            }
        })
    }

  return (
    <div className="pb-28 bg-zinc-50">
        <p className="mt-40 pt-20 text-7xl font-extrabold textCatalogo bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-slate-900 text-shadow"> C A T Á L O G O </p>
        
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