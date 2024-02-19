import React from 'react';
import { Link } from 'react-router-dom';
import '../style/PurchasePage1.css';
import crown1 from "../images/purchase/Catalog-crown1.png";
import crown2 from "../images/purchase/Catalog-crown2.png";
import crown3 from "../images/purchase/Catalog-crown3.png";
import catalog1 from "../images/purchase/Catalog1.png";
import catalog2 from "../images/purchase/Catalog2.png";
import catalog3 from "../images/purchase/Catalog3.png";
import catalog4 from "../images/purchase/Catalog4.png";
import catalog5 from "../images/purchase/Catalog5.png";
import catalog6 from "../images/purchase/Catalog6.png";
import catalog7 from "../images/purchase/Catalog7.png";
import cornicon from "../images/recipe1/menu-icons/icon-corn.png";

function PurchasePage1() {
    return (
// 主要內容區 
<>
    <section id="filter-sub"> 
        <h3>商品類別篩選</h3><hr style={{ border: '0.3px solid #DDA25F' }} />
        <div className="tag">
            <div className="tag1">
                <Link to="/purchasePage"><p>地中海</p></Link>
            </div>
            <div className="tag2">
                <Link to="/purchasePage"><p>無麩質</p></Link>
            </div>
            <div className="tag3">
                <Link to="/purchasePage"><p>生酮</p></Link>
            </div>
            <div className="tag4">
                <Link to="/purchasePage"><p>無蛋奶</p></Link>
            </div>
            <div className="tag5">
                <Link to="/purchasePage"><p>純素</p></Link>
            </div>
            <div className="tag6">
                <Link to="/purchasePage"><p>無奶麩</p></Link>
            </div>
            <div className="tag7">
                <Link to="/purchasePage"><p>無堅果</p></Link>
            </div>
            <div className="tag8">
                <Link to="/purchasePage"><p>無澱粉</p></Link>
            </div>
        </div>
    </section>

    <section id="products-sub" >
        <div className="popular" >
            <figure className="part1" >
                <img src={catalog7} alt="crown1" />
                <img src={crown2} alt="crown2" />
                <img src={catalog6} alt="crown3" />
                <img src={crown3} alt="crown1" />
                <img src={catalog4} alt="crown2" />
            </figure>
        </div>   

        <div className="selected" >
          <div className="title2">
            <img src={cornicon} alt="cornicon"/>
            <h1>精選商品</h1><p>- - - - - - - -</p><p>了解更多</p>
          </div>
            <figure className="part2" >
                <img src={catalog2} alt="pic2" />
                <img src={crown1} alt="crown1" />
                <img src={catalog3} alt="pic3" />
                <img src={catalog1} alt="pic1" />
                <img src={catalog5} alt="pic5" />
            </figure>

            <figure className="part3" >
                <img src={catalog6} alt="pic6" />
                <img src={catalog7} alt="pic7" />
                <img src={catalog2} alt="pic2" />
                <img src={crown3} alt="crown3" />
                <img src={catalog7} alt="pic7" />
            </figure>

            <figure className="part4" >
                <img src={catalog7} alt="pic7" />
                <img src={catalog5} alt="pic5" />
                <img src={crown1} alt="crown1" />
                <img src={catalog6} alt="pic6" />
                <img src={crown2} alt="crown5" />
            </figure>
            
            <figure className="part5" >
                <img src={crown3} alt="crown3" />
                <img src={catalog4} alt="pic4" />
                <img src={catalog2} alt="pic2" />
                <img src={catalog1} alt="pic1" />
                <img src={catalog7} alt="pic7" />
            </figure>
        </div>
     </section>
    {/* <Footer/> */}
    </>
    );
}

export default PurchasePage1;