import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import Rating from "./../components/Rating";
import axios from "axios";

class CartScreen extends React.Component {
  constructor(props) {
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
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    var { match,location } = this.props;
    var qty=location.search ? Number(location.search.split("=")[1]):0;
    axios
      .get(`/api/products/${match.params.id}`)
      .then((res) => this.setState({ product: res.data,quantity:qty }))  
      .catch((err) => console.log(err));
  };

  render() {
      return <div></div>
  }
}

export default CartScreen;
