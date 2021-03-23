import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card, Form } from "react-bootstrap";
import Rating from "./../components/Rating";
import axios from 'axios'

class ProductScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      product:{
        '_id': '',
        'name': '',
        'image': '',
        'description':'',
        'brand': '',
        'category': '',
        'price': 0,
        'countInStock': 0,
        'rating': 0,
        'numReviews': 0,
      },
      quantity:1
    }
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    var { match } = this.props;
    axios
      .get(`/api/products/${match.params.id}`)
      .then((res) => this.setState({ product: res.data }))
      .catch((err) => console.log(err));
  };
  handleChange=(event)=>{
    this.setState({
      quantity:event.target.value
    })
  }
  AddToCart =()=>{
    var {match,history}=this.props
    history.push(`/cart/${match.params.id}?qty=${this.state.quantity}`)
  }
  render() {
    var product=this.state.product
    var quantity_list=[]
    for(var i=0;i<product.countInStock+1;i++){
      quantity_list.push(<option value={i+1} key={i+1}>{i+1}</option>)
    }
    return (
      <div>
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image
              src={product.image}
              alt={product.name}
              className="imageProduct"
            ></Image>
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price:${product.price}</ListGroup.Item>
              <ListGroup.Item>Description:{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? "Instock" : "Out of stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                  <Row xs="auto" className="my-1">
                    <Col>Quantity:</Col>
                    <Col>
                        <Form.Control as="select" defaultValue={this.state.quantity} onChange={this.handleChange}>
                            {/* <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option> */}
                            {quantity_list}

                        </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
                )}



                <ListGroup.Item>
                  <Button
                    onClick={this.AddToCart}
                    className="btn-block"
                    disabled={product.countInStock == 0}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductScreen;
