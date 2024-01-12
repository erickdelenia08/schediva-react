import React, { useEffect, useState } from 'react'
import schdv from '../../src/images/schediva_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaHandMiddleFinger } from "react-icons/fa6";

const Login = () => {
    const [text, setText] = useState('');
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [hidePassword, setHidePassoword] = useState(true)
    const fullText = 'Managing your schedule';
    const typingSpeed = 100;
    const delayBetweenIterations = 1000;
    const navigate = useNavigate();

    useEffect(() => {
        let currentIndex = 0;

        const typeText = () => {
            setText(fullText.substring(0, currentIndex));
            currentIndex += 1;

            if (currentIndex <= fullText.length) {
                setTimeout(typeText, typingSpeed);
            } else {
                setTimeout(() => {
                    currentIndex = 0;
                    typeText();
                }, delayBetweenIterations);
            }
        };

        typeText();

        return () => {
            clearTimeout();
        };
    }, [fullText, typingSpeed, delayBetweenIterations]);

    const setVisibilityPassword = () => {
        setHidePassoword(!hidePassword)
    }

    const submitForm = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 4000);
        })

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoadingSubmit(true)
        const condition = await submitForm();
        if (condition) {
            navigate("/");
        }
        setLoadingSubmit(false)

    }

    return (
        <div className='flex flex-col lg:flex-row h-screen w-screen'>
            <div className="lg:flex flex-col lg:w-2/6 hidden items-center justify-center pl-10 py-10 bg-white ">
                <div className="flex flex-col w-full h-full bg-slate-800 rounded-md items-center justify-center p-10 relative shadow-md shadow-slate-700">
                    <div className="flex flex-col items-start">
                        <h2 className='text-white font-extrabold text-4xl uppercase'>Schediva</h2>
                        <p className='text-justify mt-3 text-sm'>Schediva merupakan aplikasi yang digunakan untuk melakukan managemen jadwal baik itu jadwal perkuliahan maupun jadwal dari agenda lain. Agenda lain yang dimaksud seperti organisasi, pengguna dapat membuat grup dengan berisikan pengguna lain dalam satu kegiatan yang sama. Dalam grup tersebut pemilik grup dapat menjadwalkan agenda agenda dari kagiatan terkait. Fitur yang ditawarkan yaitu pengguna dapat melibatkan jadwal kuliah sebagai pertimbangan pengambilan keputusan dalam pembuatan agenda, sistem akan secara otomatis memberikan keterangan terkait jadwal perkuliahan per pengguna.</p>
                    </div>
                    <p className='absolute bottom-0 pb-2 text-[10px]'>copyright@2024</p>
                </div>
            </div>
            <div className="bg-white flex flex-col lg:w-4/6 h-full items-center justify-center gap-x-10">
                <form onSubmit={handleSubmit} className='flex flex-col md:min-w-[450px] p-8 items-center'>
                    {/* <img src={schdv} className='w-16' alt="" /> */}
                    <span className='text-8xl text-slate-700'><FaHandMiddleFinger /></span>
                    <h2 className='text-slate-700 font-bold text-4xl'>Let's Get Started</h2>
                    <h2 className='text-slate-500 text-lg text-justify'>please complete the form below brodie!</h2>
                    <div className='flex flex-col w-full pt-4'>
                        <label className='text-slate-700 font-bold' htmlFor="username">Username</label>
                        <input placeholder='Your Email Adress' className='p-3 rounded-md border-slate-400 focus:border-slate-600 focus:ring-slate-600 box-border text-slate-700' type="text" name="username" id="username" />
                    </div>
                    <div className="flex flex-col w-full mt-2">
                        <label className='text-slate-600 font-bold' htmlFor="password">Password</label>
                        <div className="flex items-center rounded-md border border-slate-400 focus-within:border-slate-800 focus-within:border-2 focus-within:box-border">
                            <input placeholder='Your Password' className='p-3 rounded-md ssss w-full border-transparent focus:border-transparent focus:ring-0 text-slate-700' type={`${hidePassword ? 'password' : 'text'}`} name="password" id="password" />
                            <div onClick={setVisibilityPassword} className='cursor-pointer pr-2'>
                                {hidePassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                    </div>
                    <div className='justify-between text-sm text-slate-700 flex w-full mt-2'>
                        <Link to='#'><u>Lupa password?</u></Link>
                    </div>
                    <button type='submit' className='hover:bg-slate-950 w-full bg-slate-800 text-white rounded-md p-3 mt-2' disabled={loadingSubmit}>
                        {!loadingSubmit ? 'Login' :
                            <div
                                className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                            </div>
                        }
                    </button>
                </form>
            </div >
        </div >
    )
}

export default Login