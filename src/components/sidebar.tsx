import { Link, useNavigate } from 'react-router-dom';
import monomaLogo from '../assets/monoma_logo.jpg';

const Sidebar = () => { 
  const navigate = useNavigate();
  const handleLogout = () => { 
    navigate('/login')
  }

  return (
    <div className="bg-gray-800 text-gray-100  w-64 px-4 pt-4">
      <div className="flex items-center justify-center">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={monomaLogo}
          alt={'Administrador'}
        />
        <h1 className="text-xl ml-2 font-bold">{'Administrador'}</h1>
      </div>
      <ul className="mt-6">
        <li className="my-px">
          <Link
            to="/"
            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-300 hover:bg-gray-700"
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-dashboard"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="13" r="2" />
                <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
                <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
              </svg>
            </span>
            <span className="ml-3">Dashboard</span>
          </Link>
        </li>
        <li className="my-px">
          <button
            onClick={handleLogout}
            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-300 hover:bg-gray-700"
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-logout"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17 16v-8a2 2 0 0 0 -2 -2h-4l1.5 4h-3.5l1.5 -4h-4a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h4l-1.5 -4h3.5l-1.5 4h4a2 2 0 0 0 2 -2z" />
              </svg>
            </span>
            <span className="ml-2">
            Logout
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar