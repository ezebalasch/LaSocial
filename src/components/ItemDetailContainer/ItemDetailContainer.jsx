import { useState,useEffect } from "react"
import "./ItemDetailContainer.css"
import ItemDetail from './../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { products } from './../../data/pizzas';
const ItemDetailContainer = ({ onAdd }) => {
    const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const getItem = new Promise((resolve, reject) => {
			setTimeout(() => {
				const product = products.find(item => item.id === id)
				resolve(product)
			}, 50)
		})
		getItem.then(result => setProduct(result))
	}, [id])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail product={product} onAdd={onAdd}/>
        </div>
    )
}
export default ItemDetailContainer