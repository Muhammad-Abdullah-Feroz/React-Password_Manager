import React from 'react'
import Logo from './Logo'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className='md:mycontainer flex justify-between items-center px-4 py-5 h-14'>
                <div className="font-bold flex px-4 logo"><Logo color='white' size="lg" /></div>
                <ul className=" flex gap-3 px-4">
                    <li><a className='hover:font-bold' href="#">Home</a>   </li>
                    <li><a className='hover:font-bold' href="#">About</a>  </li>
                    <li><a className='hover:font-bold' href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
