import './Hero.css'

export default function Hero({heroImag}) {
  return (
    <div className='hero'>
			<div className='hero-div section-container'>
				<div className='hero-div-left'>
					<h1 className='hero-title'>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
					<button className='global-btn'>Reserve a table</button>
				</div>
				<div className='hero-div-rigth'>
					<img src={heroImag} alt='delicious food'/>
				</div>
			</div>
    </div>
  )
}
