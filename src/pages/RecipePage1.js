import "../style/RecipePage1.css";
import soy_leg2 from "../images/recipe1/soy_no leg2.png";
import cherry_leg2 from "../images/recipe1/cherry_no leg2.png";
import main_pic from "../images/recipe1/main4.jpg";
import heart3 from "../images/recipe1/heart3.png";
import yam_noleg from "../images/recipe1/yam-no leg.png";
import rec1 from "../images/recipe1/rec1.png";
import rec2 from "../images/recipe1/rec2.png";
import rec3 from "../images/recipe1/rec3.png";
import rec4 from "../images/recipe1/rec4.png";
import rec5 from "../images/recipe1/rec5.png";
import rec6 from "../images/recipe1/rec6.png";
import rec7 from "../images/recipe1/rec7.png";
import rec8 from "../images/recipe1/rec8_2.png";
import more1 from "../images/recipe1/more1.png";
import more2 from "../images/recipe1/more2.png";
import more3 from "../images/recipe1/more3.png";
import more4 from "../images/recipe1/more4.png";
import more5 from "../images/recipe1/more5.png";

function RecipePage1() {
  return (
    <>
    {/* 主圖內容  */}
      <section id="bigcake">
        <div><hr style={{ borderColor: '#DDA25F', borderWidth: '0.1px', borderStyle: 'solid' }} /></div>
        
        <div className="bigcake-title">
            <h1>無麩純素熱帶水果椰奶蛋糕</h1>
            <figure className="soy2"><img  src={soy_leg2} alt="" /></figure>
        </div>
        <p className="content">做舒芙蕾鬆餅不難，只要掌握舒芙蕾鬆餅食譜內的小技巧，在家就能做出不輸鬆餅名店的舒芙蕾鬆餅，來個夢幻下午茶，我前後挑戰幾次後，才找出自己覺得滿意好吃的舒芙蕾鬆餅配方，<br /> 
        舒芙蕾鬆餅一做好馬上開吃，柔軟又膨鬆細嫩的口感，讓人一吃就充滿了幸福感，心情好極了，照著這篇舒芙蕾鬆餅食譜，在家端出舒芙蕾鬆餅，不管大人小孩都會很開心～來挑戰看看吧！</p>
        <div className="bigcake-main">
            <div><img className="cherry2" src={cherry_leg2} alt="" /></div>
            <div><img className="main_pic" src={main_pic} alt="" /></div>
            <div><img className="heart3" src={heart3} alt="" /></div>
        </div>
    {/* 食譜步驟 */}
        <div className="process">
            <ul className="info">
                <h4>材料</h4>
                <p>
                    ．2顆雞蛋 (30g) <br/>
                    ．500g 奶油奶酪<br/>
                    ．50g 代糖 (赤藻糖醇)<br/>
                    ．50g 杏仁粉<br/>
                    ．2根香蕉<br/>
                    ．60g橄欖油或動物性奶油<br/>
                </p>
                <div><hr style={{ borderColor: '#DDA25F', borderWidth: '0.1px', borderStyle: 'dashed', marginTop:'70px' }} /></div>
                <h4>份量</h4>
                <p>6吋 (4人份)</p>
                <div><hr style={{ borderColor: '#DDA25F', borderWidth: '0.1px', borderStyle: 'dashed', marginTop:'70px' }} /></div>
                <h4>準備時間</h4>
                <p>備料: 30分鐘 <br /> 烘焙: 60分鐘</p>
                <div><hr style={{ borderColor: '#DDA25F', borderWidth: '0.1px', borderStyle: 'dashed', marginTop:'70px' }} /></div>
                <h4>相關Hashtags</h4>
                <div className="hashtag">
                    <div className="hashtag-1">
                    <p>#舒芙蕾</p> <p>#鬆餅</p> <p>#低碳</p>
                    </div>
                    <div className="hashtag-2">
                    <p>#甜點</p> <p>#蛋糕</p> <p>#高蛋白</p>
                    </div>
                    <div className="hashtag-3">
                    <p>#無麩質</p> <p>#無麩質</p> <p>#素食</p>
                    </div>
                    <div className="hashtag-4">
                    <p>#舒芙蕾</p> <p>#鬆餅</p> <p>#低碳</p>
                    </div>
                    <div className="hashtag-5">
                    <p>#舒芙蕾</p> <p>#鬆餅</p> <p>#低碳</p>
                    </div>
                    <div className="hashtag-6">
                    <p>#無麩質</p> <p>#無麩質</p> <p>#素食</p>
                    </div>
                </div>
                <div><hr style={{ borderColor: '#DDA25F', borderWidth: '0.1px', borderStyle: 'dashed', borderSpacing: '10px', marginTop:'70px',opacity:'10' }} /></div>
                <img className="info-yam" src={yam_noleg} alt="" />
            </ul>
            <ul className="recipe1">
                <h4>步驟</h4>
                <div className="recipe-content1and2">
                <figure className="content1">
                    <img className="rec-pic1" src={rec1} alt="" />
                    <p className="text1">
                        <p className="num1">1</p>
                        <p className="describe1">先將蛋白與蛋白分離，香蕉壓碎搗成泥，再將蛋黃、
                        <br />代糖、杏仁粉、油脂、香蕉泥拌均勻備用。</p>
                    </p>
                </figure>
                <figure className="content2">
                    <img className="rec-pic2" src={rec2} alt="" />
                    <p className="text2">
                        <p className="num2">2</p>
                        <p className="describe2">將蛋白打發，中間分2次加入代糖，打發至濕性發泡，
                        <br />攪拌器前端呈現鉤子狀即可(如右圖)。
                        </p>
                    </p>
                </figure>
                </div>
                <div className="recipe-content3and4">
                <figure className="content3">
                    <img className="rec-pic3" src={rec3} alt="" />
                    <p className="text3">
                        <p className="num3">3</p>
                        <p className="describe3">先將蛋白與蛋白分離，香蕉壓碎搗成泥，再將蛋黃 <br />
                        與、代糖、杏仁粉、油脂、香蕉泥拌均勻備用。
                        </p>
                    </p>
                </figure>
                <figure className="content4">
                    <img className="rec-pic4" src={rec4} alt="" />
                    <p className="text4">
                        <p className="num4">4</p>
                        <p className="describe4">將蛋白打發，中間分2次加入代糖，打發至濕性發泡， <br />
                        攪拌器前端呈現鉤子狀即可(如右圖)。
                        </p>
                    </p>
                </figure>
                </div>
                <div className="recipe-content5and6">
                <figure className="content5">
                    <img className="rec-pic5" src={rec5} alt="" />
                    <p className="text5">
                        <p className="num5">5</p>
                        <p className="describe5">將打發的蛋白霜分三次加進麵糊哩，用刮刀由下往上 <br />
                        拌勻麵糊，切勿用力圓圈式攪拌，以免空氣被攪散。
                        </p>
                    </p>
                </figure>
                <figure className="content6">
                    <img className="rec-pic6" src={rec6} alt="" />
                    <p className="text6">
                        <p className="num6">6</p>
                        <p className="describe6">模型裡塗一層薄奶油，再將拌勻的麵糊倒進模型裡， <br />
                        烤箱設定10分鐘、170度預熱，入內烤40分鐘。
                        </p>
                    </p>
                </figure>
                </div>
                <div className="recipe-content7and8">
                <figure className="content7">
                    <img className="rec-pic7" src={rec7} alt="" />
                    <p className="text7">
                        <p className="num7">7</p>
                        <p className="describe7">烘烤完成後，將蛋糕切成三等份，並在每一層擠上 <br />
                        可可鮮奶油，將每一層蛋糕體疊上，組裝在一起。
                        </p>
                    </p>
                </figure>
                <figure className="content8">
                    <img className="rec-pic8" src={rec8} alt="" />
                    <p className="text8">
                        <p className="num8">8</p>
                        <p className="describe8">依自己的喜好在舒芙蕾上灑上糖霜、醬料或任何水果配料。
                        </p>
                    </p>
                </figure>
                </div>
            </ul>
        </div>

        <div className="hr-bottom">
        <hr style={{ borderColor: '#DDA25F', borderWidth: '0.1px', borderStyle: 'solid' }} />
        </div>
        <div className="seemore-btn1">
        <a href="/" target="_self"><p>查看更多食譜</p></a>
        </div>

        <div className="more-rec">
                <img src={more1} alt="" />
                <img src={more2} alt="" />
                <img src={more3} alt="" />
                <img src={more4} alt="" />
                <img src={more5} alt="" />
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
}
export default RecipePage1;
