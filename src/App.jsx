import './App.css';
import Navbar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
	useEffect(() => {
		const db = getFirestore()

		const refCollection = collection(db, "items")
		getDocs(refCollection).then(snapshot => {
			if (snapshot.size === 0) console.log("no results found")
			else
			console.log(
				snapshot.docs.map(doc => {
					return {id: doc.id, data: doc.data()}
				})
			)
		})
	
	}, [])

  const onAdd = stock => console.log("Stock actual:  " + stock)

  return (
    <div className="App">
      		<BrowserRouter>
				<CartProvider>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={<ItemListContainer greeting="Ezequiel" />}
						/>
						<Route
							path="/category/:id"
							element={<ItemListContainer greeting="Ezequiel" />}
						/>
						<Route
							path="/item/:id" 
							element={<ItemDetailContainer onAdd={onAdd} />}
						/>
						<Route path='/cart' element={<Cart/>}/>
						<Route path='/checkout' element={<Checkout/>}/>
						<Route path='*' element={<h1>404 NOT FOUND</h1>}/>
					</Routes>
				</CartProvider>
			</BrowserRouter>

    </div>
  );
}

export default App;
