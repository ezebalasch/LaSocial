import './CartView.css'
import Container from 'react-bootstrap/Container';
import carrito from './../../assets/svgcarrito.svg'
import { useContext } from 'react';
import { CartContext } from './../../context/CartContext';


const CartView = () => {
    const {addedProducts} = useContext(CartContext)
	const total = () =>
        addedProducts.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity * valorActual.price,
			0
	)

    return(
        <Container className='CartViewContainer'>
            <h2 className='CartTitle'>Tu pedido <span><img src={carrito} className='SVGCart' alt="Carrito de compras"/></span></h2>
            <ul className='tableRowCartView' style={{  paddingLeft: "0"}}>

                {addedProducts.map(producto => (
                    <li style={{listStyleType: "none"}}>
                        <p data-label="Pizza Name" style={{textAlign: "left"}} className='card-body'>{producto.pizza_name} <span  data-label="Quantity" className='price'>x{producto.quantity}</span></p>
                        {/* <p data-label="Quantity" className='price'>x{producto.quantity}</p> */}
                        <p data-label="Price" style={{textAlign: "end", margin: "1rem"}} className='price'>${producto.price * producto.quantity}</p>

                    </li>

                ))}
            </ul>
            <div className='CartViewTotal'>
            <p className='totalFont' style={{fontSize: "20px"}}>Total:</p>
            <p className='price' style={{fontSize: "24px"}}>${total()}</p>
            </div>

        </Container>
        )
}
export default CartView