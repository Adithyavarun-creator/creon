'use client'
import { Logo } from "@/public/assets"
import { navbarLinks } from "./data"
import Image from "next/image"
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";


const Nav = () => {


    const [mobile, setMobile] = useState<boolean>(false)


    return (
        <>
            <nav className="hidden md:absolute top-4 right-0 left-0 bg-opacity-0 z-[4] md:flex items-center justify-between p-5">
                <div>
                    <Image src={Logo} className="ml-5 w-full h-[39px] cursor-pointer" alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-10  cursor-pointer pr-5">
                        {navbarLinks.map((nav) => (
                            <div className="flex items-center" key={nav.id}>
                                <h3 className="text-white md:text-sm lg:text-xl font-semibold cursor-pointer">{nav.name}</h3>
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
            <nav className="md:hidden z-[9999] relative flex justify-between items-center py-4 px-8">
                <div>
                    <Image src={Logo}
                        className="w-full h-7 object-contain cursor-pointer" alt=""

                    />
                </div>

                <div>
                    <IoMenuOutline onClick={() => setMobile(!mobile)}
                        className="text-white h-7 w-10"
                    />
                </div>


                <div className="-z-[10] absolute top-0 right-0 left-0 flex flex-col">
                    <div className='h-[400px] bg-gradient-to-t md:from-[#000000] md:to-[#c274f3]'>
                        <video src="/assets/videos/main-background-video.mp4" autoPlay loop muted
                            className='mix-blend-overlay' />
                    </div>
                    <div className="-mt-[200px] md:mt-0 flex flex-col gap-5 px-4">
                        <h2 className='text-white font-monument text-xl md:text-4xl lg:text-6xl font-semibold uppercase'>the world's first <br />
                            platform for tokenizing <br /> ai blockchain projects</h2>

                        <div className="w-fit p-0.5 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]">
                            <div className="p-2 h-full w-full bg-black">
                                <span className='text-xs md:text-xl font-satoshibold font-bold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>Hold the Creon Pass NFT and earn passive income from AI Tools</span>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    mobile &&
                    <div className="bg-black flex flex-col justify-between h-screen border-l-4 border-white absolute top-0 right-0 w-1/2">

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




                        <div className="flex justify-center p-6 items-center gap-2">
                            <FaTelegramPlane className="transition ease-in-out hover:bg-white hover:text-black duration-300 delay-100 flex items-center p-2 w-8 h-8 text-white rounded-full border border-white cursor-pointer" />
                            <FaDiscord className="transition ease-in-out hover:bg-white hover:text-black duration-300 delay-100 flex items-center p-2 w-8 h-8 text-white rounded-full border border-white cursor-pointer" />
                            <FaTwitter className="transition ease-in-out hover:bg-white hover:text-black duration-300 delay-100 flex items-center p-2 w-8 h-8 text-white rounded-full border border-white cursor-pointer" />
                        </div>

                    </div>
                }
            </nav >
        </>
    )
}

export default Nav