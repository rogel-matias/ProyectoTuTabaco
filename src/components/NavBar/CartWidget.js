import { CartSvg } from "./CartSvg"

const CartWidget = () => {
  return (
    <div className="flex-none pr-6">
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <CartSvg />
                    <span className="badge badge-sm indicator-item">8</span>
                </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CartWidget