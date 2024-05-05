import Image, { StaticImageData } from "next/image"


interface CardProps {
    title: string;
    subtitle: string;
    image: StaticImageData;
    description: string
}

const Card = ({ title, subtitle, image, description }: CardProps) => {
    return (
        <div className='relative h-[453px] rounded-xl bg-[#13171D] flex flex-col gap-1 cursor-pointer'>
            <div className='flex flex-col gap-2 p-4 h-[100px]'>
                <h1 className='font-monument text-white  text-2xl uppercase'>{title}</h1>
                <h3 className='text-xs font-satoshibold font-semibold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text'>
                    {subtitle}
                </h3>
            </div>
            <div className='overflow-hidden'>
                <Image
                    className='object-contain w-full pr-4 transition duration-300 ease-in-out hover:scale-110'
                    src={image}
                    height={234}
                    width={100}
                    alt='token'
                />
            </div>
            <div>
                <article className='text-white font-satoshiregular text-xs p-5'>
                    {description}
                </article>
            </div>
            <div className='absolute -top-4 right-0'>
                <span className='uppercase text-[10px] font-bold text-black bg-white p-1 rounded-2xl'>coming soon</span>
            </div>
        </div>
    )
}

export default Card