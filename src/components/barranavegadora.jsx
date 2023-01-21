import { Link } from 'react-router-dom'
import './Navstyle.css'

export const Navbar = () =>{
    return(
        <nav className='flex justify-between content-center items-center p-4 bg-black'>
            <h1 className='p-3 text-3xl text-black font-semibold'>MATHIAS</h1>
            <ul className='flex gap-10 pr-8 list-none'>
                <li><Link to="" className='hover:text-stone-500 '>Principal</Link></li>
                <li><Link to="/home" className='hover:text-stone-500'>SADAS</Link></li>
                <li><Link to="/about" className='hover:text-stone-500'>About</Link></li>
            </ul>
        </nav>
        )
    }