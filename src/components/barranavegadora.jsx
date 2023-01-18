import { Link } from 'react-router-dom'
import './Navstyle.css'

export const Navbar = () =>{
    return(
        <nav className='bg-[#242424] flex justify-between content-center items-center p-4'>
            <h1 className='p-3 text-3xl text-white font-semibold'>MATHIAS</h1>
            <ul className='flex gap-10 pr-8'>
                <li><Link to="">Principal</Link></li>
                <li><Link to="/home">SADAS</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        )
    }