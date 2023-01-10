import { useState } from "react";
import { createContext, useContext } from "react"


const Contexto = createContext([])

export const useCartContext = () => { 
    const cartContext = useContext(Contexto);
    return cartContext 
}


export const CartContextProvider = ( {children} ) => {


    const [cart, setCart] = useState([])


    const countWidget = () => {

        const maped = cart.map(item => item.quantity);
        return maped.reduce((acc, count) => acc + count, 0);

    }

    const totalPrice = () => {
        
        const maped = cart.map(item => item.price * item.quantity);
        return maped.reduce((acc, item) => acc + item, 0)

    }

    const addToCart = (item, quantity) => {

        const itemRepeat = cart.find( i => i.id == item.id )

        if (itemRepeat) {

            const cartNew = cart.filter( i => i.id != item.id )
            setCart([...cartNew, {...item, quantity: quantity + itemRepeat.quantity}])

        } else {

            setCart([...cart, {...item, quantity}])

      }
    }

    const removeToCart = (prodId) => {

        const cartNew = cart.filter( i => i.id != prodId)
        setCart(cartNew)

    }

    const clear = () => {
      setCart([])
    }

    

    const value = {
      cart: cart,
      setCart: setCart,
      addToCart: addToCart,
      clear: clear,
      removeToCart: removeToCart,
      countWidget: countWidget,
      totalPrice: totalPrice,
    }

  return (
    <Contexto.Provider value={value}>
        {children}
    </Contexto.Provider>
  )
}