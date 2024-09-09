import React from 'react'
import './Button.scss'

const ButtonStorage = ({ storage, isActive, onSelect, id }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => onSelect(storage, id)}
        className={`${
          isActive === id ? 'active' : ''
        } border-2 rounded py-3.5 px-4.5 mr-6`}
      >
        {storage.storage}
      </button>
    </div>
  )
}

export default ButtonStorage
