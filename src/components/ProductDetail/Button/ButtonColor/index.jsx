import ButtonColor from './ButtonColor'

const ButtonColorBox = ({ data, typeCheck, onTypeCheck }) => {
  return (
    <div className="flex">
      {data.map((color, index) => (
        <ButtonColor
          key={color}
          index={index}
          isActive={typeCheck === index}
          color={color.colorCode}
          onTypeCheck={onTypeCheck}
        />
      ))}
    </div>
  )
}

export default ButtonColorBox
