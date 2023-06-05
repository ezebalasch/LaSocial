import { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Cart = () => {
    const {clear, addedProducts, deleteItem} = useContext(CartContext)
	const total = () =>
        addedProducts.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity * valorActual.price,
			0
	)

    if (!addedProducts.length) {
        return (
            <div>
                <h1 style={{margin: "2rem"}} className='notProducts'>No hay items en el carrito</h1>
                <Link to='/' style={{margin: "4rem"}} className='Option'>Volver a Productos</Link>
            </div>
        )
    }
    return (
        <div className='center'>
            <Link to="#" className="btn btn-danger checkout" onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"></path>
                    </svg>
                    Volver
             </Link>
            <table className="responsive-table">
                {addedProducts.map(producto => (
                    <tr className='tableRow' key={producto.id}>
                        <td data-label="Imagen">
                            <img
                            height={60}
                            src={producto.img}
                            alt={producto.pizza_name}
                                />
                        </td>
                        <td data-label="Pizza" className='card-body'>{producto.pizza_name}</td>
                        <td data-label="Cantidad" className='price'>x{producto.quantity}</td>


                        <td data-label="Precio" className='price'>${producto.price * producto.quantity}</td>
                        <td>
                            <Button
                                onClick={() =>
                                deleteItem(producto.id)
                                }
                                className='Button'
                            >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
            </table>
            <h3 className='total'>Total: ${total()}</h3>
            <div className='columnContainer'>
                <div className='column'>
                    <button onClick={() => clear()} className='Button'> Limpiar Carrito</button>
                </div>
                <div className='column'>
                    <Link to='/checkout' className='Option'>Checkout</Link>            
                </div>
            </div>
        </div>
    )
}
export default Cart