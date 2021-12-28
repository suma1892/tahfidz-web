import React from 'react'
// import { iconInstagram, iconWhatsapp } from '../../../public/assets/icons/index';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="content">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cake Care</li>
            <li>Terms and Conditions</li>
          </ul>
          <ul>
            <li>Privacy Policy</li>
            <li>Corporate Events</li>
            <li>Our Store</li>
            <li>FAQ</li>
          </ul>
          {/* <ul>
            <li><a href="https://www.instagram.com/pancakedurian.aromamedan"><img src={iconInstagram} alt="icon instagram" /> @letincellepatisserie</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=6282211989898&text=Halo saya mau beli cake product 1 2pcs"><img src={iconWhatsapp} alt="icon whatsapp" /> +65 123 3456</a></li>
          </ul> */}
        </div>

        <hr />

        <p className="rights">&copy; 2021 yitas. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
