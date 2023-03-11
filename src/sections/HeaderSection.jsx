import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { BiLogIn, BiUserPlus, BiUserCircle, BiLogOut } from "react-icons/bi"
import { TbLogout } from "react-icons/tb"
import { SidebarContext } from "../contexts/SidebarContext"
import { AuthContext } from "../contexts/AuthContext"

function HeaderSection() {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { token, loggedIn, setLoggedIn, selfData } = useContext(AuthContext)

  const navigate = useNavigate()

  const urls = [
    { url: "/", name: "Anasayfa" },
    { url: "/contact", name: "İletişim" },
  ];

  const handleLogout = () => {
    if(token)
    {
      setLoggedIn(false)
      localStorage.removeItem('token')
      navigate('/clients/login')
    }
  }
  

  return (
    <header className="flex items-center justify-between h-16 px-6 lg:px-48 xl:px-20 2xl:px-96 border-b border-layer-light-100 dark:border-layer-dark-800 dark:text-layer-light-50 shadow-sm transition-all duration-500 animate__animated animate__fadeInDown">
      <Link to="/">
        <h1 className="text-lg font-semibold">Bi-New</h1>
      </Link>
      <ul className="hidden sm:flex lg:flex xl:flex 2xl:flex justify-between gap-4">
        {urls.map((url) => (
          <li key={url.name}>
            <Link
              className="text-xm text-layer-dark-900 dark:text-layer-light-50 hover:underline hover:underline-offset-4 transition-all duration-500"
              to={url.url}>
              {url.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-8">
        {loggedIn ? 
        <>
        {selfData.account_type == 1 &&
        <Link className="pt-px" to="/recipients/dashboard">
          <BiUserCircle size={24} />
        </Link>}
        {selfData.account_type == 2 &&
        <Link className="pt-px" to="/employers/dashboard">
          <BiUserCircle size={24} />
        </Link>}
        <Link className="pt-px" onClick={handleLogout}>
          <TbLogout size={24} />
        </Link>
        </>
        : 
        <>
        <Link className="pt-px" to="/clients/login">
          <BiLogIn size={24} />
        </Link>
        <Link className="pt-px" to="/clients/register">
          <BiUserPlus size={24} />
        </Link>
        </>}
        
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <RxHamburgerMenu size={28} />
        </button>
      </div>
    </header>
  );
}

export default HeaderSection;
