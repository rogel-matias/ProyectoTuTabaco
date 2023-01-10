import {Triangle } from "react-loader-spinner"


export const Loader = () => {
  return (

    <div className="flex flex-col content-center items-center py-32 bg-zinc-50">
        <Triangle
            height="140"
            width="140"
            color="rgb(15 118 110)"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>
    
  )
}