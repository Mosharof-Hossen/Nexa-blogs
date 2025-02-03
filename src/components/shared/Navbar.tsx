"use client"


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import brandLogo from "../../assets/logo.png"
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathName = usePathname()
    const navLink = [
        { href: "/", label: "Home" },
        { href: "/blogs", label: "Blogs" },
        { href: "/about", label: "About" },
        { href: "/support", label: "Support" },
    ]
    return (
        <nav className='flex items-center justify-between p-4 border-b container mx-auto'>
            <div className='flex items-center space-y-2'>
                <Link href={"/"} className='flex items-center gap-1'>
                    <Image src={brandLogo} width={30} height={30} alt='brand Logo'></Image>
                    <span className='text-xl font-bold'>NexaBlog</span>
                </Link>
            </div>
            <div className='flex items-center space-x-6'>
                {
                    navLink.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`${pathName === href?
                                "text-teal-600 font-bold"
                                :
                                "text-gray-800 hover:text-teal-700"

                            }`}
                        >
                        {label}
                        </Link>
                    ))
                }
            </div>
            <div>
                <Link href={'/blogs/create'}
                    className=' px-4 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-500'
                >
                    Post Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;