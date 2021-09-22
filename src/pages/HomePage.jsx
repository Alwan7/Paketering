
import ShopContext from "../context/shop-context";
import Product from '../component/Product'
import {Row, Col} from 'react-bootstrap'
import NewsletterPopup from '../component/global/NewsletterPopup'
import Header from "../component/Header";

import ProductCarousel from "../component/ProductCarousel";


const HomePage = product => {
  return (
    <ShopContext.Consumer>
      {context => (
        <>
          < Header
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
        <ProductCarousel />
          
          <Row>
            
            {context.products.map(product => (
          
          <Col sm={12} md={6} lg={4} xl={3}>
            < Product product = {product} />
          
          </Col>
          
        ))}
        
        <NewsletterPopup />
          </Row>
          
          </>
      )}
      </ShopContext.Consumer>
  )
}
export default HomePage