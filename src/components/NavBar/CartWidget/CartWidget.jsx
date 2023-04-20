import Cart from './../../../assets/CartWidget.svg'

const CartWidget = () => {
    return(
        <>
            <button type='button' class='btn btn-outline-secondary'>
                <img class='white' src={Cart} alt="Carro de Compras" />
                0
            </button>
        </>
    )
}
export default CartWidget