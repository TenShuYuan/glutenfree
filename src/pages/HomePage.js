import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import banner from "../images/banner/banner-20240211_v2.gif";
import '../style/HomePage.css';
import aboutusavocado from "../images/pic-with-shadow/avocado.png";
import aboutuscashew from "../images/pic-with-shadow/cashew.png";
import iconrice from "../images/menu-icons/icon-rice.png";
import iconyam from "../images/menu-icons/icon-yam.png";
import iconveg from "../images/menu-icons/icon-veg.png";
import knowledge from "../images/3functions/pic_knowledge.png";
import purchase from "../images/3functions/pic_purchase.png";
import recipe from "../images/3functions//pic_recipe.png";
import blue from "../images/pic-with-shadow/4blueberry.png";
import toppic1 from "../images/about-gluten-mainpage/what-is-gluten1.png";
import squareblock from "../images/bg-blocks/bgsquare1.png";
import toppic2 from "../images/about-gluten-mainpage/gluten-ill2.png";
import pathegg from "../images/pic-with-shadow/egg.png";
import bottompic1 from "../images/about-gluten-mainpage/gluten-food3.png";
import bottompic2 from "../images/about-gluten-mainpage/how-to-eat4.png";
import roundblock from "../images/bg-blocks/bground2.png";


function Homepage() {
  const ref = useRef();
  const handleClick =()=>{
    ref.current?.scrollIntoView({behavior:"smooth"})
  }
    return (
// <!-- 關於首頁內容 -->
    <>
    {/* <div></div> */}
    <button style={{marginTop:100,marginLeft:530, fontSize:30, color: '#fffcf5', backgroundcolor: '#fffcf5',}} 
    onClick={handleClick}>關於我們</button>

    {/* <!-- 換圖輪播 --> */}
    <section  id="banner" >
      <div className="content-slider" >
            {/* <!-- <div class="banner-inner-wrapper"> --> */}
            <figure>
              <img src={banner} alt="" />
            </figure>
        </div>
    </section>

<section ref={ref} style={{height:200,}}></section>
    <section  id="aboutus">
      {/* <img className="aboutus-yam" src="./images/pic-with-shadow/avocado.png" alt=""/>
      <img className="aboutus-cashew" src="./images/pic-with-shadow/cashew.png" alt=""/> */}
      {/* <h2 className="title ">
        <img src="./images/menu-icons/icon-rice.svg" alt=""/>
        關於我們
        <img src="./images/menu-icons/icon-rice.svg" alt="" />
      </h2> */}
      <div  className="title ">
        <img src={iconrice} alt=""/>
        <h2 >關於我們</h2>
        <img src={iconrice} alt="" />
      </div>
      {/* <!-- div.list-box>artical.list-item*3>a>figure+h3+p --> */}
      {/* <!-- <div class="list-box"> --> */}
      <div className='aboutus-content'>
        <img className="aboutus-avocado" src={aboutusavocado} alt=""/>
        <img className="aboutus-cashew" src={aboutuscashew} alt=""/>

        <p>台灣目前也還沒有相關整合資訊的平台，網路上無麩質的資訊零散不齊全、要找到無麩質的商品和餐廳，並不是件容易的事。
        通常當你需要找符合條件的無麩質資訊時會上網搜尋一些關鍵字，但是出現的大量搜尋結果可能會非常難以消化。我們看到了
        這些機會點，藉此想幫助這些人更輕鬆有效的找到合適的無麩質資訊、商品管道和食譜分享， 這就是我們 ” 無麩世代” 的開始。</p>

      </div>
    </section>

    {/* <!-- 三大服務的圖片 --> */}
    <section id="threeimages">
      {/* <h2 className="title">
        <img src="./images/menu-icons/icon-veg.svg" alt="" />
        我們的3大服務
        <img src="./images/menu-icons/icon-veg.svg" alt="" />
      </h2> */}
      <div className="title">
        <img src={iconveg} alt="" />
        <h2>我們的3大服務</h2>
        <img src={iconveg} alt="" />
      </div>
      <ul className="image">
        <li className="knowledge">
          <img src={knowledge} alt="" />
          <h4>豐富知識</h4>
        </li>
        <li className="purchase">
          <img src={purchase} alt="" />
          <h4>購買管道</h4>
        </li>
        <li className="recipe">
          <img src={recipe} alt="" />
          <h4>多元食譜</h4>
        </li>
      </ul>
    </section>

    {/* <!-- 無麩質教室快捷鍵區 --> */}
    <section id="aboutgluten-path">
      <div className="title">
        <img src={iconyam} alt="" />
        <h2>麩質教室</h2>
        <img src={iconyam} alt="" />
      </div>
      <div className="top">
        <div className="top1">
          <img className="path-bluberry" src={blue} alt="" />
          <Link to="/aboutGlutenPage">
            <img className='toppic1' src={toppic1} alt="" />
            <p>什麼是麩質?</p>
          </Link>
          <img className="square-block" src={squareblock} alt="" />
        </div>
        <div className="top2">
        <Link to="/aboutGlutenPage">
          <img className='toppic2' src={toppic2} alt="" />
          <p>麩質的症狀?</p>
        </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom1">
          <img className="path-egg" src={pathegg} alt="" />
        <Link to="/aboutGlutenPage">
          <img className='bottompic1' src={bottompic1} alt="" />
          <p>無麩質飲食?</p>
        </Link>
        </div>
        <div className="bottom2">
        <Link to="/aboutGlutenPage">
          <img className='bottompic2' src={bottompic2} alt="" />
          <p>無麩質迷思?</p>
        </Link>
          <img className="round-block" src={roundblock} alt="" />
        </div>
      </div>
      </section>
    </>
    );
}

export default Homepage;