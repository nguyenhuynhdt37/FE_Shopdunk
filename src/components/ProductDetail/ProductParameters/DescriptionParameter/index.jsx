import axios from "axios";
import { useEffect, useState } from "react";
const DescriptionParameter = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/jj.json");
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="row-table text-center mx-20">
      <thead></thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className="text-left">{key}</td>
            {/* <td>{value}</td> */}
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default DescriptionParameter;
