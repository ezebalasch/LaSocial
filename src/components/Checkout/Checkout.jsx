import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { CartContext } from "../../context/CartContext"
import "./Checkout.css"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
	})

	const { addedProducts, clear } =
		useContext(CartContext)

	const handleChange = ev => {
		setFormValues(prev => ({
			...prev,
			[ev.target.name]: ev.target.value,
		}))
	}
    const sendOrder = () => {
		const order = {
			buyer: formValues,
			items: addedProducts,
			total: total(),
		}

		const db = getFirestore()
		const orderCollection = collection(db, "orders")

		addDoc(orderCollection, order).then(response => {
			if (response.id) {
				clear()
                Swal.fire("Con el siguiente código será atendido: " + response.id)

			}
		})

	}
    const total = () =>
    addedProducts.reduce(
        (acumulador, valorActual) =>
            acumulador + valorActual.quantity * valorActual.price,
        0
    )
    if (typeof addedProducts === [0]) {
        return(
            <>
                <Link to="#" className="btn btn-danger" onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"></path>
                    </svg>
                    Volver
                </Link>
                <h1>No posee productos en el carrito</h1>
            </>
        )
    }
    return(
    <>
        <h2 className="checkoutTitle">Ingresar datos de usuario</h2>
        <Link to="#" className="btn btn-danger checkout" onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"></path>
                    </svg>
                    Volver
        </Link>
        <Form className="form">
            <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
            >
                <Form.Label className="Texto">Nombre</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={formValues.name}
                    type="text"
                    name="name"
                    className="Completar"
                />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
            >
                <Form.Label className="Texto">Email</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={formValues.email}
                    type="email"
                    name="email"
                    className="Completar"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="Texto">Teléfono</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={formValues.phone}
                    type="text"
                    name="phone"
                    className="Completar"
                />
            </Form.Group>
            <Button
                variant="primary"
                type="button"
                onClick={sendOrder}
                disabled={!formValues.name || !formValues.email || !formValues.phone}

            >
                {(!formValues.name || !formValues.email || !formValues.phone) ? "Completar todos los campos" : "Enviar"}
            </Button>

        </Form>
    </>
    )

}
export default Checkout