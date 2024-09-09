import './ButtonColor.scss'

const ButtonColor = ({ color, isActive, onTypeCheck, index }) => {
  return (
    <div className="box-btn mr-3" onClick={() => onTypeCheck(index)}>
      <div
        className={`${
          isActive ? 'border-primary1' : 'border-white'
        } w-14 h-14 rounded-full border-1  p-1`}
      >
        <div
          style={{ background: color }}
          className={` w-full h-full rounded-full shadow-button_color`}
        ></div>
      </div>
    </div>
  )
}

export default ButtonColor
