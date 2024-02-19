import React, { useState } from "react";
import "../style/PurchasePagesub.css";
import addcart from "../images/purchase_sub/addcart.png";
import bread from "../images/purchase_sub/bread.png";
import icon1 from "../images/purchase_sub/icon1.png";
import icon2 from "../images/purchase_sub/icon2.png";
import icon3 from "../images/purchase_sub/icon3.png";
import icon4 from "../images/purchase_sub/icon4.png";
import addcarthover from "../images/purchase_sub/addcarthover.png";
import nuts from "../images/purchase_sub/nuts.png";
import arrow from "../images/purchase_sub/arrow.png";

function PurchasePagesub() {
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="product">
      <div className="content">
        <div className="pic_bread">
          <img src={bread} alt="" />
        </div>
        <div className="text">
          <h1>香料番茄醬(全素)</h1>
          <p className="price">NT$780</p>
          <hr style={{ border: "0.3px dashed #DDA25F" }} />
          <p className="ingredient">
            <strong>尺寸:</strong> 50x30cm <br />
            <strong>品牌:</strong> 棉花花 <br />
            <strong>認證:</strong> 國際有機天然食品認證 <br />
            <strong>成份:</strong>{" "}
            亞麻仁、椰子粉、米穀粉、玫瑰鹽、天然酵母、天然奶油 <br />
            橄欖油、黑胡椒、孜然粉、白芝麻、綜合堅果、阿拉伯糖
          </p>
          <figure className="icons">
            <img className="icon1" src={icon1} alt="" />
            <img className="icon2" src={icon2} alt="" />
            <img className="icon3" src={icon3} alt="" />
            <img className="icon4" src={icon4} alt="" />
          </figure>
          <hr style={{ border: "0.3px dashed #DDA25F" }} />
          <div className="buy">
            <div className="quantity">
              <button onClick={() => setCount(count - 1)}>-</button>
              <input type="number" value={count} readOnly />
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <figure
              className="addcart"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src={isHovered ? addcarthover : addcart} alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="descript1">
        <hr style={{ border: "0.3px dashed #DDA25F" }} />
        <h2>商品介紹</h2>
        <p>
          ▎香蕉布朗尼我們的香蕉布朗尼蛋糕-它不僅是一款無麩質、無奶蛋的素食選擇，還擁有豐富的營養和令人驚艷的口感。與經典布朗尼一樣，我們的布朗尼蛋糕散發著濃郁的
          <br />
          巧克力香氣，
          但我們以黑豆取代麵粉，打破了傳統布朗尼的製作方法，創造出令人驚艷的口感。黑豆與可可和諧融合，質地濃郁而豐富，完美匹配傳統布朗尼的稠度和質地，{" "}
          <br />
          同時保留著獨特的風味。
          為了提升布朗尼的質地和味道，我們在中間添加了自製的巧克力醬和新鮮香蕉，為布朗尼增添了額外的營養價值和類似奶油的質感。此外，我們還{" "}
          <br />
          加入了核桃碎，讓布朗尼的口感更加豐富，並增添堅果香氣。
          無論您是否有蛋、奶、麩質飲食限制，我們的布朗尼都是一款更健康的完美的替代甜點，每一口都能滿足您對{" "}
          <br />
          美味甜點的需求。
        </p>
      </div>
      <div className="descript2">
        <hr style={{ border: "0.3px dashed #DDA25F" }} />
        <h2>食品資訊</h2>
        <div className="descript2-2">
          <div className="text">
            <p>
              ▎賞味期限:製造日期後 14 天 <br />
              ▎過敏原:黃豆、堅果
              <br />
              ▎保存方法:冷凍
              <br />
              ▎內容物:黑豆、可可粉、核桃、香蕉、椰糖、椰子油、亞麻籽、香草精、無鋁泡打粉。
              <br />
              ▎內容量:850g x 1<br />
              ▎廠商名稱:harbor market
              <br />
              ▎廠商電話:02-27859230
              <br />
              ▎廠商地址:台北市信義區永吉路278巷58弄6號
              <br />
              ▎食品業者登錄字號:A-188304302-00000-6
            </p>
          </div> 
          <img className="arrow" src={arrow} alt="" />
          <div className="nuts">
            <img className="nuts" src={nuts} alt="" />
            <p>▎取自純天然無麩質有機綜合堅果製作</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PurchasePagesub;
