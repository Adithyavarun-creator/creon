'use client'

import Image from 'next/image'
import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Icon1, Icon2, Icon3, Icon4 } from '@/public/assets';


const Vision = () => {


    const [open, setOpen] = useState<boolean>(true)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-2'>
            <div className='flex flex-col lg:col-span-1 gap-10'>
                <h2 className='font-monument text-white text-xl md:text-2xl lg:text-4xl uppercase'>our vison is to <br /> support the innovation <br /> of ai blockchain <br /> projects&nbsp;
                    <span className='bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>while <br /> prioritizing communities <br /> and democratizing <br /> profits</span></h2>
                <div className='flex justify-end'>
                    <Image
                        src="/assets/creonimage.png"
                        alt='creon'
                        height={836}
                        width={502}
                        className='object-contain w-full'
                    />
                </div>
            </div>


            <div className='p-2 flex flex-col lg:col-span-1 gap-8'>
                <div className="flex flex-col md:flex-row mt-3 md:row gap-2 md:gap-4">
                    <div className='flex justify-center md:block'>
                        <Image
                            src={Icon1}
                            className='object-cover w-12 h-12 md:w-14 md:h-14'
                            alt=''
                        />
                    </div>
                    <div className='flex flex-col p-4 gap-2 w-full md:w-[300px]'>
                        <div className='flex justify-between'>
                            <div>
                                <h4 className='text-white text-xs md:text-sm font-semibold font-satoshibold'>
                                    Profitability and Growth
                                </h4>
                            </div>
                            <div>
                                <IoIosArrowUp
                                    onClick={() => setOpen(!open)}
                                    className={`h-4 w-4 text-white ${open ? 'rotate-180' : ''} hover:bg-gray-600 rounded-full cursor-pointer`}
                                />
                            </div>

                        </div>
                        {open && <div className="">
                            <article className='text-white text-xs md:text-sm'>
                                At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
                            </article>
                        </div>}

                    </div>
                </div>


                <div className="flex flex-col md:flex-row mt-3 md:row gap-2 md:gap-4">
                    <div className='flex justify-center md:block'>
                        <Image
                            src={Icon2}
                            className='object-cover w-12 h-12 md:w-14 md:h-14'
                            alt=''
                        />
                    </div>
                    <div className='flex flex-col p-4  gap-2 w-full md:w-[300px] '>
                        <div className='flex justify-between'>
                            <div>
                                <h4 className='text-white text-xs md:text-sm font-semibold font-satoshibold'>
                                    Transparent & Fair Decentralized Earnings
                                </h4>
                            </div>
                            <div>
                                <IoIosArrowDown
                                    className='h-4 w-4 text-white rotate-180'

                                />
                            </div>

                        </div>


                    </div>
                </div>



                <div className="flex flex-col md:flex-row mt-3 md:row gap-2 md:gap-4">
                    <div className='flex justify-center md:block'>
                        <Image
                            src={Icon1}
                            className='object-cover w-12 h-12 md:w-14 md:h-14'
                            alt=''
                        />
                    </div>
                    <div className='flex flex-col p-4  gap-2 w-full md:w-[300px] '>
                        <div className='flex justify-between'>
                            <div>
                                <h4 className='text-white text-xs md:text-sm font-semibold font-satoshibold'>
                                    Launching the
                                    future
                                </h4>
                            </div>
                            <div>
                                <IoIosArrowDown
                                    className='h-4 w-4 text-white rotate-180'
                                />
                            </div>

                        </div>


                    </div>
                </div>



                <div className="flex flex-col md:flex-row mt-3 md:row gap-2 md:gap-4">
                    <div className='flex justify-center md:block'>
                        <Image
                            src={Icon1}
                            className='object-cover w-12 h-12 md:w-14 md:h-14'
                            alt=''
                        />
                    </div>
                    <div className='flex flex-col p-4  gap-2 w-full md:w-[300px] '>
                        <div className='flex justify-between'>
                            <div>
                                <h4 className='text-white text-xs md:text-sm font-semibold font-satoshibold'>
                                    Limitless Possibilities of AI
                                    & Crypto
                                </h4>
                            </div>
                            <div>
                                <IoIosArrowDown
                                    className='h-4 w-4 text-white rotate-180'
                                />
                            </div>

                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Vision

