import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toast'
import api from "../../api"

const Login = () =>
{

  const navigate = useNavigate()

  const [formData, setformData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const { email, password } = formData

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }
    sendData(userData)
  }

  const sendData = async (userData) => {
    setLoading(true)
    api.login(userData).then((response) => {
      setLoading(false)
      toast.success(response.message)
      localStorage.setItem('token', response.result)
      navigate('/')
    }).catch((error) => {
      setLoading(false)
      console.log(error)
      toast.error(error.message)
    });
  }

  return (
    <section className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Giriş Yap
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  E-posta adresi
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={onChange}
                  value={email}
                  placeholder="kullanici@eposta.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Şifre
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={onChange}
                  value={password}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to="/reset-password"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Şifremi unuttum?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-lime-600 text-lime-200 h-10 rounded-md">
                {loading ? "Bekleyin..." : "Giriş Yap"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Bir hesabın yok mu?&nbsp;
                <Link
                  to="/clients/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Hesap oluştur
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer delay={3000} position={'bottom-right'} />
    </section>
  );
}
export default Login;
