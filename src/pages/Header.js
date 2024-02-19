// import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import logo from "../images/logo/LOGO-GLUTENFREE.ico";

function Header() {
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash === "#aboutus") {
  //     const element = document.getElementById(hash.replace('#', ''));
  //     if (element) {
  //       element.scrollIntoView();
  //     }
  //   }
  // }, []);
    return (<>
<header id="topbar">
    <h1 className="logo">
        <Link to="/">
            <img src={logo} alt="無麩世代logo" />
        </Link>
    </h1>
    <section className="nav_box">
      <nav>
        <div className="menu">
          <div className="menu-aboutus">
            <p><img src="./images/menu-icons/icon-egg.svg" alt="" /></p>
            <ul className="menu-aboutus-text">
            <Link to="/#aboutus" >關於我們<br />About us</Link>
            </ul>
          </div>
          <div className="menu-aboutgluten">
            <p><img src="./images/menu-icons/icon-oil.svg" alt="" /></p>
            <ul className="menu-aboutgluten-text">
              <li><Link to="/aboutGlutenPage">麩質教室<br />About gluten</Link>
                <ul className="dropgluten">
                  <li><Link to="/aboutGlutenPage">什麼是麩質</Link></li>
                  <li><Link to="/aboutGlutenPage2">麩質的症狀</Link></li>
                  <li><Link to="/aboutGlutenPage">無麩質飲食</Link></li>
                  <li><Link to="/aboutGlutenPage">無麩質迷思</Link></li>
                </ul> 
              </li>
            </ul>
          </div>
          <div className="menu-purchase">
            <p><img src="./images/menu-icons/icon-corn.svg" alt="" /></p>
            <ul className="menu-purchase-text">
              <li>購買管道<br />Purchase
                <ul className="droppurchase">
                <li><Link to="/purchasePage">線上商城</Link></li>
                <li><Link to="/purchasePage2">實體通路</Link></li>
                </ul> 
            </li>
            </ul>
          </div>
          <div className="menu-recipe">
            <p><img src="./images/menu-icons/icon-yam.svg" alt="" /></p>
            <ul className="menu-recipe-text">
              <li><Link to="/recipePage">食譜分享<br />Recipe</Link>
                  <ul className="droprecipe">
                    <li><Link to="/recipePage">正餐食譜</Link></li>
                    <li><Link to="/recipePage">烘焙食譜</Link></li>
                    <li><Link to="/recipePage">專家食譜</Link></li>
                  </ul>
                </li>
            </ul>
            </div>
          
          <div className="menu-comminity">
            <p><img src="./images/menu-icons/icon-rice.svg" alt="" /></p>
            <ul className="menu-comminity-text"><a href="#community">
            <Link to="/communityPage">無麩友社群<br />Community</Link>
              </a>
            </ul>
          </div>
        </div>
       
      
        <div className="menu2">
          <div className="search">
            <img src="./images/menu-icons/search-btn.svg" alt="" />
          </div>
          <div className="account">
            <img src="./images/menu-icons/account-btn.svg" alt="" />
          </div>
          <div className="cart">
            <img src="./images/menu-icons/cart-btn.svg" alt="" />
          </div>
        </div> 
        </nav>  
    </section>
    </header>
    </>
    );
}


export default Header;