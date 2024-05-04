import Image from 'next/image'
import { cardData } from './data'


const Cards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8'>
            {
                cardData.map((card) => (
                    <div key={card.id} className='relative h-[453px] rounded-xl bg-[#13171D] flex flex-col gap-1 cursor-pointer'>
                        <div className='flex flex-col gap-2 p-4 h-[100px]'>
                            <h1 className='font-monument text-white  text-2xl uppercase'>{card.title}</h1>
                            <h3 className='text-xs font-satoshibold font-semibold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>
                                {card.subtitle}
                            </h3>
                        </div>
                        <div className='overflow-hidden'>
                            <Image
                                className='object-contain w-full pr-4 transition duration-300 ease-in-out hover:scale-110'
                                src={card.image}
                                height={234}
                                width={100}
                                alt='token'
                            />
                        </div>
                        <div>
                            <article className='text-white font-satoshiregular text-xs p-5'>
                                {card.description}
                            </article>
                        </div>
                        <div className='absolute -top-4 right-0'>
                            <span className='uppercase text-[10px] font-bold text-black bg-white p-1 rounded-2xl'>coming soon</span>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Cards