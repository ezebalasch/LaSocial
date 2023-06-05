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
            <table className="responsive-table">
                {addedProducts.map(producto => (
                    <tr className='tableRow' key={producto.id}>
                        <td data-label="Image">
                            <img
                            height={60}
                            src={producto.img}
                            alt={producto.pizza_name}
                                />
                        </td>
                        <td data-label="Pizza Name" className='card-body'>{producto.pizza_name}</td>
                        <td data-label="Quantity" className='price'>x{producto.quantity}</td>


                        <td data-label="Price" className='price'>${producto.price * producto.quantity}</td>
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