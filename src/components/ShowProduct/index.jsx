import { useCallback, useEffect, useState } from 'react'
import { SlideProduct } from '../Slide'
const ShowProduct = ({ imageProduct }) => {
  const [image, setImage] = useState(imageProduct[0])
  useEffect(() => {
    setImage(imageProduct[0])
  }, [imageProduct])
  const handleSelectImage = useCallback((image) => {
    setImage(image)
  }, [])
  // Kiểm tra nếu đường link là video
  const isVideo = (url) => {
    return (
      url.match(
        /\.(mp4|webm|ogg|mov|avi|flv|mkv|wmv|m4v|3gp|mpeg|mpg|vob|f4v|ts|m2ts)$/i
      ) != null
    )
  }

  return (
    <div className="box-img sticky top-28" style={{ height: '69.5rem' }}>
      {isVideo(image) ? (
        <div className="flex items-center bg-[#000] rounded-lg mb-6">
          <video
            style={{
              height: '58.8rem',
            }}
            className="video-stream html5-main-video"
            controls
            autoPlay
            src={image}
          ></video>
        </div>
      ) : (
        <div
          className="product-image rounded-lg p-8 mb-6"
          style={{
            width: '58.8rem',
            height: '58.8rem',
            backgroundColor: '#f5f5f7',
          }}
        >
          <img src={image} alt="" className="image_show" />
        </div>
      )}
      <div className="slider" style={{ width: '58.8rem' }}>
        <SlideProduct onSelectImage={handleSelectImage} images={imageProduct} />
      </div>
    </div>
  )
}

export default ShowProduct
