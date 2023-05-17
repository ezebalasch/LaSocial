import { useEffect, useState } from "react"
import { products } from './../../data/pizzas';
import ItemList from './../ItemList/ItemList';
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import CartView from './../CartView/CartView';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemListContainer = ({greeting}) => {
    const [list, setList] = useState([])
	const { id } = useParams()
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1365)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return() => window.removeEventListener('resize', handleResize)
    }, [])


	useEffect(() => {
		const productList = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(products)
			}, 1000)
		})
		productList.then(result => {
			if (id) {
				const productsFiltered = result.filter(
					item => item.crust_type === id
				)
				setList(productsFiltered)
			} else {
				setList(result)
			}
		})
	}, [id])

    return (
        <>
        <div className="greetingContainer">
            <h1 className='display-6'> Bienvenido, {greeting}</h1>
        </div>
        
            {isSmallScreen ? (
                    <div className='containerMobile'>
                        <ItemList list={list} />
                    </div>
            ) : (
                <>
                    <Row>
                        <Col xs={12} md={8}>
                            <div className='container'>
                                <ItemList list={list} />
                            </div>
                        </Col>
                        <Col className="cartCol" xs={6} md={4}>
                            <CartView/>
                        </Col>
                    </Row>
                </>

            )}

        </>
    )
}
export default ItemListContainer