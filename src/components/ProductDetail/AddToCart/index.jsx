import { useDispatch, useSelector } from 'react-redux'
import { createCartItem, getdataOrder } from '../../../redux/slice/CartSlice'
import { useSnackbar } from 'notistack'

const AddToCart = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { token } = useSelector((state) => state.auth)
  const { isLoading } = useSelector((state) => state.cart)
  const data = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const handleSubmit = () => {
    if (isLoading) return
    if (data.productId && data.variantId && data.memoryOptionId) {
      dispatch(createCartItem({ token, data }))
        .unwrap()
        .then(() => {
          enqueueSnackbar('Thêm vào giỏ hàng thành công', {
            variant: 'success',
          })
          dispatch(getdataOrder(token))
        })
        .catch(() => {
          enqueueSnackbar('Có lỗi xẩy ra, vui lòng thử lại sau', {
            variant: 'error',
          })
        })
    } else {
      enqueueSnackbar('Có lỗi xẩy ra, vui lòng thử lại sau', {
        variant: 'error',
      })
    }
  }
  return (
    <div className="">
      <button
        type="button"
        onClick={handleSubmit}
        className="btn rounded-xl bg-primary1 text-white w-full h-24 text-2xl font-bold uppercase mt-8 btn-primary"
      >
        Thêm vào giỏ hàng
        {isLoading && (
          <img className="w-6" src={`/assets/icons/loading/load.gif`} alt="" />
        )}
      </button>
    </div>
  )
}

export default AddToCart
