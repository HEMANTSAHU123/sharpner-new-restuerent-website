import React,{Fragment} from 'react'
import Mealimage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import './Header.css'
const Header = () => {
  return (
    <Fragment>
      <header className='header'>
        <h1>React Meal</h1>
        <HeaderCartButton/>
        <button>Cart</button>
      </header>
      <div className='main-image'>
        <img src={Mealimage} alt="A table full of delicious food"/>
      </div>
    </Fragment>
  )
}

export default Header
