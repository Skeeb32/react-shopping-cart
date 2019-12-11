import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './context/ProductContext';
import CartContext from './context/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		const newItem = 
		{...item, cartId: Date.now()}
		setCart([...cart, newItem])
		console.log(item)
	};

	// const itemCart = item => {
	// 	itemCart([...item])
	// }

	const removeItem = cartId => {
		console.log ("ID", cartId)
	  const filtered = cart.filter( item => {
		  return item.cartId !==cartId;
	  })
		console.log("FILTER", filtered)
	  setCart(filtered)
	 console.log("CART", cart)
   }

	return (
		<div className="App">
			<ProductContext.Provider value ={{products, addItem}}>
			<CartContext.Provider value = {{cart, setCart, removeItem}}>
			
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/" component={Products} />

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
