import { useRef, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import { LiaTrashSolid } from 'react-icons/lia'
import LoadingBar from 'react-top-loading-bar'
import { formatCurrency } from '../../../../Utils/formart'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, updateCart } from '../../../redux/slice/CartSlice'
import { useSnackbar } from 'notistack'
const ItemCart = ({ data }) => {
  const { enqueueSnackbar } = useSnackbar()
  const ref = useRef()
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const [count, setCount] = useState(data?.cartItem?.quantity)
  const [previousCount, setPreviousCount] = useState(data?.cartItem?.quantity)

  const handleQuantity = (isIncrement) => {
    const newCount = isIncrement ? count + 1 : count - 1
    if (newCount < 1) {
      enqueueSnackbar('Số lượng sản phẩm tối thiểu là 1', { variant: 'error' })
      return
    }
    if (isIncrement && newCount > data?.memoryOption?.quantity) {
      enqueueSnackbar(
        'Đã đạt đến giới hạn đơn hàng trong kho không thể mua thêm',
        {
          variant: 'error',
        }
      )
      return
    }
    setCount(newCount)
    ref.current.continuousStart()
    dispatch(
      updateCart({
        id: data?.cartItem?.id,
        token: token,
        quantity: newCount,
      })
    )
      .unwrap()
      .then(() => {
        setPreviousCount(newCount)
      })
      .catch((error) => {
        enqueueSnackbar(error, { variant: 'error' })
        setCount(previousCount)
      })
      .finally(() => {
        ref.current.complete()
      })
  }
  const handleInputChange = (e) => {
    let value = e.target.value
    if (value === '' || value != 0 || /^[0-9\b]+$/.test(value)) {
      if (value > data?.memoryOption?.quantity) {
        enqueueSnackbar('Số lượng vượt quá giới hạn', { variant: 'error' })
        return
      }
      value = Number(value)
      setCount(value)
      setTimeout(() => {
        if (value > 0) {
          ref.current.continuousStart()
          dispatch(
            updateCart({
              id: data?.cartItem?.id,
              token: token,
              quantity: value,
            })
          )
            .unwrap()
            .then(() => {
              setPreviousCount(value)
            })
            .catch((error) => {
              enqueueSnackbar(error, { variant: 'error' })
              setCount(previousCount)
            })
            .finally(() => {
              ref.current.complete()
            })
        }
      })
    }
  }
  const handleDelete = () => {
    if (data.cartItem.id) {
      ref.current.continuousStart()
      dispatch(deleteCartItem({ id: data.cartItem.id, token }))
        .unwrap()
        .then(() => {
          enqueueSnackbar('Xoá sản phẩm thành công', { variant: 'success' })
        })
        .catch(() => {
          enqueueSnackbar('Có lỗi xẩy ra, vui lòng thử lại sau', {
            variant: 'error',
          })
        })
        .finally(() => {
          ref.current.complete()
        })
    }
  }

  return (
    <div className="w-full relative px-7 py-10 mb-10 rounded-xl bg-[#fff] flex justify-between items-center">
      <LoadingBar color="#df3535" ref={ref} />
      <div className="flex">
        <div className="mr-7 flex items-center justify-center bg-[#f6f9fc] w-32 h-32 p-5 rounded-xl">
          <img src={data?.product?.avatar} className="h-full object-cover" />
        </div>
        <div className="text-1.8xl">
          <h5 className="py-3 font-bold">{data?.product?.name}</h5>
          <div className="info mb-5 px-4 py-1.5 text-xl bg-[#f6f9fc] rounded-xl">
            {`${data?.memoryOption?.storage}, ${data?.variant?.color}, `}
            {data?.product?.isNewProduct &&
              'Hàng mới, Chính Hãng, Đã bao gồm VAT'}
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-end">
        <div className="price text-1.5xl mr-10">
          <div className="new-price font-bold py-1 text-[#dc2626]">
            {formatCurrency(data?.memoryOption?.price)}
          </div>
          <div className="old-price py-1 line-through text-[#9ca3af]">
            {formatCurrency(data?.memoryOption?.oldPrice)}
          </div>
        </div>
        <div className="flex justify-between text-xl h-14 w-[10.5rem] rounded-xl border-1 border-[#e6e8ea] mr-5">
          <div
            className="down py-2 px-4 flex items-center cursor-pointer border-r-1"
            onClick={() => handleQuantity(false)}
          >
            <FaMinus />
          </div>
          <input
            className="text-center focus:outline-none w-full input-no-spinner font-bold"
            type="text"
            value={count}
            onChange={handleInputChange}
          />
          <div
            className="up py-2 px-4 flex items-center cursor-pointer border-s-1"
            onClick={() => handleQuantity(true)}
          >
            <FaPlus />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleDelete}
            className="flex text-[#6b7280] justify-end py-5 ps-5 text-4xl items-center"
          >
            <LiaTrashSolid />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCart
