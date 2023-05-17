import Navbar from '../Components/Navbar'
import zigzag from '../assets/zigzag.svg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Navbar />
            <div
                id="home"
                className="h-screen z-10 flex flex-col justify-center items-center text-center bg-slate-50 sm:px-0 px-3"
            >
                <h1 className='md:text-7xl sm:text-5xl text-3xl mb-5 max-w-3xl font-bold font-montserrat'>Schedule <span className='text-[#2563EB] relative'>Meetings
                    <img src={zigzag} alt='zigzag' className='absolute bottom-[-5px] left-0' />
                </span>{" "}

                    With Ease</h1>
                <p className="max-w-2xl text-secondary-400 font-Lexend font-extralight md:text-xl sm:text-lg text-sm tracking-wider mb-5">
                    Say Goodbye to Double Bookings, Achieve Meeting Harmony. That too without compromising work life balance!
                </p>
                <Link to="/scheduler">
                <button
                    className="text-white bg-[#2563EB] hover:text-[#2563EB] hover:bg-white rounded-full font-montserrat font-normal transition duration-300 px-5 py-3 text-xl"
                >

                    Get Started
                </button>
                    </Link>
            </div>
        </>
    )
}

export default Home