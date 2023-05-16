import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import './Item.css'


const Item = ({id, pizza_name, price, toppings, crust_type, size, img}) => {
    return(
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} alt={pizza_name} />
          <Card.Body>
            <Card.Title>{pizza_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{crust_type}</Card.Subtitle>
            <Card.Text>
              {toppings}
            </Card.Text>
            <Card.Text className="price">
              ${price}
            </Card.Text>

            <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{size}</small>
          </Card.Footer>
      </Card>

  
    )
}
export default Item
