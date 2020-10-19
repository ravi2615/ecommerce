import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
// import img1 from "./img/Daya.jpg"
// import img2 from "./img/Jethalal.jpg"
// import img3 from "./img/Heath Ledger.jpg"
// import img4 from "./img/Rohit Sharma.jpg"
// import img5 from "./img/Rishi.jpg"
// import img6 from "./img/Irfan Khan.jpg"
// import img7 from "./img/Nawaz.jpg"
// import img8 from "./img/Hritik Roshan.jpg"
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-4 col-sm-6 col-lg-3 my-3">
        <div className="card bg-dark">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src= {img} alt="" className="card-img-top" height= "200vh" width="20rem" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fa fa-cart-plus" />
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between bg-secondary">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="font-italic mb-0">
              <span className="mr-1">Rs</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

// Product.propTypes = {
//     product: PropTypes.shape({
//         id:PropTypes.number,
//         img:PropTypes.string,
//         title:PropTypes.string,
//         price:PropTypes.number,
//         inCart:PropTypes.bool
//     }).isRequired
// };

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
    border:0.2rem solid #FAC42F;
    box-shadow:2px 2px 0.5rem 0px #FAC42F;
}
.card-footer{
    // background:transparent;
    border-top: transparent;
    tranisition:all 1s linear;
}
&:hover{
    .card{
        // border:0.04rem solid rgba(0,0,0,0.2);
        border:0.2rem solid #FAC42F;
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: #FAC42F !important;
        color: #192A56;
        font-size: 1.5rem;
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top {
    transform: scale(1.3);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border:none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color: var(--mainBlue);
    cursor:pointer;
}
`;