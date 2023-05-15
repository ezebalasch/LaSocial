
import ItemCount from './../ItemCount/ItemCount';
import './ItemDetail.css'
import vegetarian from './../../assets/img/vegetarian.png'
import gluten from './../../assets/img/gluten.png'


const ItemDetail = ({product, onAdd}) => {
    
    return(
        <article className="CardItem">
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

