import './CartView.css'
import Container from 'react-bootstrap/Container';
import carrito from './../../assets/svgcarrito.svg'
import { useContext } from 'react';


const CartView = () => {
    return(
        <Container className='CartViewContainer'>
            <h2 className='CartTitle'>Tu pedido <span><img src={carrito} className='SVGCart' alt="Carrito de compras"/></span></h2>
        </Container>
        )
}
export default CartView