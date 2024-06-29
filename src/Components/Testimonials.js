import './Testimonials.css'
import Card from "./Card"
import profilo1 from '../assets/images/profilo1.png'
import profilo2 from '../assets/images/profilo2.png'
import profilo3 from '../assets/images/profilo3.png'
import profilo4 from '../assets/images/profilo4.png'


const ratings = [
    {
        title: "Sasuke",
        priceOrRating: "Excellent",
        description: "yup!",
        imageSrc: profilo1,
        type: "cardRate"
    },
    {
        title: "Merden",
        priceOrRating: "Good",
        description: "So sweet",
        imageSrc: profilo2,
        type: "cardRate"
    },
    {
        title: "Cugurra",
        priceOrRating: "Excellent",
        description: "Very nice experience",
        imageSrc: profilo3,
        type: "cardRate"
    },
    {
        title: "Kagoshi",
        priceOrRating: "Excellent",
        description: "I had a very nice dump after dinner!",
        imageSrc: profilo4,
        type: "cardRate"
    }
  ]

export default function Testimonials() {
    console.log(ratings)
    //section-container si trova in App.css
  return (
    <section className='testimonials section-container'>
        <h1>Testimonials</h1>
        <div className='testimonials-text'>
      {ratings.map(rating => (
        <Card 
        key={rating.imageSrc}
        title={rating.title}
        priceOrRating={rating.priceOrRating}
        description={rating.description}
        imageSrc={rating.imageSrc}
        CardType={rating.type}
        />
      ))}
      </div>
    </section>
  )
}
