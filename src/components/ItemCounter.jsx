import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'

function ItemCounter ({ item }) {
    const [counter, setCounter] = useState(0)
    const { addToCart } = useContext(CartContext)

    const handleAdd = () => setCounter(counter + 1)
    const handleSub = () => setCounter(counter - 1)

    return (
        <div className='d-flex gap-3 align-items-center'>
            <Button variant='outline-dark' onClick={handleSub}> - </Button>
            <p className='m-0'>{counter}</p>
            <Button variant='outline-dark' onClick={handleAdd}> + </Button>
            <Button 
                variant='outline-dark' 
                onClick={() => addToCart({...item, quantity: counter})}
                disabled={counter === 0}
            > 
                agregar al carrito 
            </Button>
        </div>
    )
}

export default ItemCounter