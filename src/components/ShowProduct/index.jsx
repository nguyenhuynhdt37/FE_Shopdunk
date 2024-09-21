import { useCallback, useEffect, useState } from 'react'
import { SlideProduct } from '../Slide'
import { getVideoIdFromUrl } from '../../../Utils/formart'
const ShowProduct = ({ medias }) => {
  const [media, setMedia] = useState(medias[0])
  useEffect(() => {
    setMedia(medias[0])
  }, [medias])
  const handleSelectImage = useCallback((image) => {
    setMedia(image)
  }, [])
  const videoId = getVideoIdFromUrl(media && media.video && media.video.url)
  // Kiểm tra nếu đường link là video
  console.log(media)
  return (
    <div className="box-img sticky top-28" style={{ height: '69.5rem' }}>
      {media && media.image && (
        <div
          className="product-image rounded-lg p-8 mb-6"
          style={{
            width: '588',
            height: '588',
            backgroundColor: '#f5f5f7',
          }}
        >
          <img src={media.image.url} alt={media.title} className="image_show" />
        </div>
      )}
      {media && media.video && (
        <div
          className="product-image rounded-lg bg-black overflow-hidden mb-6"
          style={{
            width: '58.8rem',
            height: '58.8rem',
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
      {!media && (
        <div
          className="product-image rounded-lg p-8 mb-6 "
          style={{
            width: '588',
            height: '588',
            backgroundColor: '#f5f5f7',
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/woman-saying-no-concept-illustration_114360-19594.jpg"
            alt="product no image"
            className="image_show"
          />
        </div>
      )}
      <div className="slider" style={{ width: '58.8rem' }}>
        <SlideProduct onSelectImage={handleSelectImage} medias={medias} />
      </div>
    </div>
  )
}

export default ShowProduct
