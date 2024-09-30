import { memo } from 'react'
import ItemCart from '../ItemCart'
import { useSelector } from 'react-redux'

const ListCart = memo(() => {
  const { data } = useSelector((state) => state.cart)
  return (
    <div className="col-span-2">
      {data &&
        data.length > 0 &&
        data.map((item) => <ItemCart data={item} key={item?.cartItem?.id} />)}
    </div>
  )
})

export default ListCart
