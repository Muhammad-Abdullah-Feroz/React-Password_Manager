import React from 'react'

const Logo = (params) => {
    let size = "3xl"
    return (
        <>
            <div className='text-3xl'>
                <div className={`font-bold text-${size} text-${params.color}`}>
                    <span className='text-green-600 font-extrabold'>&lt;</span><span>Pass</span><span className='text-green-600 font-extrabold'>OP/&gt;</span>
                </div>
            </div>
        </>
    )
}

export default Logo
