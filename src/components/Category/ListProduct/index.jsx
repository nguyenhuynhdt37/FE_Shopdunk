import ItemProduct from '../../ItemProduct'

const ListProduct = ({ data }) => {
  console.log('data list Pro duct', data)

  return (
    <div className="grid grid-cols-4 gap-7 my-5">
      {data &&
        data[0].variants.length > 0 &&
        data[0]?.variants[0]?.memoryOptions?.length > 0 &&
        data.map((data) => <ItemProduct data={data} key={data.id} />)}
    </div>
  )
}

export default ListProduct
