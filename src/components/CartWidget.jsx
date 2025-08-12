import Button from 'react-bootstrap/Button'
import { FaCartShopping } from "react-icons/fa6"
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router'

function CartWidget () {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()
    const navigate = useNavigate()

    return (
        <Button variant='light' onClick={() => navigate('/cart')}>
            <FaCartShopping /> {quantity}
        </Button>
    )
}

export default CartWidget