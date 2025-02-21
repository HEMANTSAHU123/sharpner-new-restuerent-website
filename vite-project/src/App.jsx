import React, {useState } from 'react'
import Header from './Components/Header/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import Cartprovider from './Store/Cartprovider'
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Cartprovider>
    {cartIsShown &&< Cart onClose={hideCartHandler}/>}
    <Header onShowcart={showCartHandler}/>
    <main>
      <Meals/>
    </main>
    </Cartprovider>
  )
}

export default App;
