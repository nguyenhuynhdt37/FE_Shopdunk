const SliderImage = ({ image, ...prev }) => {
  const [currentSlide, setCurrentSlide] = useState(images[0].link);

  console.log(prev);
  return <>{/* <img src={image.url} className="w-100" alt="" /> */}</>;
};

export default SliderImage;
