const ImageSlide = ({ image, index }) => {
  console.log(image);
  return (
    <div key={index} className=" px-3 cursor-pointer">
      <img
        src={image}
        alt={`Slide ${index}`}
        className="img-fluid w-100 object-fit-cover"
      />
    </div>
  );
};

export default ImageSlide;
