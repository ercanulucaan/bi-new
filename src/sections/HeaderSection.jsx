import { useContext } from "react"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { BiLogIn } from "react-icons/bi"
import { SidebarContext } from "../contexts/SidebarContext"

function HeaderSection()
{

  const { isOpen, setIsOpen } = useContext(SidebarContext);


    const urls = [
      { url: "/", name: "Anasayfa" },
      { url: "/contact", name: "İletişim" },
    ];

    return(
        <header className="flex items-center justify-between h-16 px-6 lg:px-48 xl:px-20 2xl:px-96 border-b border-layer-light-100 dark:border-layer-dark-800 dark:text-layer-light-50 shadow-sm transition-all duration-500 animate__animated animate__fadeInDown">
            <Link to="/">
              <h1 className="text-lg font-semibold">Bi-New</h1>
            </Link>
            <ul className="hidden sm:flex lg:flex xl:flex 2xl:flex justify-between gap-4">
              {urls.map((url) => (
                <li key={url.name}>
                  <Link
                    className="text-xm text-layer-dark-900 dark:text-layer-light-50 hover:underline hover:underline-offset-4 transition-all duration-500"
                    to={url.url}
                  >
                    {url.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-8">
                <Link
                className="pt-px"
                to="/login"
                >
                  <BiLogIn 
                    size={24}
                    />
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                  <RxHamburgerMenu
                    size={28}
                  />
                </button>
            </div>
        </header>
    )
}

export default HeaderSection;