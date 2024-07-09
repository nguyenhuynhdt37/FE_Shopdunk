const ImageProduct = ({ image, index }) => {
  return (
    <div key={index}>
      <div className="thumb-item px-reduce-2 rounded-xl p-1 border-solid border-gray-400 border-1 ">
        <div className="rounded-xl border-solid border-1 border-gray-100 mr-4 overflow-hidden">
          <img
            src={image}
            alt={`Slide ${index}`}
            className="img-fluid w-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageProduct;
