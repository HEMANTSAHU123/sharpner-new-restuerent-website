import React, { Fragment } from 'react'
import Header from './Components/Header/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
const App = () => {
  return (
    <Fragment>
      <Cart/>
    <Header/>
    <main>
      <Meals/>
    </main>
    </Fragment>
  )
}

export default App
