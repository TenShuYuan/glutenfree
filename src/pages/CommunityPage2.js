import React from 'react';
import { Link } from 'react-router-dom';
import '../style/CommunityPage2.css';
import banner_com from "../images/community/banner_com.png";
import bg2 from "../images/community/bg_tag.png";
import soy_post2 from "../images/community/soy.png";
import blue_post2 from "../images/community/singleblue.png";
import cashew_post2 from "../images/community/cashew.png";
import strawberry_post2 from "../images/community/strawberry.png";
import rice_add from "../images/community/rice.png";
import add_bottom from "../images/community/add1.png";
import add_bg from "../images/community/add_bg.png";
import post1 from "../images/community/community_2/post1.png";
import post2 from "../images/community/community_2/post2.png";
import blues_post1 from "../images/community/4blue.png";
import post3 from "../images/community/community_2/post3.png";
import post4 from "../images/community/community_2/post4.png"; 
import post5 from "../images/community/community_2/post5.png";
import post6 from "../images/community/community_2/post6.png";
import post7 from "../images/community/community_2/post7.png";
import post8 from "../images/community/community_2/post8.png";
import post9 from "../images/community/community_2/post9.png";
import post10 from "../images/community/community_2/post10.png";
import post11 from "../images/community/community_2/post11.png";
import post12 from "../images/community/community_2/post12.png";
import post13 from "../images/community/community_2/post13.png";
import post14 from "../images/community/community_2/post14.png";
import post_egg1 from "../images/community/egg_post1.png";
import post_cherry1 from "../images/community/cherry_post1.png";

 
function CommunityPage2() {
    return (
        // Banner
        <section className='post_2'>
            <figure className='banner_com2'>
                <img src={banner_com} alt="" />
            </figure>

        {/* Filter_tag */}
            <h1>推薦話題</h1>
            <div className='filter_tag2'>
            {/* first tag  */}
                <div className='recipe2'>
                    <Link to="/communityPage">
                    <div className='soy_post2'><img src={soy_post2} alt="" /></div>
                    <div className='recipe_tag2'><p>#無麩質食譜</p></div>
                    <div className='bg2'><img src={bg2} alt="" /></div>
                    </Link>
                </div>
            {/* second tag  */}
                <div className='ill2'>
                    <Link to="/communityPage/communityPage2">
                    <div className='blue_post2'><img src={blue_post2} alt="" /></div>
                    <div className='ill_tag2'><p>#麩質的症狀</p></div>
                    <div className='bg2'><img src={bg2} alt="" /></div>
                    </Link>
                </div>
            {/* third tag  */}
                <div className='gluten2'>
                    <Link to="/communityPage">
                    <div className='cashew_post2'><img src={cashew_post2} alt="" /></div>
                    <div className='gluten_tag2'><p>#戒麩質</p></div>
                    <div className='bg2'><img src={bg2} alt="" /></div>
                    </Link>
                </div>
            {/* Forth tag  */}
                <div className='gluten_eat2'>
                    <Link to="/communityPage/communityPage2">
                    <div className='strawberry_post2'><img src={strawberry_post2} alt="" /></div>
                    <div className='gluteneat_tag2'><p>#麩質飲食</p></div>
                    <div className='bg2'><img src={bg2} alt="" /></div>
                    </Link>
                </div>
            </div>
        
        {/* Posts  */}
        <div className='posts2'>
        {/* line1 */}
        <div className='line1_2'>
            <div className='add2'>
                <img className='rice_add2' src={rice_add} alt="" />
                <img className='add_bottom2' src={add_bottom} alt="" />
                <img className='add_bg2' src={add_bg} alt="" />
            </div>
            <div className='post1_2'>
                <img className='post1_2' src={post1} alt="" />
            </div>
            <div className='post2_2'>
                <img className='post2_2' src={post2} alt="" />
                <img className='blues_post1' src={blues_post1} alt="" />
            </div>
        </div>
        {/* line2 */}
        <div className='line2_2'>
            <div className='post3_2'>
                <img className='post3_2' src={post3} alt="" />
            </div>
            <div className='post4_2'>
                <img className='post4_2' src={post4} alt="" />
            </div>
            <div className='post5_2'>
                <img className='post5_2' src={post5} alt="" />
            </div>
        </div>
        {/* line3 */}
        <div className='line3_2'>
            <div className='post6_2'>
                <img className='post6_2' src={post6} alt="" />
            </div>
            <div className='post7_2'>
                <img className='post7_2' src={post7} alt="" />
            </div>
            <div className='post8_2'>
                <img className='post8_2' src={post8} alt="" />
            </div>
        </div>
        {/* line4 */}
        <div className='line4_2'>
            <div className='post9_2'>
                <img className='post9_2' src={post9} alt="" />
            </div>
            <div className='post10_2'>
                <img className='post_cherry2' src={post_cherry1} alt="" />
                <img className='post10_2' src={post10} alt="" />
            </div>
            <div className='post11_2'>
                <img className='post11_2' src={post11} alt="" />
            </div>
        </div>
        {/* line5 */}
        <div className='line5_2'>
            <div className='post12_2'>
                <img className='post_egg2' src={post_egg1} alt="" />
                <img className='post12_2' src={post12} alt="" />
            </div>
            <div className='post13_2'>
                <img className='post13_2' src={post13} alt="" />
            </div>
            <div className='post14_2'>
                <img className='post14_2' src={post14} alt="" />
            </div>
        </div>
        </div>
        <div className="moreshare-btn2">
        <a href="/" target="_self"><p>查看更多分享</p></a>
        </div>

        </section>




        );
    }
export default CommunityPage2;