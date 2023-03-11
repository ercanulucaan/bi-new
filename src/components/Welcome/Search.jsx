import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../api"
import axios from "axios"

const Search = () => {
  const [value, setValue] = useState("")
  const [services, setServices] = useState(null)
  const [items, setItems] = useState([])

  const getDetails = async () => {
    try {
      api.getServices().then((response) => {
        setServices(response.result)
      });
    } catch (error) {
      console.log(error)
    }
  }

  const handleResult = (e) => {
    const textInput = e.target.value
    let tempData = []
    setValue(textInput)
    services.map((obj) => {
      if (obj.name.toLowerCase().includes(textInput.toLowerCase())) {
        tempData.push(obj)
      }
    })
    setItems(tempData.slice(0, 5))
  }


  useEffect(() => {
    getDetails()
  }, [])


  return (
    <>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={handleResult}
        placeholder="Arayın..."
      />
      {items.length > 0 && value.length > 0 && (
        <ul className="absolute w-full bg-white shadow-lg focus:outline-none">
        {items?.map((item) => {
          return (
            <li
              className="p-3 animate__animated animate__fadeInUp animate__faster"
              key={item.id}>
              <Link to={`/service/${item?.id}`}>{item?.name}</Link>
            </li>
          );
        })}
      </ul>
      )}
    </>
  );
};

export default Search;
