import React from 'react';
import { Link } from 'react-router-dom';
import '../style/CommunityPage.css';
import banner_com from "../images/community/banner_com.png";
import bg1 from "../images/community/bg_tag.png";
import soy_post1 from "../images/community/soy.png";
import blue_post1 from "../images/community/singleblue.png";
import cashew_post1 from "../images/community/cashew.png";
import strawberry_post1 from "../images/community/strawberry.png";
import rice_add from "../images/community/rice.png";
import add_bottom from "../images/community/add1.png";
import add_bg from "../images/community/add_bg.png";
import post1 from "../images/community/post1.png";
import post2 from "../images/community/post2.png";
import blues_post1 from "../images/community/4blue.png";
import post3 from "../images/community/post3.png";
import post4 from "../images/community/post4.png"; 
import post5 from "../images/community/post5.png";
import post6 from "../images/community/post6.png";
import post7 from "../images/community/post7.png";
import post8 from "../images/community/post8.png";
import post9 from "../images/community/post9.png";
import post10 from "../images/community/post10.png";
import post11 from "../images/community/post11.png";
import post12 from "../images/community/post12.png";
import post13 from "../images/community/post13.png";
import post14 from "../images/community/post14.png";
import post_egg1 from "../images/community/egg_post1.png";
import post_cherry1 from "../images/community/cherry_post1.png";

 
function CommunityPage() {
    return (
        // Banner
        <section className='post_main'>
            <figure className='banner_com'>
                <img src={banner_com} alt="" />
            </figure>

        {/* Filter_tag */}
            <h1>推薦話題</h1>
            <div className='filter_tag'>
            {/* first tag  */}
                <div className='recipe'>
                    <Link to="/communityPage">
                    <div className='soy_post1'><img src={soy_post1} alt="" /></div>
                    <div className='recipe_tag'><p>#無麩質食譜</p></div>
                    <div className='bg1'><img src={bg1} alt="" /></div>
                    </Link>
                </div>
            {/* second tag  */}
                <div className='ill'>
                    <Link to="/communityPage/communityPage2">
                    <div className='blue_post1'><img src={blue_post1} alt="" /></div>
                        <div className='ill_tag'><p>#麩質的症狀</p></div>
                        <div className='bg1'><img src={bg1} alt="" /></div>
                    </Link>
                </div>
            {/* third tag  */}
                <div className='gluten'>
                    <Link to="/communityPage">
                    <div className='cashew_post1'><img src={cashew_post1} alt="" /></div>
                    <div className='gluten_tag'><p>#戒麩質</p></div>
                    <div className='bg1'><img src={bg1} alt="" /></div>
                    </Link>
                </div>
            {/* Forth tag  */}
                <div className='gluten_eat'>
                    <Link to="/communityPage/communityPage2">
                    <div className='strawberry_post1'><img src={strawberry_post1} alt="" /></div>
                    <div className='gluteneat_tag'><p>#麩質飲食</p></div>
                    <div className='bg1'><img src={bg1} alt="" /></div>
                    </Link>
                </div>
            </div>
        
        {/* Posts  */}
        <div className='posts'>
        {/* line1 */}
        <div className='line1'>
            <div className='add'>
                <img className='rice_add' src={rice_add} alt="" />
                <img className='add_bottom' src={add_bottom} alt="" />
                <img className='add_bg' src={add_bg} alt="" />
            </div>
            <div className='post1'>
                <img className='post1' src={post1} alt="" />
            </div>
            <div className='post2'>
                <img className='post2' src={post2} alt="" />
                <img className='blues_post1' src={blues_post1} alt="" />
            </div>
        </div>
        {/* line2 */}
        <div className='line2'>
            <div className='post3'>
                <img className='post3' src={post3} alt="" />
            </div>
            <div className='post4'>
                <img className='post4' src={post4} alt="" />
            </div>
            <div className='post5'>
                <img className='post5' src={post5} alt="" />
            </div>
        </div>
        {/* line3 */}
        <div className='line3'>
            <div className='post6'>
                <img className='post6' src={post6} alt="" />
            </div>
            <div className='post7'>
                <img className='post7' src={post7} alt="" />
            </div>
            <div className='post8'>
                <img className='post8' src={post8} alt="" />
            </div>
        </div>
        {/* line4 */}
        <div className='line4'>
            <div className='post9'>
                <img className='post9' src={post9} alt="" />
            </div>
            <div className='post10'>
                <img className='post_cherry1' src={post_cherry1} alt="" />
                <img className='post10' src={post10} alt="" />
            </div>
            <div className='post11'>
                <img className='post11' src={post11} alt="" />
            </div>
        </div>
        {/* line5 */}
        <div className='line5'>
            <div className='post12'>
                <img className='post_egg1' src={post_egg1} alt="" />
                <img className='post12' src={post12} alt="" />
            </div>
            <div className='post13'>
                <img className='post13' src={post13} alt="" />
            </div>
            <div className='post14'>
                <img className='post14' src={post14} alt="" />
            </div>
        </div>
        </div>
        <div className="moreshare-btn">
        <a href="/" target="_self"><p>查看更多分享</p></a>
        </div>

        </section>




        );
    }
export default CommunityPage;