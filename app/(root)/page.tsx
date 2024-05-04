import Cards from '@/components/cards'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Market from '@/components/market'
import Navbar from '@/components/navbar'
import PassNFT from '@/components/passnft'
import Profit from '@/components/profit'
import Vision from '@/components/vision'
import React from 'react'


const Homepage = () => {
    return (

        <div className='flex flex-col gap-1 md:gap-4 absolute top-0 right-0 left-0'>
            <Header />
            <div className='flex flex-col gap-20 md:gap-36 lg:gap-40 px-6 md:px-40 lg:px-60'>
                <PassNFT />
                <Profit />
                <Vision />
                <Cards />
                <Market />
                <Footer />
            </div>
        </div>


    )
}

export default Homepage

/**
  <div className=''>
            <div className="bg-no-repeat bg-cover bg-center bg-[url('/assets/header-bg.png')] w-full h-[970px]">
                <Navbar />
            </div>
            <div className='flex flex-col items-center justify-center gap-4 ml-40 mr-40'>
                <div className='-mt-[455px] mb-20'>
                    <Header />
                </div>
                <div className=''>
                    <PassNFT />
                </div>
                <div>
                    <Profit />
                </div>
            </div>
        </div >
 */