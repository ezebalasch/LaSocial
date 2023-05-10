
import ItemCount from './../ItemCount/ItemCount';

const ItemDetail = ({product, onAdd}) => {
    
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{product.pizza_name}</h2>
            </header>
            <picture>
                <img src={product.img} alt={product.pizza_name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Tipo: {product.crust_type}
                </p>
                <p className="Info">
                    Ingredientes: {product.toppings}
                </p>
                <p className="Info">
                    {product.description}
                </p>
                <p className="Info">
                    {product.size}
                </p>
                <p className="Info">
                    ${product.price}
                </p>
                <p className="Info">
                    Tiempo de espera: {product.delivery_time}min
                </p>
                <p className="Info">
                    Vegetariana: {product.vegetarian}
                </p>
                <p className="Info">
                    Libre de Gluten: {product.gluten_free}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                        <ItemCount stock={10} onAdd={onAdd}/>

                }
            </footer>
        </article>
    )
}
export default ItemDetail

