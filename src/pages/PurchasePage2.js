import React from 'react';
import { Link } from 'react-router-dom';
import '../style/PurchasePage2.css';
import pur_egg2 from "../images/purchase2/egg.png";
import pur_soy2 from "../images/purchase2/soybean2.png";
import pur_blueberry2 from "../images/purchase2/4blueberry.png";
import pur_walnut2 from "../images/purchase2/walnut.png";
import pur_cherry2 from "../images/purchase2/cherry1.png";
import pur_blackcherry2 from "../images/purchase2/cherry2.png";
import pur_single2 from "../images/purchase2/1blueberry.png";
import pic1 from "../images/purchase2/restaurant2.png";
import map from "../images/purchase2/Map_Pin.png";
import phone from "../images/purchase2/Phone.png";
import time from "../images/purchase2/Clock.png";
import pic2 from "../images/purchase2/restaurant3.png";
import pic3 from "../images/purchase2/restaurant1.png";
import pic4 from "../images/purchase2/restaurant4.png";

function PurchasePage2() {
    return (
<>
<section id="filter-second"> 
    <h3>通路類別篩選</h3><hr style={{border: '0.3px solid #DDA25F' }}/>
    <div className="tag">
        <div className="tag1">
            <Link to="/purchasePage2"><p>超市</p></Link>
        </div>
        <div className="tag2">
            <Link to="/purchasePage2"><p>有機商店</p></Link>
        </div>
        <div className="tag3">
            <Link to="/purchasePage2"><p>私人盤商</p></Link>
        </div>
        <div className="tag4">
            <Link to="/purchasePage2"><p>餐廳</p></Link>
        </div>
        <div className="tag5">
            <Link to="/purchasePage2"><p>原物料行</p></Link>
        </div>
        <div className="tag6">
            <Link to="/purchasePage2"><p>咖啡廳</p></Link>
        </div>
        <div className="tag7">
            <Link to="/purchasePage2"><p>飲料店</p></Link>
        </div>
    </div>
</section>
<section id="restaurant">
    <div className="restaurant1"> 
        <div className='pur_egg2'><img src={pur_egg2} alt="" /></div>
            <div><img className='pic1' src={pic1} alt="" /></div>
            <div className="text1">
            <h3>歐嬤德式美食 (辛亥總店 ) <br /> Oma`s German Bakery</h3>
            <ul className="oma-map">
                <img src={map} alt=""/>
                <p>106台北市大安區辛亥路一段46號 </p>
            </ul>
            <ul className="oma-phone">
                <img src={phone} alt=""/>
                <p>0223620611<button className='map1'>查看地圖</button></p>
            </ul>
            <ul className="oma-time">
                <img src={time} alt="" />
                <p>08:00~20:30</p>
            </ul>
                <br />
                
                <p>無麩質販售品項: <br />
                    1. 紅蘿蔔肉桂蛋糕<br />
                    2. 蔓越莓堅果餅乾<br /> 
                    3. 腰果義式脆餅<br />
                    4. 麵包(蕎麥、藜麥、紅蘿蔔堅果)
                </p>
            </div>
    </div>
    <div className="restaurant2">
    <div className='pur_soy2'><img src={pur_soy2} alt="" /></div>
    <div className='pur_walnut2'><img src={pur_walnut2} alt="" /></div>
            <p><img className='pic2' src={pic2} alt="" /></p>
            <div className="text2">
                <h3>撒福豆無麩質蔬食廳 (忠孝店)</h3>
                <ul className="safudo-map">
                    <img src={map} alt=""/>
                    <p>106台北市大安區忠孝東路四段216巷16號</p>
                </ul>
                <ul className="safudo-phone">
                    <img src={phone} alt=""/>
                    <p>0223620611<button className='map2'>查看地圖</button></p>
                </ul>
                <ul className="safudo-time">
                    <img src={time} alt=""/>
                    <p>08:00~20:30</p>
                </ul>
                <br />
                <p>無麩質販售品項: <br />
                  1. 雪粉  2. 壽司輕食  3. 撒福豆勝丼  4. 全素咖哩飯 <br /> 
                  5. 舒芙蕾   6. 豆乳捲  7. 豆乳布丁 8. 玫瑰塔 <br /> 
                  9. 米麴飲料  10. 植物油   11. 豆乳  12. 藜麥 
                </p>
          </div>
    </div>
    <div className="restaurant3">
    <div className='pur_blueberry2'><img src={pur_blueberry2} alt="" /></div>
    <div className='pur_cherry2'><img src={pur_cherry2} alt="" /></div>
      <p><img className='pic3' src={pic3} alt="" /></p>
      <div className="text3">
          <h3>M One Cafe (大安館)</h3>
          <ul className="monecafe-map">
              <img src={map} alt=""/>
              <p>106台北市大安區仁愛路四段27巷6-1號</p>
          </ul>
          <ul className="monecafe-phone">
              <img src={phone} alt=""/>
              <p>0287732136<button className='map3'>查看地圖</button></p>
          </ul>
          <ul className="monecafe-time">
              <img src={time} alt=""/>
              <p>07:30~22:00</p>
          </ul>
          <br />
          <p>無麩質販售品項: <br />
            1. 米福堡  2. 米包  3. 班尼迪克蛋  4. 燕麥優格<br />  
            5. 手工薯絲  6. 新鮮海鮮  7. 有機蔬菜  8. 健康飲品
            </p>
    </div>
    </div>
    <div className="restaurant4">
    <div className='pur_blackcherry2'><img src={pur_blackcherry2} alt="" /></div>
    <div className='pur_single2'><img src={pur_single2} alt="" /></div>
      <p><img className='pic4' src={pic4} alt="" /></p>
      <div className="text4">
          <h3>吐司利亞 TOASTERiA CAFE (永康店)</h3>
          <ul className="toast-map">
              <img src={map} alt=""/>
              <p>106台北市大安區信義路二段200號</p>
          </ul>
          <ul className="toast-phone">
              <img src={phone} alt=""/>
              <p>0223210073<button className='map4'>查看地圖</button></p>
          </ul>
          <ul className="toast-time">
              <img src={time} alt=""/>
              <p>09:00~00:00</p>
          </ul>
          <br />
          <p>無麩質販售品項: <br />
            1. 米吐司  2. PlantA 植人燕麥奶  3. HUMMUS <br />
            4. 沙拉    5. SHAKSHUKA  6. 地中海早餐
            </p>
    </div>
    </div>
   </section> 
</>
);
}
export default PurchasePage2;