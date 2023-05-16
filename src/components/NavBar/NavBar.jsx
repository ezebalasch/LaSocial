
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/LOGO-2.svg'
import CartWidget from './CartWidget/CartWidget'
import './NavBar.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { products } from './../../data/pizzas';
  
const Navbar = () => {
    const [itemsMenu, setItemsMenu] = useState([])
    useEffect(() => {
        const productList = new Promise((resolve, reject) => 
        resolve(products)
        )
        productList.then(result => {
            const categories = result.map(item => item.crust_type)
            const uniqueCategories = new Set(categories)
            setItemsMenu([...uniqueCategories].sort())
        })

    }, [])

    return (
        <nav className="navbar navbar-expand-lg m-auto">
            <div className="container-fluid">
                <Link to='/'>
                    <img src={Logo} width="150"  alt="Logo La Social"/>
                </Link>
                
                <div className="Categories" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        {itemsMenu?.map(item => (
						<NavLink key={item} to={`/category/${item}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
							{item.toUpperCase()}
						</NavLink>
					    ))}
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
} 
export default Navbar