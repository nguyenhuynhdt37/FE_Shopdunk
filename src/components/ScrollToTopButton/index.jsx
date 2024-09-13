import { useState, useEffect } from 'react'
import { FaAngleUp } from 'react-icons/fa6'
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${showButton ? 'flex' : 'hidden'} fixed z-10  right-16 bottom-32 text-3xl w-20 h-20 text-white justify-center items-center rounded-full opacity-15 hover:opacity-50 transition-opacity bg-[#4e4e55]`}
    >
      <FaAngleUp />
    </button>
  )
}

export default ScrollToTopButton
