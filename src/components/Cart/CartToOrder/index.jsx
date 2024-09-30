import Order from '../Order'
import ListCart from '../ListCart'
const CartToOrder = ({ continus }) => {
  return <>{continus ? <Order /> : <ListCart />}</>
}

export default CartToOrder
