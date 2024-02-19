// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/RecipePage.css';
import iconoil from "../images/menu-icons/icon-oil.png";
import cherry from "../images/recipe/cherry_no leg.png";
import soy from "../images/recipe/soy_no leg.png";
import bigheart from "../images/recipe/heart-hover.png";
import big from "../images/recipe/big.png";
import rec1big from "../images/recipe/rec1big.png";
import rec1 from "../images/recipe/rec1.png";
import rec2 from "../images/recipe/rec2.png";
import rec3 from "../images/recipe/rec3.png";
import rec4 from "../images/recipe/rec4.png";
import rec5 from "../images/recipe/rec5.png";
import rec6 from "../images/recipe/rec6.png";
import rec7 from "../images/recipe/rec7.png";
import rec8 from "../images/recipe/rec8.png";
import rec9 from "../images/recipe/rec9.png";
import rec10 from "../images/recipe/rec10.png";
import rec11 from "../images/recipe/rec11.png";
import rec12 from "../images/recipe/rec12.png";
import rec13 from "../images/recipe/rec13.png";
import rec14 from "../images/recipe/rec14.png";
import rec15 from "../images/recipe/rec15.png";
import rec16 from "../images/recipe/rec16.png";
import rec17 from "../images/recipe/rec17.png";
import rec18 from "../images/recipe/rec18.png";
import rec19 from "../images/recipe/rec19.png";
import rec20 from "../images/recipe/rec20.png";
import rec21 from "../images/recipe/rec21.png";
import rec22 from "../images/recipe/rec22.png";
import rec23 from "../images/recipe/rec23.png";
import rec24 from "../images/recipe/rec24.png";
import rec25 from "../images/recipe/rec25.png";



function RecipePage() {
    // const [showImage, setShowImage] = useState(false);
    // const handleClick = () => {
    //     setShowImage(!showImage);
    // };
    // const [heartImage, setHeartImage] = useState("./images/recipe/heart1.png");

// const handleClick = () => {
//     setHeartImage(prevImage => {
//         if (prevImage === "./images/recipe/heart1.png") {
//             return "./images/recipe/heart-hover.png";
//         } else {
//             return "./images/recipe/heart1.png";
//         }
//     });
// };
    return (
        <>
<section id="filter"> 
    <h3>食譜類別搜尋</h3><hr style={{ border: '0.3px solid #DDA25F' }} />
    <div class="tag">
        <div class="tag1">
        <Link to="/recipePage"><p>塔/派皮</p></Link>
        </div>
        <div class="tag2">
        <Link to="/recipePage"><p>餅乾</p></Link>
        </div>
        <div class="tag3">
        <Link to="/recipePage"><p>慕斯</p></Link>
        </div>
        <div class="tag4">
        <Link to="/recipePage"><p>糕點</p></Link>
        </div>
        <div class="tag5">
        <Link to="/recipePage"><p>麵包</p></Link>
        </div>
        <div class="tag6">
        <Link to="/recipePage"><p>冰品</p></Link>
        </div>
        <div class="tag7">
        <Link to="/recipePage2"><p>布丁/果凍</p></Link>
        </div>
        <div class="tag8">
        <Link to="/recipePage"><p>甜湯</p></Link>
        </div>
    </div>

</section>

{/* 主要內容區 */}
    <section id="cake">
        <p className="cherry"><img src={cherry} alt="" /></p>
        <p className="soy"><img src={soy} alt="" /></p>
        <div className='today-title'>
        <img src={iconoil} alt=""/>
        <h1>今日食譜</h1>
        </div>
        <div className="today">
            <Link to="/recipePage/recipePage1">
            <figure className="today1">
            <img className='big-heart' src={bigheart} alt="" />
                <img className='big' src={big} alt="" />
            </figure>
            </Link>
        </div>
        <div className='west-title'>
        <img src={iconoil} alt=""/>
        <h1>西式甜點</h1>
        </div>
        <div className="west">
            <figure className="west1">
                <img src={rec1big} alt="" />
            </figure>
            <figure className="west2">
                <p className="p1">
                <img src={rec1} alt="" />
                <img src={rec2} alt="" />
                <img src={rec3} alt="" />
                </p>
                <p className="p2">
                <img src={rec4} alt="" />
                <img src={rec5} alt="" />
                <img src={rec6} alt="" />
                </p>
            </figure>
        </div>
        <div className='east-title'>
        <img src={iconoil} alt=""/>
        <h1>中式甜點</h1>
        </div>
        <div className="east">
            <figure className="east1">
                <img src={rec7} alt="" />
                <img src={rec8} alt="" />
                <img src={rec9} alt="" />
                <img src={rec10} alt="" />
                <img src={rec11} alt="" />
            </figure>
            <figure className="east2">
                <img src={rec12} alt="" />
                <img src={rec13} alt="" />
                <img src={rec14} alt="" />
                <img src={rec15} alt="" />
                <img src={rec16} alt="" />
            </figure>
        </div>
        <div className='japanese-title'>
        <img src={iconoil} alt=""/>
        <h1>日式甜點</h1>
        </div>
        <div className="japanese">
            <figure className="japanese1">
                <img src={rec17} alt="" />
                <img src={rec18} alt="" />
                <img src={rec19} alt="" />
                <img src={rec20} alt="" />
                <img src={rec21} alt="" />
            </figure>
            <figure className="japanese2">
                <img src={rec22} alt="" />
                <img src={rec23} alt="" />
                <img src={rec24} alt="" />
                <img src={rec25} alt="" />
                <img src={rec25} alt="" />
            </figure>
        </div>
        <div className="seemore-btn">
        <a href="/" target="_self"><p>查看更多食譜</p></a>
        </div>
    </section>
    {/* <Footer/> */}
    </>
    );
}
export default RecipePage;