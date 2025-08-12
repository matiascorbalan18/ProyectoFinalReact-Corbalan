import ItemCounter from './ItemCounter'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItemDetail ({ item }) {
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <img src={item?.image} alt={item?.name} />
                </Col>
                <Col>
                    <h2>{item?.name}</h2>
                    <p>{item?.description}</p>
                    <p>${item?.price}</p>
                    <ItemCounter item={item} />
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail