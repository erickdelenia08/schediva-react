import React from 'react'
import img from '../../src/images/empty-page2.png'

const NoPage = () => {
    return (
        <div className='bg-white dark:bg-slate-800 flex flex-col w-screen h-screen justify-center items-center'>
            <p className='text-8xl text-slate-800 dark:text-white'>404</p>
            <p className='text-lg text-slate-800 dark:text-white'>sorry! page not found</p>
            <img src={img} className='w-1/4' alt="" />
        </div>
    )
}

export default NoPage