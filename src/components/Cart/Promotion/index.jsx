import { Modal } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPoromotionCode,
  removePromotionCode,
} from '../../../redux/slice/CartSlice'
import ModalInfoGitf from './Modal/ModalInfoGitf'
const Promotion = () => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { isLoading, dataPromotionCode } = useSelector((state) => state.cart)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [giftCode, setGiftCode] = useState('')
  const [error, setError] = useState('')

  const handleClick = () => {
    setLoading(true)
    setOpen(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }
  const handleSubmit = () => {
    dispatch(getPoromotionCode({ giftCode, token }))
      .unwrap()
      .then(() => {
        setOpen(false)
      })
      .catch((error) => {
        if (error.status === 404) {
          setError('Mã khuyễn mãi không tồn tại hoặc đã hết hạn')
        }
      })
  }
  const handleOnchangeCode = () => {
    setOpen(true)
    dispatch(removePromotionCode())
  }
  return (
    <div className="bg-white rounded-xl p-7 cursor-pointer">
      <div className="text-2.5xl font-bold mb-4">Khuyến mãi</div>
      {!dataPromotionCode ? (
        <div
          className="rounded-xl flex justify-center bg-[#f6f9fc] font-bold text-1.5xl items-center p-4"
          onClick={handleClick}
        >
          <svg
            className="mr-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#dc2626"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M5.11702 17.6577C3.28369 17.6577 1.78369 16.1577 1.78369 14.3244V13.491C1.78369 12.991 2.20036 12.6577 2.61702 12.491C3.61702 12.1577 4.28369 11.241 4.28369 10.1577C4.28369 9.07438 3.61702 8.15771 2.61702 7.82438C2.20036 7.65771 1.78369 7.32438 1.78369 6.82438V5.99105C1.78369 4.15771 3.28369 2.65771 5.11702 2.65771H15.117C16.9504 2.65771 18.4504 4.15771 18.4504 5.99105V6.82438C18.4504 7.32438 18.0337 7.65771 17.617 7.82438C16.617 8.15771 15.9504 9.07438 15.9504 10.1577C15.9504 11.241 16.617 12.1577 17.617 12.491C18.0337 12.6577 18.4504 12.991 18.4504 13.491V14.3244C18.4504 16.1577 16.9504 17.6577 15.117 17.6577H5.11702ZM7.61702 8.49105C8.11702 8.49105 8.45036 8.15771 8.45036 7.65771C8.45036 7.15771 8.11702 6.82438 7.61702 6.82438C7.11702 6.82438 6.78369 7.15771 6.78369 7.65771C6.78369 8.15771 7.11702 8.49105 7.61702 8.49105ZM13.4504 12.6577C13.4504 13.1577 13.117 13.491 12.617 13.491C12.117 13.491 11.7837 13.1577 11.7837 12.6577C11.7837 12.1577 12.117 11.8244 12.617 11.8244C13.117 11.8244 13.4504 12.1577 13.4504 12.6577ZM13.0337 8.07438C13.2837 7.82438 13.2837 7.40771 13.0337 7.15771C12.7837 6.90771 12.367 6.90771 12.117 7.15771L7.11702 12.1577C6.86702 12.4077 6.86702 12.8244 7.11702 13.0744C7.36702 13.3244 7.78369 13.3244 8.03369 13.0744L13.0337 8.07438Z"
                fill=""
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_21_9220">
                <rect width="20" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          Chọn hoặc nhập mã khuyến mãi
        </div>
      ) : (
        <div className="rounded-xl flex ite justify-center bg-[#f6f9fc] font-bold text-1.5xl items-center p-4">
          <svg
            className="mr-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#dc2626"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M5.11702 17.6577C3.28369 17.6577 1.78369 16.1577 1.78369 14.3244V13.491C1.78369 12.991 2.20036 12.6577 2.61702 12.491C3.61702 12.1577 4.28369 11.241 4.28369 10.1577C4.28369 9.07438 3.61702 8.15771 2.61702 7.82438C2.20036 7.65771 1.78369 7.32438 1.78369 6.82438V5.99105C1.78369 4.15771 3.28369 2.65771 5.11702 2.65771H15.117C16.9504 2.65771 18.4504 4.15771 18.4504 5.99105V6.82438C18.4504 7.32438 18.0337 7.65771 17.617 7.82438C16.617 8.15771 15.9504 9.07438 15.9504 10.1577C15.9504 11.241 16.617 12.1577 17.617 12.491C18.0337 12.6577 18.4504 12.991 18.4504 13.491V14.3244C18.4504 16.1577 16.9504 17.6577 15.117 17.6577H5.11702ZM7.61702 8.49105C8.11702 8.49105 8.45036 8.15771 8.45036 7.65771C8.45036 7.15771 8.11702 6.82438 7.61702 6.82438C7.11702 6.82438 6.78369 7.15771 6.78369 7.65771C6.78369 8.15771 7.11702 8.49105 7.61702 8.49105ZM13.4504 12.6577C13.4504 13.1577 13.117 13.491 12.617 13.491C12.117 13.491 11.7837 13.1577 11.7837 12.6577C11.7837 12.1577 12.117 11.8244 12.617 11.8244C13.117 11.8244 13.4504 12.1577 13.4504 12.6577ZM13.0337 8.07438C13.2837 7.82438 13.2837 7.40771 13.0337 7.15771C12.7837 6.90771 12.367 6.90771 12.117 7.15771L7.11702 12.1577C6.86702 12.4077 6.86702 12.8244 7.11702 13.0744C7.36702 13.3244 7.78369 13.3244 8.03369 13.0744L13.0337 8.07438Z"
                fill=""
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_21_9220">
                <rect width="20" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          Đã áp dụng mã khuyễn mãi
          <button
            onClick={() => setOpen2(true)}
            className="underline-offset-8 ms-2 text-[1rem] text-primary1"
          >
            Xem chi tiết
          </button>
          <button
            onClick={handleOnchangeCode}
            className="ms-2 text-[1rem] text-primary1"
          >
            Thay đổi mã
          </button>
        </div>
      )}

      <Modal
        title={
          <p className="text-2.5xl font-bold">Chọn hoặc nhập mã khuyến mãi</p>
        }
        open={open}
        onCancel={() => setOpen(false)}
        loading={loading}
        footer={null}
        centered
        width={700}
      >
        <div className="flex justify-between py-5 border-y-1">
          <input
            type="text"
            className="w-full py-4 px-4 bg-[#f6f9fc] focus:outline-none focus:border-primary1 focus:border-[0.01rem]  rounded-xl"
            placeholder="Nhập mã khuyến mãi"
            value={giftCode}
            onFocus={() => setError('')}
            onChange={(e) => setGiftCode(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            disabled={giftCode ? false : true}
            className={`${giftCode ? 'bg-primary1' : 'bg-[#ccc]'} ms-5 w-52 flex justify-center items-center text-2xl py-4 text-[#fff] rounded-xl`}
          >
            <div className="">Áp dụng</div>
            {isLoading && (
              <img
                className="w-6 ms-2"
                src={`/assets/icons/loading/load.gif`}
                alt=""
              />
            )}
          </button>
        </div>
        <div className="pt-2 text-[#f94831]">{error}</div>
        <div className="pt-5">Bạn có thể chọn 1 khuyến mãi</div>
      </Modal>
      <Modal
        title={<p className="text-2.5xl font-bold">Chi tiết khuyến mãi</p>}
        open={open2}
        onCancel={() => setOpen2(false)}
        loading={loading}
        footer={null}
        centered
        width={700}
      >
        <ModalInfoGitf dataPromotionCode={dataPromotionCode} />
      </Modal>
    </div>
  )
}

export default Promotion
