import React from 'react'
import Container from '../Container';
import Logo from '../../../assets/logo.png';
import './header.css';

function Header() {
  return (
    <div className='text-white header-bg'>
      <Container>
        <div className='font-rancho flex items-center justify-center'>
          <img src={Logo} alt="" />
          <h2 className='text-[26px] pl-3'>Espresso Emporium</h2>
        </div>
      </Container>
    </div>
  )
}

export default Header
