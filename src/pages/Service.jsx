import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../api/index"
import Questions from "../components/Service/Questions"

function Service()
{

  const params = useParams()

  const [data, setData] = useState([])

  const getData = () => {
    api.serviceDetails(params.id).then(response => {
      console.log(response.result)
      setData(response.result)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="animate__animated animate__zoomIn">
      <div className="flex flex-col gap-4 justify-center items-center h-64 text-layer-dark-900 dark:text-layer-light-50 select-none text-center transition-all duration-500">
      <span className="text-2xl sm:text-5xl font-semibold ">{data?.name}</span>
    </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 md:gap-20">
        <div className="text-center">
          <form>
            {data && <Questions values={data} />}
            <button className="bg-blue-400 text-blue-800 w-40 rounded-md p-2" type="submit">Gönder</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Service