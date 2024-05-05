import Image from 'next/image'
import { cardData } from './data'
import Card from './card'


const Cards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8'>
            {
                cardData.map((card) => (
                    <Card key={card.id}
                        title={card.title}
                        subtitle={card.subtitle}
                        image={card.image}
                        description={card.description} />
                ))
            }

        </div>
    )
}

export default Cards