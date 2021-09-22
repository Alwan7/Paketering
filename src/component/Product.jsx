import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";



const Product = ({product}) => {
  return (
    <>
      
        <Card className='my-3 p-3 rounded'>
            <Link to ={`/product/${product.id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
            <Link to ={`/product/${product.id}`}>
                <Card.Title as='div'> <strong>{product.name }</strong> </Card.Title>
            </Link>
                <Card.Text as='div'>
                   <ReactStars
                
                isHalf={true}
              size= '20'
              edit={false}
                value={product.rating}
                
              />
              <span>{`${product.numReviews} reviews`}</span>
              
                    
                
            </Card.Text>
            <Card.Text as='h3'>
                 ${product.price}

            </Card.Text>
            </Card.Body>
      </Card>
      </>
    )
}

export default Product