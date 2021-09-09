
import products from '../products'
import Product from '../component/Product'
import {Row, Col} from 'react-bootstrap'


const HomePage = () => {
  return (
    <>
      <h2></h2>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
            < Product product = {product} />
          
          </Col>
        ))}
      </Row>
      </>
  )
}
export default HomePage