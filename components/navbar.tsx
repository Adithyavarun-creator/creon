'use client'


import { Logo } from "@/public/assets"
import { navbarLinks } from "./data"
import Image from "next/image"
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";



const Navbar = () => {

    const [mobile, setMobile] = useState(false)

    return (
        <>
            <nav className="hidden md:absolute top-4 right-0 left-0 bg-opacity-0 z-[4] md:flex items-center justify-between p-5">
                <div>
                    <Image src={Logo} className="ml-5 w-full h-[39px] cursor-pointer" alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-10  cursor-pointer pr-5">
                        {navbarLinks.map((nav) => (
                            <div className="flex" key={nav.id}>
                                <h3 className="text-white md:text-xl font-semibold cursor-pointer">{nav.name}</h3>
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
            <nav className="md:hidden relative z-[1000] flex justify-between items-center py-4 px-8">
                <div>
                    <Image src={Logo}
                        className="w-full h-7 object-contain cursor-pointer" alt=""

                    />
                </div>

                <div>
                    <IoMenuOutline onClick={() => setMobile(!mobile)}
                        className="text-white h-7 w-10 z-50"
                    />
                </div>


                <div className="absolute top-0 right-0 h-[450px]">
                    <div className='bg-gradient-to-t md:from-[#000000] md:to-[#c274f3]'>
                        <video src="/assets/videos/main-background-video.mp4" autoPlay loop muted className='mix-blend-overlay' />
                    </div>
                    <div className='absolute top-20 flex flex-col gap-4 p-10'>
                        <div>
                            <h2 className='text-white font-monument text-xl md:text-4xl lg:text-6xl font-semibold uppercase'>the world's first <br />
                                platform for tokenizing <br /> ai blockchain projects</h2>
                        </div>
                        <div className="">
                            <div className="w-fit p-0.5 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]">
                                <div className="p-2 h-full w-full bg-black">
                                    <span className='text-xs md:text-xl font-satoshibold font-bold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>Hold the Creon Pass NFT and earn passive income from AI Tools</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                {
                    mobile &&
                    <div className="z-50 bg-black h-[200vh] absolute top-0 right-0 w-1/2">
                        <div className="flex flex-col gap-6 p-6 justify-center items-center">
                            <div className="flex gap-3 items-center">
                                <button className="text-white border border-white text-center text-sm px-4 py-1 rounded-md">Connect</button>
                                <IoClose
                                    onClick={() => setMobile(false)}
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


/*

<nav className="md:hidden flex justify-between items-center py-4 px-8">
                <div>
                    <Image src={Logo}
                        className="w-full h-7 object-contain cursor-pointer" alt=""

                    />
                </div>

                <div>
                    <IoMenuOutline
                        onClick={() => setMobile(true)}
                        className="text-white h-7 w-10 z-50"

                    />
                </div>

                {
                    mobile &&
                    <div className="z-[100] bg-black h-[200vh] absolute top-0 right-0 w-1/2">
                        <div className="flex flex-col gap-6 p-6 justify-center items-center">
                            <div className="flex gap-3 items-center">
                                <button className="text-white border border-white text-center text-sm px-4 py-1 rounded-md">Connect</button>
                                <IoClose
                                    onClick={() => setMobile(false)}
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
*/


