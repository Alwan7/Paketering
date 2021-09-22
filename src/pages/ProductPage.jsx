import React, {useState, useContext} from 'react'

import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import Header from '../component/Header';
import ShopContext from '../context/shop-context';



const ProductPage = ({ history, match, }) => {
  const context = useContext(ShopContext);
  const product = context.products.find(p => p.id === match.params.id)
  
  return(
    <ShopContext.Consumer>
      {context => (
        <>
           < Header
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroupItem>
                <h2>{product.name}</h2>
              </ListGroupItem>
              <ListGroupItem>
             
                <ReactStars
                
                  isHalf={true}
                  size='20'
                  edit={false}
                  value={product.rating}
                
                />
                <span>{`${product.numReviews} reviews`}</span>
              

              </ListGroupItem>
              <ListGroupItem>
                Price: ${product.price}
              </ListGroupItem>
              <ListGroupItem>
                description: {product.description}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <Row>
                    <Col>
                      Price:
                    
                    </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>

                </ListGroupItem>
              
                
                <ListGroupItem>
                  <Row>
                    <Col>
                      Status:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? 'in stock' : 'out of stock'}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Button  onClick={context.addProductToCart.bind(this, product,) }className='btn-block' type='button' disabled={product.countInStock === 0}> Add to cart</Button>
                </ListGroupItem>

              </ListGroup>
            </Card>
          </Col>
          </Row>
          </>
      )}
   </ShopContext.Consumer>



  )
}
export default ProductPage