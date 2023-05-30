
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/LOGO-2.svg'
import CartWidget from './CartWidget/CartWidget'
import './NavBar.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { products } from './../../data/pizzas';
import { Link } from 'react-router-dom';
  
const Navbar = () => {
    const [itemsMenu, setItemsMenu] = useState([])
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1170)
        }
        window.addEventListener('resize', setIsSmallScreen)
        handleResize()
        return() =>  window.removeEventListener('resize', handleResize)
    }, [])
    
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
        <>
            {isSmallScreen ? (
                <>
                    <nav className="navbar navbar-expand-lg m-auto">
                        <div className="container-fluid">
                            <Link to='/'>
                                    <img src={Logo} width="150"  alt="Logo La Social"/>
                            </Link>
                            <div className="hamDiv">
                            <svg xmlns="http://www.w3.org/2000/svg"className="hamButton" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                        </div>

                    </nav>
                </>
            ) : (
                <>
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
                            <Link to='/cart'>
                                <CartWidget/>
                            </Link>
                        </div>
                    </nav>
                </>
            )
            }
        </>

    )
} 
export default Navbar