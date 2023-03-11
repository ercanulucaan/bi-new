import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../api/index"
import Questions from "../components/Service/Questions"

const Service = () => {

  const { id } = useParams()

  const [data, setData] = useState([])

  const [activeStep, setActiveStep] = useState(0)

  const getData = () => {
    api.getServiceDetails(id).then((response) => {
      console.log(response.result)
      setData(response.result)
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSubmit = () => {}

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      <div className="animate__animated animate__zoomIn">
        <div className="flex flex-col gap-4 justify-center items-center h-64 text-layer-dark-900 dark:text-layer-light-50 select-none text-center transition-all duration-500">
          <span className="text-2xl sm:text-5xl font-semibold ">
            {data?.name}
          </span>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 md:gap-20">
          <div className="text-center">
            <form>
              {data && <Questions values={data} activeStep={activeStep} />}
              <button
                className="bg-blue-400 text-blue-800 w-40 rounded-md p-2"
                type="submit">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service
