import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex absolute top-0 left-0 w-full justify-between items-center md:px-36 md:py-5 sm:px-16 sm:py-4 px-8 py-2 z-30">
          <img src={Logo} alt="logo" className="h-20 w-40" />
          <div className="flex items-center space-x-10">
            <Link to="/scheduler">
            
            <button
              className="font-normal focus:outline-none text-primary text-xl text-[#2563EB] hover:text-black transition-colors duration-300"
              >
              Try Out
            </button>
              </Link>
          </div>
        </div>
      );
}

export default Navbar