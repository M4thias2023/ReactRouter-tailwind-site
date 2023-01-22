import { Link } from 'react-router-dom'
import './Navstyle.css'

export const Navbar = () =>{
    return(
        <nav className='flex justify-between content-center items-center p-4 bg-[#567189] pr-40 pl-40'>
            <h1 className='p-3 text-3xl text-[#FAD6A5] font-semibold hover:cursor-default'>MATHIAS</h1>
            <ul className='flex gap-20 list-none'>
                <li><Link to="" className='hover:text-[#FAD6A5] '>Principal</Link></li>
                <li><Link to="/home" className='hover:text-[#FAD6A5]'>SADAS</Link></li>
                <li><Link to="/about" className='hover:text-[#FAD6A5]'>Sobre Nosotros</Link></li>
            </ul>
        </nav>
        )
    }