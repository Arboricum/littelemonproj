import Card from "./Card"
import './Special.css'

const specialImages = [
    {
        title: "Bruschette",
        priceOrRating: "10€",
        description: "Savory bruschetta with Tirso Valley tomatoes and Neapolitan basil",
        imageSrc: "/icons_assets/bruschette.jpg",
        type: "cardMenu"
    },
    {
        title: "Penne with venison ragù",
        priceOrRating: "20€",
        description: "Penne with exquisite venison ragù and a side of aged cheeses",
        imageSrc: "/icons_assets/pasta.jpg",
        type: "cardMenu"
    },
    {
        title: "Mushrooms salad",
        priceOrRating: "15€",
        description: "Mushrooms salad with onion, melon and wild berries",
        imageSrc: "/icons_assets/salad.jpg",
        type: "cardMenu"
    }
]

export default function Special() {
  return (
    <section className="special section-container">
      <div className="special-title">
        <h1>This weeks specials!</h1>
        <button className="global-btn">Online Menu</button>
      </div>
      <div className="special-card">
      {specialImages.map(special => (
        <Card
        key={special.title}
        title={special.title}
        priceOrRating={special.priceOrRating}
        description={special.description}
        imageSrc={special.imageSrc}
        CardType={special.type}
        />
      ))}
      </div>
    </section>
  )
}
