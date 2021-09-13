import React, { Fragment } from 'react'
import lady from './images/lady.jpg';
import flower from './images/flower.jpg';

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <header className="header-area">
                <nav class="navbar navbar-expand-lg navbar-light c-nav">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ml-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/">About us</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/">Articles</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Photos
                        </a>
                        <div class="dropdown-menu d-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="/">Photo 1</a>
                          <a class="dropdown-item" href="/">Photo 2</a>
                          <a class="dropdown-item" href="/">Photo 3</a>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/">Link</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="title-area text-center">
                  <h1>Your Site Name Here</h1>
                  <p>Your Slogan Comes Here</p>
                </div>
            </header>
          </div>
          <div className="col-md-6 img-bg">
            <div className="side-images">
              <div className="s-image">
                <img className="img-fluid" src={flower} alt="" />
              </div>
              <div className="s-image">
                <img className="img-fluid" src={lady} alt="" />
              </div>
              <div className="s-image">
                <img className="img-fluid" src={flower} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 mid-left-bgcol">
            <div className="container ">
              <div className="l-headings">
                <h1>Website Add-ons</h1>
                <p>Checkout out our easy to <br /> integrate Web Site Add-ons</p>
              </div>
              <div className="l-list">
                <ul>
                  <li>Smart Survey</li>
                  <li>Smart Multi Roll</li>
                  <li>Smart Roll</li>
                  <li>Smart Guest Book</li>
                  <li>Smart Quote</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-9 mid-right-bgcol">
            <div className="container ">
                <div className="r-heading">
                  <h1>Features of this CSS Personal/ General Template</h1>
                </div>

                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                        <div className="r-list">
                        <ul>
                          <li>Attractive general or personal web site design using bright colors</li>
                          <li>Optimised, fast-loading and W3C certified valid CSS & HTML code</li>
                          <li>Easy to edit Text Link with easy-to-use Drop-down Menus</li>
                          <li>Tableless layout CSS design. All <strong> 11 </strong> linked HTML pages</li>
                          <li>Cross Browser Compatible - <span>Tested for IE 5+, Netscape 5+, Opera 7+, Firefox 1.0+</span></li>
                          <li>Designed to strech and fit all resolutions ( 800 x 600 and higher )</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                </div>

                

                <div className="r-buy-link mt-5">
                  <h1><span>Buy Now</span> for only <strong>$59.65</strong>! <a href="/">Add to Cart</a></h1>
                </div>

                <div className="r-desc mt-4">
                  <p>Smart Weebly offers proffesional web templates at affordable prices. Choose from a variety of high quality websites designs to find the perfect template for your line of bussiness. <a href="/">More Templates from SmartWeebly.com</a></p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <footer>
          <div className="copyright text-center my-4">
            <p>Copyright © www.yoursitename.com - All Rights Reserved. Designed by SmartWeebly.com</p>
          </div>
        </footer>
      </div>
    </Fragment>
  )
}

export default App
