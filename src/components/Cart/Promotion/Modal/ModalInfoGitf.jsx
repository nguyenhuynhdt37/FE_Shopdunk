import { useEffect, useState } from 'react'

const ModalInfoGitf = ({ dataPromotionCode }) => {
  const [timeRemaining, setTimeRemaining] = useState()
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const expiryDate = new Date(dataPromotionCode?.endDate)
      const currentDate = new Date()
      const remaining = expiryDate - currentDate

      if (remaining > 0) {
        const hoursRemaining = Math.floor(remaining / (1000 * 60 * 60))
        const minutesRemaining = Math.floor(
          (remaining % (1000 * 60 * 60)) / (1000 * 60)
        )
        const secondsRemaining = Math.floor((remaining % (1000 * 60)) / 1000)
        setTimeRemaining(
          `${hoursRemaining} giờ ${minutesRemaining} phút ${secondsRemaining} giây`
        )
      } else {
        setTimeRemaining('Mã khuyến mãi đã hết hạn')
      }
    }
    calculateTimeRemaining()
    const intervalId = setInterval(calculateTimeRemaining, 1000)
    return () => clearInterval(intervalId)
  }, [dataPromotionCode?.endDate, setTimeRemaining])
  return (
    <div>
      <div className="py-5 font-bold flex justify-between border-b-1">
        Mã khuyễn mãi:
        <div className="font-normal">{dataPromotionCode?.code}</div>
      </div>
      <div className="py-5 font-bold flex justify-between border-b-1">
        Chi tiết khuyễn mãi:
        <div className="font-normal">{dataPromotionCode?.description}</div>
      </div>
      <div className="py-5 font-bold flex justify-between border-b-1">
        Phần trăm giảm giá:
        <div className="font-normal">{dataPromotionCode?.percentDiscount}%</div>
      </div>
      <div className="py-5 font-bold flex justify-between border-b-1">
        kết thúc sau:
        <div className="text-[#dc2626] font-bold">{timeRemaining}</div>
      </div>
    </div>
  )
}

export default ModalInfoGitf
