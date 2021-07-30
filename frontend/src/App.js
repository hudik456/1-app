import React from'react';
import data from'./data'
function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div> <a className="brand" href="/"> Dostluk</a> </div>
                <div><a href="/cart">cart</a>
                    <a href="/signin">Sign in</a></div></header>
            <main>
              <div> 
              <div className="row center">
                {
                  data.products.map((product) =>(
                    <div key={product._id} className="cart">
                        <a href={'/product/{product_id}'}>
                            <img className="medium" src={product.image} alt={product.name} />
                        </a>
                        <div className="cart-body">
                        <a href={'/product/{product_id}'}>
                                <h2>{product.name}</h2>
                                </a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                </div>
                    <div className="price">{product.price}</div> 
                </div>
            </div>
                  ))
                }      
        </div>
        </div>
            </main>
            <footer className="row center">All rigt reserved</footer>
        </div>
         );
}

export default App;
