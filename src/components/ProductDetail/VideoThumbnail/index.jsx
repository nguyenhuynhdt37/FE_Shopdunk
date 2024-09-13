import React, { useRef, useState, useEffect } from 'react'

const VideoToImage = () => {
  const [imageSrc, setImageSrc] = useState(null)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const captureFrame = () => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    if (video && canvas && ctx) {
      // Di chuyển video đến giây cuối cùng
      video.currentTime = video.duration

      // Vẽ hình ảnh từ video lên canvas sau khi video di chuyển đến thời gian yêu cầu
      video.addEventListener(
        'seeked',
        () => {
          // Đặt kích thước canvas dựa trên kích thước video
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight

          // Vẽ video lên canvas
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

          // Chuyển đổi canvas thành URL dữ liệu
          try {
            const thumbnailData = canvas.toDataURL('image/png')
            setImageSrc(thumbnailData)
          } catch (e) {
            console.error('Error capturing frame: ', e)
          }
        },
        { once: true }
      ) // Chỉ lắng nghe sự kiện này một lần
    }
  }

  useEffect(() => {
    const video = videoRef.current

    // Lắng nghe sự kiện khi metadata của video đã được tải
    const handleLoadedMetadata = () => {
      if (video) {
        // Sau khi metadata được tải, gọi hàm captureFrame
        captureFrame()
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [])

  return (
    <div>
      <video
        ref={videoRef}
        width="640"
        height="360"
        controls
        crossOrigin="anonymous" // Thêm thuộc tính này
        src="your-video-url.mp4" // Thay thế bằng URL video của bạn
      />
      <canvas
        ref={canvasRef}
        style={{ display: 'none' }} // Ẩn canvas
      />
      {imageSrc && (
        <div>
          <h3>Image from the last second:</h3>
          <img src={imageSrc} alt="Captured frame" />
        </div>
      )}
    </div>
  )
}

export default VideoToImage
