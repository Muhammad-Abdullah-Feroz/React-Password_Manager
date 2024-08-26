import React from 'react'
import { useRef , useState} from 'react'
import Logo from './Logo'


const Manager = () => {
    
    const [form, setForm] = useState({site:"" , userName:"" , password:""})

    const ref = useRef() 

    const pRef = useRef()

    const changeVisibility = () => {
        if (ref.current.src.includes("icons/hide.svg")) {
            ref.current.src = "icons/show.svg"
            pRef.current.type = "text"
        } else {
            ref.current.src = "icons/hide.svg"
            pRef.current.type = "password"
        }
    }

    const handleChange = (e) => {
      setForm({...form , [e.target.name]:e.target.value})
    }

    const savePassword = () => {
      console.log(form)
    }
    
    


    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(100%_90%_at_50%_0%,rgba(0,135,45,0.32)_0,rgba(0,135,45,0.04)_50%,rgba(0,135,45,0.03)_100%)]"></div>



            <div className="mycontainer flex flex-col p4">
                <h1 className='text-center'><Logo color="black" size="xl" /></h1>
                <p className='text-green-800 text-xl text-center'>Your own Password Manager</p>
                <input onChange={handleChange} value={form.site} className='rounded-full border-green-500 w-full border px-4 py-1 m-2' type="text" name='site' id='' placeholder='Enter Website URL' />
                <div className="flex">
                    <input onChange={handleChange} value={form.userName} className='rounded-full border-green-500 border px-4 py-1 m-2 w-full' type="text" name='userName' id='' placeholder='Enter Username' />
                    <div className="relative w-2/3">
                        <input onChange={handleChange} value={form.password} className='rounded-full border-green-500 border px-4 py-1 m-2 w-full' type="password" name='password' id='' placeholder='Enter Password' ref={pRef} />
                        <div className="absolute right-1 top-3 cursor-pointer">
                            <img src="icons/hide.svg" width={25} alt="visibility" ref={ref} onClick={changeVisibility} />
                        </div>
                    </div>
                </div>
                <button className='flex justify-center items-center gap-2 px-4 bg-green-500 hover:bg-green-400 rounded-full w-max p-2 font-bold m-auto my-2'>
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="morph">
                    </lord-icon>
                    <span onClick={savePassword}> Add Password</span>
                </button>
            </div>
        </>
    )
}

export default Manager
