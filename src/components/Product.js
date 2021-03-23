import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import HomeScreen from "./../Screen/HomeScreen";
import Rating from './../components/Rating'
import { Link } from 'react-router-dom'
class Product extends React.Component {
  render() {
    var { product } = this.props;
    return (
      <Card className="my-3 p-3 rounded">
        <Link to={`product/${product._id}`}>
          <Card.Img src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`product/${product._id}`}>
            <Card.Title as='div'>
                <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='div'>
            <div className='my-3'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
            </div>
          </Card.Text>
          <Card.Text as='h3'>
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
