import React from 'react'

const PassNFT = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row md:justify-between gap-10'>
            <div className='flex flex-col gap-10 pt-10'>
                <div>
                    <h2 className='text-white font-monument uppercase text-5xl'>Creon Pass NFT</h2>
                </div>
                <div>
                    <h4 className='text-base lg:text-xl font-satoshibold font-semibold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>
                        The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools
                    </h4>
                </div>
                <div className='flex flex-col gap-7 px-3'>
                    <span className='text-white font-satoshiregular text-sm lg:text-xl'>Pre launch ivestment opportunities for upcoming AI projects</span>
                    <span className='text-white font-satoshiregular text-sm lg:text-xl'>Free and early access to Creon built AI projects</span>
                    <span className='text-white font-satoshiregular text-sm lg:text-xl'>Higer allocation limits on Creon AI launchpads</span>
                    <span className='text-white font-satoshiregular text-sm lg:text-xl'>Revenue share distribution from Creon built AI projects</span>
                </div>
                <div>
                    <button className='p-3 w-full text-center font-satoshibold font-semibold text-white bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] rounded-md'>Buy Creon Pass</button>
                </div>
            </div>
            <div className='w-full md:w-[808px] h-auto'>
                <div className='bg-gradient-to-t from-[#000000] to-[#c274f3]'>
                    <video src="/assets/videos/nft-video.mp4" autoPlay loop muted
                        className='mix-blend-overlay' />
                </div>
            </div>

        </div >
    )
}

export default PassNFT