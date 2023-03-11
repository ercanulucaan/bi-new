import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toast'
import api from "../../api"

const Register = () => {

  const navigate = useNavigate()

  const [formData, setformData] = useState({
    account_type: '',
    full_name: '',
    email: '',
    password: '',
    password_repeat: '',
    phone: ''
  })

  const [loading, setLoading] = useState(false)

  const { 
    account_type,
    full_name,
    email,
    password,
    password_repeat,
    phone
  } = formData

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      account_type,
      full_name,
      email,
      password,
      password_repeat,
      phone
    }
    sendData(userData)
  }

  const sendData = async (userData) => {
    setLoading(true)
    api.register(userData).then((response) => {
      setLoading(false)
      toast.success(response.message)
      navigate('/clients/login')
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
              Hesap Oluştur
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <div>
                <ul className="grid w-full gap-4 mb-4 md:grid-cols-2">
                  <li>
                    <input type="radio" id="account_type_1" name="account_type" value="1" onChange={onChange} className="hidden peer" />
                    <label htmlFor="account_type_1" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Hizmet Alan</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="account_type_2" name="account_type" value="2" onChange={onChange} className="hidden peer" />
                    <label htmlFor="account_type_2" className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Hizmet Veren</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ad Soyad"
                  onChange={onChange}
                  value={full_name}
                />
              </div>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="kullanici@eposta.com"
                  onChange={onChange}
                  value={email}
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
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={onChange}
                  value={password}
                />
              </div>
              <div>
                <label
                  htmlFor="password_repeat"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Şifre Tekrar
                </label>
                <input
                  type="password"
                  name="password_repeat"
                  id="password_repeat"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={onChange}
                  value={password_repeat}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="5554443322"
                  onChange={onChange}
                  value={phone}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-lime-600 text-lime-300 h-10 rounded-md">
                {loading ? "Bekleyin..." : "Hesap Oluştur"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Bir hesabınız var ise,&nbsp;
                <Link
                  to="/clients/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Giriş yap
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
export default Register;
