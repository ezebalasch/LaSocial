import { useState,useEffect } from "react"
import "./ItemDetailContainer.css"
import ItemDetail from './../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
const ItemDetailContainer = ({ onAdd }) => {
    const [product, setProduct] = useState({})
	const { id } = useParams()
	
	useEffect(() => {
		const db = getFirestore()

		const refDoc = doc(db, "items", id)

		getDoc(refDoc).then(snapshot =>
			setProduct({ id: snapshot.id, ...snapshot.data() })
		)
	}, [id])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail product={product} onAdd={onAdd}/>
        </div>
    )
}
export default ItemDetailContainer