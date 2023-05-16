
import ItemCount from './../ItemCount/ItemCount';
import './ItemDetail.css'
import vegetarian from './../../assets/img/vegetarian.png'
import gluten from './../../assets/img/gluten.png'


const ItemDetail = ({product, onAdd}) => {
    return(
        <article className="CardItem">
                <div className='backButton'>
                    <button type="button" className="btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"></path>
                        </svg>
                    Volver
                    </button>
                </div>
                <img src={product.img} alt={product.pizza_name} className="ItemImg"/>
                <h2 className="ItemHeader">{product.pizza_name}</h2>
            <section>
                <p className="Info">
                    {product.crust_type}
                </p>
                <p className="Info">
                    Ingredientes: {product.toppings}
                </p>
                <p className="InfoDescription">
                    {product.description}
                </p>
                <p className="Info">
                    {product.size}
                </p>
                <p className="InfoPrice">
                    ${product.price}
                </p>
                <p className="Info">
                    Tiempo de espera: {product.delivery_time}min
                </p>
                <div>
                    <div className='row justify-content-between'>
                        <div className='col-6 one'>
                            {product.vegetarian ? <img className='vegetarian' src={vegetarian}/> : false}
                    
                            {product.gluten_free ? <img className='glutenFree' src={gluten}/> : false}

                        </div>
                        <div className="col-4 two">
                        {
                            <ItemCount stock={10} onAdd={onAdd}/>

                        }
                        </div>
                    </div>

                </div>

            </section>  

        </article>
    )
}
export default ItemDetail

