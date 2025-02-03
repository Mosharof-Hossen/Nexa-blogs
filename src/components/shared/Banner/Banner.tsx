import React from 'react';
import style from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={style.banner_container}>
            <div className='  flex h-full justify-center items-center'>
                <div className='w-[60%] h-[60%] rounded-xl px-16 py-20 text-center bg-white '>
                    <p className='w-40 rounded-full mx-auto p-2 my-5 bg-teal-100 text-teal-600 text-center'>1st January 2025</p>
                    <h1 className='text-4xl'>The Rise of Quantum Computing</h1>
                    <p className='text-gray-400 mt-3 w-3/4 mx-auto'>
                        <i>
                            Dive into the fascinating world of quantum computing, where
                            unlocking unprecedented computational power.
                        </i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;