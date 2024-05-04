import React from 'react'

const Header = () => {
    return (
        <div
            className='mb-8 -z-10 h-[520px] md:h-[970px] w-full'>
            <div className='bg-gradient-to-t md:from-[#000000] md:to-[#c274f3]'>
                <video src="/assets/videos/main-background-video.mp4" autoPlay loop muted className='mix-blend-overlay' />
            </div>
            <div className="-mt-[0px] md:-mt-[200px] lg:-mt-[500px] ml-0 md:ml-20 md:mb-10 flex flex-col gap-5 md:gap-10 px-6 md:px-40 lg:px-60">
                <div>
                    <h2 className='text-white font-monument text-xl md:text-5xl lg:text-6xl font-semibold uppercase'>the world's first <br />
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
    )
}

export default Header

