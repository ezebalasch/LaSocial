import { useEffect, useState } from "react"
import './ItemCount.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ItemCount = ({stock, onAdd}) => {

	const [counter, setCounter] = useState(0)

	useEffect(() => {
		if (counter > 0) onAdd(stock - counter)
	}, [counter])

	const handlerIncreaseCount = () => {
		if (stock > counter) setCounter(counter + 1)
	}

	const handlerDecreaseCount = () => {
		if (counter > 0) setCounter(counter - 1)
	}
    return(
		<Container>
			<Row>
				<Col><button className="Button" onClick={handlerDecreaseCount}>-</button></Col>
				<Col><h4>{counter}</h4></Col>
				<Col><button className="Button" onClick={handlerIncreaseCount}>+</button></Col>
			</Row>
	  </Container>
  
        // <div className="Counter">
        //     <div className="Controls">
        //         <button className="Button" onClick={handlerDecreaseCount}>-</button>
        //         <h4>{counter}</h4>
        //         <button className="Button" onClick={handlerIncreaseCount}>+</button>
        //     </div>
        // </div>
    )
} 
export default ItemCount