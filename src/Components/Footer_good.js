import logo from '../assets/images/logo_big.jpg'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <img src={logo} alt='logo' />
        <ul className='footer-main-ul'>
            <li>Navigation
              <ul className='footer-secondary-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
              </ul>
            </li>
            <li>Contact
            <ul className='footer-secondary-ul'>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
              </ul>
            </li>
            <li>Social Media Links
            <ul className='footer-secondary-ul'>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </li>
        </ul>
    </footer>
  )
}