import React from 'react'

const Profit = () => {
    return (
        <div className='flex flex-col gap-5 md:gap-24 w-full'>
            <div className='flex flex-col gap-3'>
                <div>
                    <h2 className='uppercase font-monument text-white text-3xl md:text-5xl'>profiting through</h2>
                </div>
                <div className='flex justify-start md:justify-end'>
                    <h4 className='uppercase font-monument font-semibold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text text-xl md:text-2xl'>ai innovation & decentralization</h4>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                <div className='bg-gradient-to-t from-[#000000] to-[#c274f3]'>
                    <video src="/assets/videos/creon-logo.mp4" autoPlay loop muted className='mix-blend-overlay' />
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <h4 className='text-white text-sm font-satoshibold font-semibold'>The dynamic community driven <br /> business model of the future.</h4>
                    </div>
                    <div>
                        <span className='text-white font-satoshiregular text-xs'>
                            At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profit


{/* <Image
                    src="/assets/earth.png"
                    alt='earth'
                    height={947}
                    width={485}
                    className='w-full object-cover'
                /> */}


/*
 <div className='flex flex-col gap-24 w-full'>
<div className='flex flex-col gap-3'>
    <div>
        <h2 className='uppercase font-monument text-white text-5xl'>profiting through</h2>
    </div>
    <div className='flex justify-end'>
        <h4 className='uppercase font-monument font-semibold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text text-2xl'>ai innovation & decentralization</h4>
    </div>
</div>


<div className='flex justify-center items-center gap-10'>
    <div className='w-[947px] h-[485px]'>
        <img
            src="/assets/earth.png"
            alt=""
            className='object-cover'
        />
    </div>
    <div className='flex flex-col gap-2 w-[800px]'>
        <div>
            <h4 className='text-white text-sm font-satoshibold font-semibold'>The dynamic community driven <br /> business model of the future.</h4>
        </div>
        <div>
            <span className='text-white font-satoshiregular text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia neque magni delectus laboriosam rerum nulla atque laborum laudantium quae ad exercitationem amet cum a nam doloribus, molestias enim perspiciatis recusandae iure culpa voluptatum omnis. Reprehenderit fugiat expedita eos nemo neque quibusdam earum recusandae autem, cum quasi odio nam assumenda odit.</span>
        </div>
    </div>
</div>
</div> */