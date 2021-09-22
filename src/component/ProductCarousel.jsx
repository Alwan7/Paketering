import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import ShopContext from '../context/shop-context'



const ProductCarousel = ({product}) => {
  

  return (
    <ShopContext.Consumer>
      {context => (
        <Carousel pause='hover' className='bg-dark'>
          {context.products.map((product) => (
            <Carousel.Item key={product.id}>
              <Link to={`/product/${product.id}`}>
                <Image src={product.image} alt={product.name} fluid />
                <Carousel.Caption className='carousel-caption'>
                  <h2>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          )
          )}
        
      
        </Carousel>
      )}
      </ShopContext.Consumer>
  )
}

export default ProductCarousel