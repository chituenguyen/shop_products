import React,{useEffect,useState} from "react";
import { Row, Col } from "react-bootstrap";
import Product from './../components/Product.js'
import axios from 'axios'


class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      products:[]
    }
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("/api/products/")
      .then((res) => this.setState({ products: res.data }))
      .catch((err) => console.log(err));
  };
  render() {
    var products=this.state.products
    return (
      <div>
        <h1>Latest Products</h1>
        <Row>{this.showProduct(products)}</Row>
      </div>
    );
  }
  showProduct=(products)=>{
      var result=null
      if(products.length>0){
          result=products.map((product,index)=>{
              return <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product}/>
              </Col>
          })
      }
      return result
  }
}


export default HomeScreen
