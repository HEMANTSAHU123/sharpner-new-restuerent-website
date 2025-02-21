import React,{useContext} from 'react'
import CartIcon from '../Cart/Carticon'
import CartContext from '../../Store/CartContext'
import './HeaderCartButton.css'
const HeaderCartButton = (props) => {
  const Cartctx=useContext(CartContext);
  const numberofcartitems=Cartctx.items.reduce((cartNumber,item)=>{
    return cartNumber+item.amount
  },0);
  return (
    <button className='button' onClick={props.onClick}>
  <span className='icon'>
    <CartIcon/>
  </span>
  <span>Your Cart</span>
  <span className='badge'>{numberofcartitems}</span>
  </button>
  )
}

export default HeaderCartButton
