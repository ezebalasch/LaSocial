
import Logo from '../../assets/LOGO-2.svg'
import CartWidget from './CartWidget/CartWidget'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src={Logo} width="150"  alt="Logo La Social"/>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li class="nav-item"><a href="#" class="nav-link">Inicio</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Promos</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Pizzas</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Bebidas</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Postres</a></li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
} 
export default Navbar