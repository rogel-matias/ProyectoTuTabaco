import {Triangle } from "react-loader-spinner"


export const Loader = () => {
  return (

    <div className="flex flex-col content-center items-center my-32">
        <Triangle
            height="140"
            width="140"
            color="rgb(133 77 14)"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
        <h2 className="mt-2 text-xl">Cargando...</h2>
    </div>
    
  )
}