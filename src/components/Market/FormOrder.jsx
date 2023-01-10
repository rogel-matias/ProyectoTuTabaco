import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const FormOrder = () => {

    const nameRef = useRef()
    const numberRef= useRef()
    const emailRef = useRef()
    const emailRef2 = useRef()

    const {cart, setCart, totalPrice} = useCartContext(); 


    const sendOrder = () => {

        if (condition()) {
       
            const order = {
                buyer: { 
                    name: nameRef.current.value,
                    phone: numberRef.current.value,
                    email: emailRef.current.value 
                },
                items: cart.map( product => {

                    updateStock(product.id, product.quantity, product.stock)

                    return {
                        id: product.id,
                        name: product.title,
                        price: product.price,
                    } 
                }),
                total: totalPrice(),
            };

            const db = getFirestore();
            const ordersCollection = collection(db, "orders");

            addDoc(ordersCollection, order).then(({id}) => alertCompleteOrder(id));

            setCart([]);
        } else {
            alertError();
        }
    }


    const alertError = () => {
 
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            icon: 'error',
            title: <p>¡Error al cargar datos!</p>,
            html: <p>Intente nuevamente</p>,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })     
    }


    const alertCompleteOrder = (id) => {
 
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            icon: 'success',
            title: <p>¡Gracias por su compra!</p>,
            html: <p>Su ID de orden es <b>{id}</b></p>,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })     
    }
    

    const updateStock = (id, quantity, stock) => {

        const db = getFirestore();
        const docRef = doc(db, 'items', id);

        const newStock = stock - quantity;

        updateDoc(docRef, { stock: newStock });
    }


    const condition = () => {
        return emailRef.current.value == emailRef2.current.value && numberRef.current.value.length > 8
    } 


  return (
    <div className="flex flex-col backOrder pt-56 pb-20">
        <h1 className="text-5xl mb-14 font-semibold underline underline-offset-4">Informacion del comprador</h1>
        <div className="py-10 px-2 md:p-10 bg-zinc-600  grid gap-y-5 border-4 border-teal-600 w-11/12 md:w-9/12 lg:w-6/12 m-auto text-xl">
            <div className="flex flex-col text-justify">
                <label className="text-white">Nombre completo</label>
                <input className="h-10 my-2 pl-2" ref={nameRef} placeholder="Introduzca su nombre completo" type="text" name="name" required/>
            </div>
            <div className="flex flex-col text-justify">
                <label className="text-white">Número</label>
                <input className="h-10 my-2 pl-2" ref={numberRef} placeholder="Introduzca su número telefónico" type="number" name="number" required/>
            </div>
            <div className="flex flex-col text-justify">
                <label className="text-white">Correo electrónico</label>
                <input className="h-10 my-2 pl-2" ref={emailRef} placeholder="Introduzca su email" type="email" name="email" required/>
            </div>
            <div className="flex flex-col text-justify">
                <label className="text-white">Confirmar correo electrónico</label>
                <input className="h-10 my-2 pl-2" ref={emailRef2} placeholder="Introduzca su email" type="email" name="email" required/>
            </div>
            <Link to="/">
                <button onClick={sendOrder} className="btn btn-success hover:text-white md:text-xl m-5 mx-20 hover:bg-teal-600 hover:-translate-y-2">REALIZAR COMPRA</button>
            </Link>
        </div>
    </div>
  )
}