import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'

function Cart () {
    const { cart } = useCart()
    const navigate = useNavigate()

    if (cart.lenght === 0) {
        return (
            <h2 className='w-50 mt-5 justify-content-center align-items-center gap-5'>No tienes productos en el carrito</h2>
        )
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5 gap-5'>
            <ListGroup className='w-75'>
                {cart.map(prod => (
                    <ListGroup.Item key={prod.id} className='d-flex justify-content-between'> 
                        {prod.name} x {prod.quantity}
                        <Button variant='danger'>delete</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h2>TOTAL: $1000</h2>
            <Button 
                className='w-75'
                variant='outline-dark'
                onClick={() => navigate('/checkout')}
            >
                ir al checkout
            </Button>
        </div>
    )
}

export default Cart