import './cards.css'
import { CardsData } from '../../Data/Data'
import Card from '../Card/Card'

export default function Cards() {
    return (
        <div className="cards">
            {CardsData.map((card, id) => {
                return (
                    <div className="parent-cards-container">
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                )
            })}
        </div>
    )
}