'use client'


import { Logo } from "@/public/assets"
import { navbarLinks } from "./data"
import Image from "next/image"
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { IoClose } from "react-icons/io5";



const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <>
            <nav className="hidden md:flex items-center justify-between p-5 z-50">
                <div>
                    <Image src={Logo} className="ml-5 w-full h-[39px] cursor-pointer" alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-10  cursor-pointer pr-5">
                        {navbarLinks.map((nav) => (
                            <div className="flex" key={nav.id}>
                                <h3 className="text-white font-satoshibold md:text-xl font-bold">{nav.name}</h3>
                                {nav.coming && <span className="ml-2 relative -top-2 flex font-semibold items-center text-xs uppercase bg-black rounded-2xl p-1.5 text-[#AB23FF]">Soon</span>
                                }
                            </div>
                        ))}
                        <div>
                            <button className="text-center text-white font-satoshibold font-bold border border-white px-7 py-2 rounded-md cursor-pointer">Connect</button>
                        </div>
                    </div>

                </div>
            </nav>


            {/* Mobile screens */}
            <nav className="md:hidden z-50 flex justify-between items-center p-4">
                <div>
                    <Image src={Logo}
                        className="w-full h-7 object-contain cursor-pointer" alt=""
                    />
                </div>

                <div
                >
                    <MdMenu className="text-white h-7 w-10"
                        onClick={() => setToggle(!toggle)}
                    />
                </div>

                {
                    toggle &&
                    <div className="z-30 bg-black h-[100vh] absolute top-0 right-0 w-1/2">
                        <div className="flex flex-col gap-6 p-6 justify-center items-center">
                            <div className="flex gap-3 items-center">
                                <button className="text-white border border-white text-center text-sm px-4 py-1 rounded-md">Connect</button>
                                <IoClose
                                    onClick={() => setToggle(false)}
                                    className="h-7 w-7 p-1 bg-blue-500 text-white rounded-sm" />
                            </div>

                            <div className="flex flex-col gap-1 items-center">
                                {
                                    navbarLinks.map((link) => (
                                        <div
                                            key={link.id}
                                            className="flex p-5 w-full border-t-2 border-gray-900">
                                            <span className="text-white font-satoshibold text-xs">{link.name}</span>
                                            {link.coming && <span className="ml-2 relative -top-2 flex font-semibold items-center text-xs uppercase bg-black rounded-2xl p-1.5 text-[#AB23FF]">Soon</span>
                                            }
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                }
            </nav>
        </>
    )
}

export default Navbar


