import React from 'react'
import logo from './assets/white.png'
import './style.css'; //Vì style này apply cho thằng này
//Em copy nhầm style à? răng style của thằng ni lại nằm bên kia?, vậy là nãy em đổi qua đổi về nên sai rồi...để em tự làm lại, vì em tắt 1 trong 2 bên thì được, nên em nói là nhầm file, xong em coppy qua 

//Bỏ ri mà k lỗi à, lì hấy, vkl code k format là rứa đó e... nhìn mù con mắt
const ChallengeTwo = ({ }) => {
  return (
    <div id="challenge-2" >
      <div className="smile-baybe">
        <section>
          <header className="masthead" id="head">
            <div className="mask-cover"></div>
            <div className="header-content">
              <nav id="mainNav">
                <div className="container">
                  <a className="logo" href="#"><img src={logo} alt="logo"></img></a>
                  <input className="menu-btn" type="checkbox" id="check"></input>
                  <label className="menu-icon" for="check">
                    <span className="navicon"></span>
                  </label>
                  <div className="nav-menu" id="nav-menu">
                    <ul className="nv menu" id="menu">
                      <li className="nav-item"><a className="nav-link" href="#">WHAT WE DO</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">RESEARCH</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">EVENTS</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">TAKE ACTION</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">REPORTS</a></li>
                    </ul>
                    <button className="donate">DONATE TO A CHILD</button>
                  </div>

                </div>
              </nav>
              <div className="container intro">
                <div className="intro-text">
                  <span>
                    <h1>For Every Child's Happiness</h1>
                  </span>
                  <p>At Zojie's foundation, our only focus is taking care of our children, seeing them grow to become the amazing human they want to be and see them also impact on the lives of their community.</p>
                  <span>
                    <button className="donate">DONATE TO A CHILD</button>
                    <button className="more">MORE ABOUT US</button>
                  </span>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-5">
                    <h3>3, 520</h3>
                    <div>Children Touched</div>
                  </div>
                  <div className="col-5">
                    <h3>5 Years</h3>
                    <div>Years Running</div>
                  </div>
                  <div className="col-5">
                    <h3>N800k</h3>
                    <div>Amount Raised</div>
                  </div>
                  <div className="col-5">
                    <h3>52</h3>
                    <div>Orphanage Homes</div>
                  </div>
                  <div className="col-5">
                    <h3>13 States</h3>
                    <div>Cities Touched</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>
        <section id="banner-item">
          <div className="parent">
            <div className="our-children">
              <div className="mask-cover"></div>
              <div className="content-item container">
                <h2>Our Children</h2>
                <p>With over 3,500 under our care we always aim in
                giving the best care, attention and love in creating the
                      home atmosphere for our children</p>
                <button>SEE OUR EVENTS</button>
              </div>
            </div>
            <div className="scholarships">
              <div className="mask-cover"></div>
              <div className="content-item container">
                <h2>Scholarships</h2>
                <p>Money raised from our bebefactors has been super amazing in us giving our children the most qualified educational institutions available.</p>
                <button>SPONSOR A CHILD</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}
export default ChallengeTwo
