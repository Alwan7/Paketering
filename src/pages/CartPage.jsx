import React, { useContext, useState } from "react";
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from "../component/Header";
// import { connect } from 'react-redux';

import ShopContext from "../context/shop-context";

const CartPage = props => {
  const context = useContext(ShopContext);
  const [size, setSize] = useState(0)
  const cartPriceTotal = context.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  
  return (
    <>
       < Header
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
      <Row>
        
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        
          <ListGroup variant='flush'>
            {context.cart.map((cartItem) => (
              <ListGroup.Item key={cartItem.id}>
                <Row>
                  <Col md={2}>
                    <Image src={cartItem.image} alt={cartItem.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${cartItem.product}`}>{cartItem.name}</Link>
                  </Col>
                  <Col md={2}>${cartItem.price}</Col>
                  <Col md={2}>
                    <Form.Control
                            as='select'
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                          >
                      {cartItem.size.map(size => (
                              <option>
                               {size}
                              </option>
                            ))}
                          </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='dark'
                      onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                      
                    >
                      Remove from cart
                    </Button>
                  </Col>

                </Row>
                
              </ListGroup.Item>
               
            ))}
          </ListGroup>
        
        </Col>
         <Col md={4}>
        <Card >
            <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal $
        {(cartPriceTotal)}
                
              </h2>
              
              
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={context.cart.length === 0}
                
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      
      </Row>
      </>
  )
}

export default CartPage