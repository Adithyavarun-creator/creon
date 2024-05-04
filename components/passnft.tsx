import React from 'react'

const PassNFT = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row md:justify-between gap-10'>
            <div className='flex flex-col gap-10 pt-10'>
                <div>
                    <h2 className='text-white font-monument uppercase text-5xl'>Creon Pass NFT</h2>
                </div>
                <div>
                    <h4 className='text-basw font-satoshibold font-semibold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi obcaecati vitae natus? Dolore laboriosam asperiores repudiandae assumenda esse placeat?
                    </h4>
                </div>
                <div className='flex flex-col gap-7 px-3'>
                    <span className='text-white font-satoshiregular text-sm'>Pre launch ivestment opportunities for upcoming AI projects</span>
                    <span className='text-white font-satoshiregular text-sm'>Free and early access to Creon built AI projects</span>
                    <span className='text-white font-satoshiregular text-sm'>Higer allocation limits on Creon AI launchpads</span>
                    <span className='text-white font-satoshiregular text-sm'>Revenue share distribution from Creon built AI projects</span>
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