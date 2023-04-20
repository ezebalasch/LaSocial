import './App.css';
import Navbar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer nombre={'Ezequiel'}/>
    </div>
  );
}

export default App;
