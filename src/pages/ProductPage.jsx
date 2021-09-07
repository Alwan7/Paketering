import React from 'react'

import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import products from '../products'

import ReactStars from "react-rating-stars-component";

const ProductPage = ({ match }) => {
  const product = products.find(p => p._id === match.params.id)
 
  return (
    <>
      <Row>
        <Col md={6}>
          <Image src ={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <h2>{product.name }</h2>
            </ListGroupItem>
            <ListGroupItem>
             
              <ReactStars
                
                isHalf={true}
              size= '20'
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
                    {product.countInStock > 0 ? 'in stock': 'out of stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className='btn-block' type='button' disabled={product.countInStock ===0}> Add to cart</Button>
              </ListGroupItem>

            </ListGroup>
          </Card>
        </Col>
      </Row>
   </>



  )
}
export default ProductPage