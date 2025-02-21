import React,{useContext} from 'react'
import './MealItem.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../Store/CartContext'
const MealItem = (props) => {
  const Cartctx=useContext(CartContext)

    const price=`$${props.price.toFixed()}`
    const addToCartHandler=(amount)=>{
Cartctx.addItem({
  id:props.id,
  name:props.name,
  amount:amount,
  price:props.price
})
    }
  return (
    <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
        </div>
        <div><MealItemForm onAddToCart={addToCartHandler}/></div>
    </li>
  )
}

export default MealItem
