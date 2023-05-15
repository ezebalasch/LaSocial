import './App.css';
import Navbar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const onAdd = stock => console.log("Stock actual:  " + stock)

  return (
    <div className="App">
      		<BrowserRouter>
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
				<Route path='*' element={<h1>404 NOT FOUND</h1>}/>
					</Routes>
			</BrowserRouter>

    </div>
  );
}

export default App;
