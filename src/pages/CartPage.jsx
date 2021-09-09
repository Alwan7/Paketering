
import { Row, Col, ListGroup, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import products from '../products'

const CartPage = ({ match }) => {
  const product = products.find(p => p._id === match.params.id)
  
  
  return <div>
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        
        <ListGroup variant='flush'>
            
          <ListGroup.Item >
            <Row>
              <Col md={2}>
                <Image src={product.image} alt={product.name} fluid rounded />
              </Col>
              <Col md={3}>
                <Link to={`/product/${product}`}>{product.name}</Link>
              </Col>
              <Col md={2}>${product.price}</Col>
              <Col md={2}>
                    
                    
              </Col>
                  
            </Row>
          </ListGroup.Item>
            
        </ListGroup>
        )
      </Col>
      
    </Row>
  </div>

}
export default CartPage