import React from 'react';
import { Link } from 'react-router-dom';
import '../style/RecipePage2.css';
import blueberry_2 from "../images/recipe_2/blue4.png";
import strawberry_2 from "../images/recipe_2/strawberry.png";
import big_2 from "../images/recipe_2/big.png";
import rec1big from "../images/recipe_2/rec1big.png";
import rec1 from "../images/recipe_2/rec1.png";
import rec2 from "../images/recipe_2/rec2.png"; 
import rec3 from "../images/recipe_2/rec3.png"; 
import rec4 from "../images/recipe_2/rec4.png";
import rec5 from "../images/recipe_2/rec5.png";
import rec6 from "../images/recipe_2/rec6.png";   
import rec7 from "../images/recipe_2/rec7.png"; 
import rec8 from "../images/recipe_2/rec8.png"; 
import rec9 from "../images/recipe_2/rec9.png"; 
import rec10 from "../images/recipe_2/rec10.png"; 
import rec11 from "../images/recipe_2/rec11.png";
import rec12 from "../images/recipe_2/rec12.png";  
import rec13 from "../images/recipe_2/rec13.png"; 
import rec14 from "../images/recipe_2/rec14.png"; 
import rec15 from "../images/recipe_2/rec15.png"; 
import rec16 from "../images/recipe_2/rec16.png"; 
import rec17 from "../images/recipe_2/rec17.png"; 
import rec18 from "../images/recipe_2/rec18.png"; 
import rec19 from "../images/recipe_2/rec19.png"; 
import rec20 from "../images/recipe_2/rec20.png"; 
import rec21 from "../images/recipe_2/rec21.png";
import rec22 from "../images/recipe_2/rec22.png";
import rec23 from "../images/recipe_2/rec23.png";
import rec24 from "../images/recipe_2/rec24.png";
import rec25 from "../images/recipe_2/rec25.png";
import rec26 from "../images/recipe_2/rec26.png";
import iconoil from "../images/menu-icons/icon-oil.png";

function RecipePage2() {
    return (
        <>
<section id="filter_2"> 
    <h3>食譜類別搜尋</h3><hr style={{ border: '0.3px solid #DDA25F' }} />
    <div class="tag_2">
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
        <Link to="/recipePage"><p>布丁/果凍</p></Link>
        </div>
        <div class="tag8">
        <Link to="/recipePage"><p>甜湯</p></Link>
        </div>
    </div>

</section>

{/* 主要內容區 */}
    <section id="jelly">
        <p className="blueberry_2"><img src={blueberry_2} alt="" /></p>
        <p className="strawberry_2"><img src={strawberry_2} alt="" /></p>
        <div className='today-title2'>
        <img src={iconoil} alt=""/>
        <h1>今日食譜</h1>
        </div>
        <div className="today_2">
            <Link to="/recipePage/recipePage1">
            <figure className="today1_2">
                <img className='big-heart' src="./images/recipe/heart.png" alt="" />
                <img className='big_2' src={big_2} alt="" />
            </figure>
            </Link>
        </div>
        <div className='west-title2'>
        <img src={iconoil} alt=""/>
        <h1>西式甜點</h1>
        </div>
        <div className="west_2">
            <figure className="west1_2">
                <img src={rec1big} alt="" />
            </figure>
            <figure className="west2_2">
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
        <div className='east-title2'>
        <img src={iconoil} alt=""/>
        <h1>中式甜點</h1>
        </div>
        <div className="east_2">
            <figure className="east1_2">
                <img src={rec7} alt="" />
                <img src={rec8} alt="" />
                <img src={rec9} alt="" />
                <img src={rec10} alt="" />
                <img src={rec11} alt="" />
            </figure>
            <figure className="east2_2">
                <img src={rec12} alt="" />
                <img src={rec13} alt="" />
                <img src={rec14} alt="" />
                <img src={rec15} alt="" />
                <img src={rec16} alt="" />
            </figure>
        </div>
        <div className='japanese-title2'>
        <img src={iconoil} alt=""/>
        <h1>日式甜點</h1>
        </div>
        <div className="japanese_2">
            <figure className="japanese1_2">
                <img src={rec17} alt="" />
                <img src={rec18} alt="" />
                <img src={rec19} alt="" />
                <img src={rec20} alt="" />
                <img src={rec21} alt="" />
            </figure>
            <figure className="japanese2_2">
                <img src={rec22} alt="" />
                <img src={rec23} alt="" />
                <img src={rec24} alt="" />
                <img src={rec25} alt="" />
                <img src={rec26} alt="" />
            </figure>
        </div>
        <div className="seemore-btn_2">
        <a href="/" target="_self"><p>查看更多食譜</p></a>
        </div>
    </section>
    {/* <Footer/> */}
    </>
    );
}
export default RecipePage2;