const ImageSlide = ({ image }) => {
  return (
    <div className=" px-3 cursor-pointer">
      <img src={image} className="img-fluid w-full object-cover" />
    </div>
  );
};

export default ImageSlide;
