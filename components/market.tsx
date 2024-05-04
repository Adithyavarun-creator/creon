import Image from 'next/image'
import React from 'react'
import { marketDatas } from './data'

const Market = () => {
    return (
        <div className='flex flex-col gap-8'>
            {
                marketDatas.map((data) => (
                    <div className='flex flex-col-reverse md:grid md:grid-cols-3 items-center justify-center' key={data.id}>
                        <div className='col-span-3 md:col-span-2'>
                            <div className='flex flex-col flex-2 gap-3 py-4 px-0 md:p-6'>
                                <h1 className='font-monument uppercase text-white text-xl'>
                                    {data.title}
                                </h1>
                                <article className='text-white text-xs font-satoshiregular'>
                                    {data.description}
                                </article>
                            </div>
                        </div>
                        <div className='block md:col-span-1'>
                            <div className=''>
                                <Image src={data.image}
                                    alt=""
                                    height={302}
                                    width={453}
                                    className='object-cover rounded-r-lg'
                                />
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Market


/*
 <div className='flex flex-col gap-6'>
            {
                marketDatas.map((data) => (
                    <div key={data.id} className="flex flex-row gap-2 bg-[#13171D] rounded-lg cursor-pointer">
                        <div className='flex flex-col flex-2 gap-3 p-6'>
                            <h1 className='font-monument uppercase text-white text-xl'>
                                {data.title}
                            </h1>
                            <article className='text-white font-satoshiregular'>
                                {data.description}
                            </article>
                        </div>
                        <div className='flex'>
                            <div className='w-[453px] h-[302px]'>
                                <Image src={data.image}
                                    alt=""
                                    height={302}
                                    width={453}
                                    className='object-cover rounded-r-lg'
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
            {/* <div className="flex flex-row gap-2 bg-[#13171D] rounded-lg cursor-pointer">
                <div className='flex flex-col flex-2 gap-3 p-6'>
                    <h1 className='font-monument uppercase text-white text-xl'>
                        AI Prospects, Market Size, and Development Pace
                    </h1>
                    <article className='text-white font-satoshiregular'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ducimus perferendis rerum, veritatis laboriosam, repellat voluptates, error maxime dicta atque iure. Sit incidunt nobis doloribus a molestias ipsa porro voluptatum?</article>
                </div>
                <div className='flex'>
                    <Image src="/assets/ai.png"
                        alt=""
                        height={302}
                        width={453}
                        className='object-cover w-full rounded-r-lg'
                    />
                </div>
            </div>

            <div className="flex flex-row gap-2 bg-[#13171D] rounded-lg cursor-pointer">
                <div className='flex flex-col flex-2 gap-3 p-6'>
                    <h1 className='font-monument uppercase text-white text-xl'>
                        AI Prospects, Market Size, and Development Pace
                    </h1>
                    <article className='text-white font-satoshiregular'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ducimus perferendis rerum, veritatis laboriosam, repellat voluptates, error maxime dicta atque iure. Sit incidunt nobis doloribus a molestias ipsa porro voluptatum?</article>
                </div>
                <div className='flex'>
                    <Image src="/assets/ai.png"
                        alt=""
                        height={302}
                        width={453}
                        className='object-cover w-full rounded-r-lg'
                    />
                </div>
            </div>

        </div >
*/