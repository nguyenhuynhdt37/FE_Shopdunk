import React from 'react'
import './Button.scss'

const ButtonStorage = ({ storage, isActive, onSelect }) => {
  const handleClick = (id) => {
    onSelect(id)
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => handleClick(storage.id)}
        className={`${
          isActive === storage.id ? 'active' : ''
        } border-2 rounded py-3.5 px-4.5 mr-6`}
      >
        {storage.name}
      </button>
    </div>
  )
}

export default ButtonStorage
