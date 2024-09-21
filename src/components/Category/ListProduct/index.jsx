import ItemProduct from '../../ItemProduct'

const ListProduct = ({ data }) => {
  console.log(data)

  return (
    <div className="grid grid-cols-4 gap-7 my-5">
      {data && data.map((data) => <ItemProduct data={data} key={data.id} />)}
    </div>
  )
}

export default ListProduct
