import React, { useEffect, useState } from 'react'
import schdv from '../../src/images/schediva.png'
import { Link, useNavigate } from 'react-router-dom'
import pattern from '../../src/images/moroccan-flower-dark.webp'

const Login = () => {
    const [text, setText] = useState('');
    const [loadingSubmit, setLoadingSubmit] = useState(false);
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
        <div className='flex flex-col md:flex-row h-screen w-screen'>
            <div className="flex flex-col w-1/2 h-full items-center justify-center">
                <img src={schdv} className='w-64' alt="" />
                <h3 className='text-xl'>{text}</h3>
            </div>
            <div className="bg-white flex w-1/2 h-full items-center justify-center">
                <form onSubmit={handleSubmit} className='px-10 py-20 rounded-md shadow-xl shadow-slate-300 flex flex-col gap-y-2'>
                    <div className='flex flex-col'>
                        <label className='text-slate-600' htmlFor="username">username</label>
                        <input className='rounded-md border-slate-400 focus:border-slate-800' type="text" name="username" id="username" />
                    </div>
                    <div className="flex flex-col">
                        <label className='text-slate-600' htmlFor="password">password</label>
                        <input className='rounded-md border-slate-400 focus:border-slate-800' type="password" name="password" id="password" />
                    </div>
                    <div className='justify-between flex'>
                        <p><input className='focus:ring-0' type="checkbox" name="remember" id="remember" /> Ingat saya</p>
                        <Link to='#'>Lupa password?</Link>
                    </div>
                    <button type='submit' className='w-full bg-slate-800 text-white rounded-md p-2 mt-2' disabled={loadingSubmit}>
                        {!loadingSubmit ? 'login' :
                            <div
                                className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                            </div>
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login