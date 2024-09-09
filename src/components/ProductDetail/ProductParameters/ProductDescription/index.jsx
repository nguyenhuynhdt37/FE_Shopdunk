const ProductDescription = ({ value }) => {
  return (
    <div className="product-description my-3">
      <img src={value} alt="" className="w-full" />
    </div>
  )
}

export default ProductDescription
