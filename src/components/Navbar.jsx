import React from 'react'
import Logo from './Logo'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className='md:mycontainer flex justify-between items-center px-4 py-5 h-14'>
                <div className="font-bold flex px-4 logo"><Logo color='white' size="lg" /></div>
                <div className="hover:bg-green-400 flex gap-3 p-1 px-2 rounded-full  bg-green-500">
                    <a className='flex items-center gap-2 font-bold' href="#"><img src="icons/github.svg" alt="GitHub" width={30} /> GitHub</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
