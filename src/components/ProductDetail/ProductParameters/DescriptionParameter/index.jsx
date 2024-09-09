const DescriptionParameter = ({ data }) => {
  console.log(data)

  return (
    <div className="row-table text-center px-20 mb-40">
      <table className="w-full">
        <tbody>
          {Object.entries(data).map(([key, specs], index) => (
            <tr
              key={key}
              className={`${
                index % 2 === 0 && ' bg-zinc-100'
              } text-left  rounded-xl px-6 py-4.5  w-full grid grid-cols-2 gap-0 items-center`}
            >
              <td className="font-bold text-zinc-700">{key}</td>
              <td>
                {(typeof specs === 'object' &&
                  !Array.isArray(specs) &&
                  Object.entries(specs).map(([specName, specValue], index) => (
                    <div key={index} className=" leading-10">
                      <div className="font-bold">{specName}:</div>
                      <div>{specValue}</div>
                    </div>
                  ))) ||
                  (Array.isArray(specs) &&
                    specs.map((valuearr, index) => {
                      valuearr =
                        typeof valuearr === 'string'
                          ? specs.length - 1 !== index
                            ? valuearr + ', '
                            : valuearr
                          : valuearr
                      return <span key={index}>{valuearr}</span>
                    })) || <div>{specs}</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DescriptionParameter
