import './Card.css'
import delivery from '../assets/images/delivery.jpg'

export default function Card({ title, priceOrRating, description, imageSrc, CardType }) {
  return (
    //card menu e card rate
    <>
    {(CardType === "cardMenu")? (<div className="card">
        <img src={imageSrc} alt={description} className="card-image"/>
        <div className='card-text'>
            <div className='card-text-title'>
                <h2>{title}</h2>{priceOrRating && <span>{priceOrRating}</span>}
            </div>
            <p>{description}</p>
        </div>
        <h3 className='card-call-to-action'>Order a delivery
            <span>
                <img src={delivery} alt='delivery icon'/>
            </span>
        </h3>
    </div>)
    :
    (<div className="card">
        <h2>{priceOrRating}</h2>
        <div className='card-text'>
            <div className='card-text-title'>
                <img src={imageSrc} alt={description} className="card-profile-image"/>
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    </div>)}
    </>
    )
}
