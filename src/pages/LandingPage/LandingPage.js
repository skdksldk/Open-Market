import React, { useEffect, useState }  from 'react';
import clayful from 'clayful/client-js';
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
    var Product = clayful.Product;
    const [items, setItems] = useState([]);
  
    useEffect(() => {
    var options = {
        query: {
            page: 1,
        },
    };

    Product.list(options, function(err, response) {

        if (err) {
            console.log(err.code);
            console.log(err.message);
            return;
        }
        console.log(response.data);
        setItems(response.data);
        });
    }, []);
    
    const renderCards = items.map((item) => {
        if (item) {
          return (
            <div key={item._id} className="grid-product">
              <Link to={`/product/${item._id}`}>
                <img src={item.thumbnail.url} alt={item.name} />
                <div className="grid-detail">
                  <p>{item.name}</p>
                  <p> From {item.price.original.formatted}</p>
                </div>
              </Link>
            </div>
          );
        }
    });

    return (
        <div>
        <section className="welcome">
          <h1>좋아하는 MUZI 제품을 구입하는 가장 좋은 방법</h1>
        </section>
    
        <section className="product-grid">
          <div className="grid-container">
            <h2>Product</h2>
          <div className="grid">{renderCards}</div>
        </div>
      </section>

      <section className="first-hightlight-wrapper">
        <div className="container">
         <div className="new-alert"></div>
          <div className="title-wraper bold black">코딩하는 MUZI</div>

          <div className="description-wrapper black">
            MUZI랑 코딩하면 모든 상품 무료에요
          </div> 
        </div>
      </section>
    
      <section className="second-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">Christmas Board</div>
                <div className="description-wraper">
                 
                </div>
                <div className="price-wrapper">
                   Go Shopping
                </div>

                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">
                  Christmas Star
                </div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href="/">Go Shopping</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                 
                </div>

                <div className="watch-more-wrapper">
                  <a href="/">Sharing Is The Best Gift
                  You Can Give</a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                 
                </div>
                <div className="description-wraper">
                  Send A Gift For Christmas
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Love</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                 
                </div>
                <div className="description-wraper white">
                  Cable Cap is a great battery charger
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">
                        Play now<sup>2</sup>
                      </a>
                    </li>
                    <li>
                      <a href="/">Learn about Cable Cap</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">
                    Christmas Santa
                </div>
                <div className="description-wraper">
                Sharing these holidays is the best gift you can give, give a present or share your love with the people you love the most and celebrate with great happiness.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Buy now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

  

export default LandingPage;