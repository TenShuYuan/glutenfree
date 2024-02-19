import React from 'react';
import '../style/AboutGlutenPage2.css';
import line2 from "../images/aboutgluten-comic2/line.png";
import comictitle from "../images/aboutgluten-comic/title1.png";
import part1 from "../images/aboutgluten-comic2/egg-bg.png";
import part2 from "../images/aboutgluten-comic2/character-bg.png";
import talk1 from "../images/aboutgluten-comic2/egg-talk.png";
import talk2 from "../images/aboutgluten-comic2/character-talk.png";
import part3 from "../images/aboutgluten-comic2/character-bg2.png";
import talk3 from "../images/aboutgluten-comic2/character-reply2.png";


function AboutGlutenPage2() {
    return (
<>
<div className='pattern'>
  {/* <img src="./images/aboutgluten-comic/yampattern.png" alt="" /> */}
</div>

{/* 主要內容區 */}
<section id="comic2">
  <div className='line'><img className='line2' src={line2} alt="" /></div>
<div className='comic-title'><img src={comictitle} alt="" /></div>

<div className="ill">
<figure className="part1">
  <img src={part1} alt="egg bg" />
</figure>
<figure className="part2">
  <img src={part2} alt="character bg" />
</figure>
<figure className="talk1">
  <img src={talk1} alt="egg talk" />
</figure>
<figure className="talk2">
  <img src={talk2} alt="character talk" />
</figure>
<figure className="part3">
  <img src={part3} alt="character bg2" />
</figure>
<figure className="talk3">
  <img src={talk3} alt="character reply2" />
</figure>

</div>
</section>

</>
);
}
export default AboutGlutenPage2;