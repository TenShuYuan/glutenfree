import React from 'react';
import { Link } from 'react-router-dom';
import '../style/PurchasePage.css';
import iconcorn from "../images/menu-icons/icon-corn.png";
import crown1 from "../images/purchase/Catalog-crown1.png";
import crown2 from "../images/purchase/Catalog-crown2.png";
import crown3 from "../images/purchase/Catalog-crown3.png";
import pic1 from "../images/purchase/Catalog1.png";
import pic2 from "../images/purchase/Catalog2.png";
import pic3 from "../images/purchase/Catalog3.png";
import pic4 from "../images/purchase/Catalog4.png";
import pic5 from "../images/purchase/Catalog5.png";
import pic6 from "../images/purchase/Catalog6.png";


function PurchasePage() {
    return (
// 主要內容區 
<>
{/* <Header/> */}
    <section id="filter-main"> 
        <h3>商品類別篩選</h3><hr style={{ border: '0.3px solid #DDA25F' }} />
        <div className="tag">
            <div className="tag1">
                <Link to="/purchasePage/purchasePage1"><p>地中海</p></Link>
            </div>
            <div className="tag2">
                <Link to="/purchasePage/purchasePage1"><p>無麩質</p></Link>
            </div>
            <div className="tag3">
                <Link to="/purchasePage/purchasePage1"><p>生酮</p></Link>
            </div>
            <div className="tag4">
                <Link to="/purchasePage/purchasePage1"><p>無蛋奶</p></Link>
            </div>
            <div className="tag5">
                <Link to="/purchasePage/purchasePage1"><p>純素</p></Link>
            </div>
            <div className="tag6">
                <Link to="/purchasePage/purchasePage1"><p>無奶麩</p></Link>
            </div>
            <div className="tag7">
                <Link to="/purchasePage/purchasePage1"><p>無堅果</p></Link>
            </div>
            <div className="tag8">
                <Link to="/purchasePage/purchasePage1"><p>無澱粉</p></Link>
            </div>
        </div>

    </section>

    <section id="products-main" >
    <div className="title1">
        <img src={iconcorn} alt=""/>
        <h1>熱門商品</h1><p>- - - - - - - -</p><p>了解更多</p>
    </div>
        <div className="popular" >
            <figure className="part1" >
                <div>
                    <Link to="/purchasePage/purchasePagesub">
                        {/* <img className='buttonbuy' src={buttonbuy} alt="" /> */}
                        <img src={crown1} alt="pic1" />
                    </Link>
                </div>
                
                <div>
                    <Link to="/purchasePage/purchasePagesub">
                        <img src={crown2} alt="pic2" />
                    </Link>
                </div>            

                <div>
                    <Link to="/purchasePage/purchasePagesub">
                        <img src={crown3} alt="pic3" />
                    </Link>
                </div>            

                <div>
                    <Link to="/purchasePage/purchasePagesub">
                        <img src={crown1} alt="pic1" />
                    </Link>
                </div>            

                <div>
                    <Link to="/purchasePage/purchasePagesub">
                        <img src={crown2} alt="pic2" />
                    </Link>
                </div>            
            </figure>

            {/* <div className="dots" >
            <span className="dot1"></span>
            <span className="dot2"></span>
            <span className="dot3"></span> 
            </div> */}
        </div>   

        <div className="selected" >
          <div className="title2">
            <img src={iconcorn} alt=""/>
            <h1>精選商品</h1><p>- - - - - - - -</p><p>了解更多</p>
          </div>
            <figure className="part2" >
                <img src={pic1} alt="pic1" />
                <img src={pic2} alt="pic2" />
                <img src={pic3} alt="pic3" />
                <img src={pic4} alt="pic4" />
                <img src={pic5} alt="pic5" />
            </figure>

            <figure className="part3" >
                <img src={pic6} alt="pic6" />
                <img src={pic1} alt="pic1" />
                <img src={pic4} alt="pic4" />
                <img src={pic3} alt="pic3" />
                <img src={pic5} alt="pic5" />
            </figure>

            <figure className="part4" >
                <img src={pic5} alt="pic5" />
                <img src={pic6} alt="pic6" />
                <img src={pic1} alt="pic1" />
                <img src={pic2} alt="pic2" />
                <img src={pic3} alt="pic3" />
            </figure>
            
            <figure className="part5" >
                <img src={pic4} alt="pic4" />
                <img src={pic5} alt="pic5" />
                <img src={pic6} alt="pic6" />
                <img src={pic1} alt="pic1" />
                <img src={pic2} alt="pic2" />
            </figure>
        </div>
     </section>
    {/* <Footer/> */}
    </>
    );
}

export default PurchasePage;