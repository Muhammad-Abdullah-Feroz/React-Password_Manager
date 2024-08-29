import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import 'react-toastify/dist/ReactToastify.css'
import Logo from './Logo'


const Manager = () => {

    const [form, setForm] = useState({ site: "", userName: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const ref = useRef()
    const pRef = useRef()

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


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
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const savePassword = () => {
        console.log(form)
        setForm({ site: "", userName: "", password: "" })
        setPasswordArray([...passwordArray, {...form , id:uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form , id:uuidv4() }]))
        console.log([...passwordArray, {...form , id:uuidv4() }])
    }

    const copyText = (text) => {
        console.log(text)
        navigator.clipboard.writeText(text)
        toast.success('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const handleDelete = (id) =>{
        if (confirm("Deleting Password")){
            console.log("Deleting password with id ", id );
            setPasswordArray(passwordArray.filter(item=>item.id !== id))
            localStorage.setItem("passwords" , JSON.stringify(passwordArray.filter(item=>item.id !== id)))
        }
    }
    
    const handleEdit = (id) =>{
        console.log("Editing password with id ", id );
        setForm(passwordArray.filter(item=>item.id === id)[0])
        setPasswordArray(passwordArray.filter(item=>item.id !== id))

    }




    return (
        <>
            {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(100%_90%_at_50%_0%,rgba(0,135,45,0.32)_0,rgba(0,135,45,0.04)_50%,rgba(0,135,45,0.03)_100%)]"></div> */}

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <div className="md:mycontainer flex flex-col p4">
                <h1 className='text-center'><Logo color="black" size="xl" /></h1>
                <p className='text-green-800 text-xl text-center'>Your own Password Manager</p>
                <input onChange={handleChange} value={form.site} className='rounded-full border-green-500 w-full border px-4 py-1 m-2' type="text" name='site' id='' placeholder='Enter Website URL' />
                <div className="flex flex-col md:flex-row">
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
            <div className='passwords'>
                <table className="table-auto container m-auto my-5 bg-green-100 w-full overflow-hidden rounded-lg">
                    <thead className='bg-green-900 text-white'>
                        <tr>
                            <th className='py-2'>Website</th>
                            <th className='py-2'>Username</th>
                            <th className='py-2'>Password</th>
                            <th className='py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passwordArray.map((item) => {
                            return (
                                <tr className='border-white border'>
                                    <td className='p-2 text-center min-w-32'>
                                        <div className="flex justify-center">
                                            <a target='_blank' href={item.site}>{item.site}</a>
                                            <span className='mx-2 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>
                                    <td className='p-2 text-center w-48'>
                                        <div className="flex justify-center">
                                            {item.userName}
                                            <span className='mx-2 cursor-pointer' onClick={() => { copyText(item.userName) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>
                                    <td className='p-2 text-center w-48'>
                                        <div className="flex justify-center">
                                            {item.password}
                                            <span className='mx-2 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>
                                    <td className='p-2 text-center w-48'>
                                        <div className="flex justify-center">
                                            <span className='mx-2 cursor-pointer' onClick={() => { handleEdit(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                            <span className='mx-2 cursor-pointer' onClick={() => { handleDelete(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Manager
