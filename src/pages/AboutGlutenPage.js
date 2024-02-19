import React from 'react';
import '../style/AboutGlutenPage.css';
import line from "../images/aboutgluten-comic/line.png";
import comictitle from "../images/aboutgluten-comic/title1.png";
import part1 from "../images/aboutgluten-comic/califlour-bg.png";
import part2 from "../images/aboutgluten-comic/character-bg.png";
import talk1 from "../images/aboutgluten-comic/califlour-talk.png";
import talk2 from "../images/aboutgluten-comic//character-talk.png";
import part3 from "../images/aboutgluten-comic/character-bg2.png";
import talk3 from "../images/aboutgluten-comic/character-reply2.png";
import part4 from "../images/aboutgluten-comic/rice-talk.png";

function AboutGlutenPage() {
    return (
<>
<div className='pattern'>
  {/* <img src="./images/aboutgluten-comic/yampattern.png" alt="" /> */}
</div>

{/* 主要內容區 */}
<section id="comic">
  <div className='line'><img className='line2' src={line} alt="" /></div>
<div className='comic-title'><img src={comictitle} alt="" /></div>

<div className="whats-gluten">
<figure className="part1">
  <img src={part1} alt="califlour bg" />
</figure>
<figure className="part2">
  <img src={part2} alt="character bg" />
</figure>
<figure className="talk1">
  <img src={talk1} alt="califlour talk" />
</figure>
<figure className="talk2">
  <img src={talk2} alt="character talk" />
</figure>
<figure className="part3">
  <img  src={part3} alt="character bg2" />
</figure>
<figure className="talk3">
  <img src={talk3} alt="character reply2" />
</figure>
<figure className="part4">
  <img src={part4} alt="" />
</figure>
</div>
</section>
{/* <Footer /> */}
</>
);
}
export default AboutGlutenPage;