import React from 'react';
import '../style/Footer.css';


function Footer() {
    return (
  <footer>
    <nav>
      <ul className="menu">
        <li><a href="/">關於我們<br />About us</a></li>
        <li><a href="/aboutGlutenPage">麩質教室<br />About gluten</a></li>
        <li><a href="/purchasePage">購買管道<br />Purchase</a></li>
        <li><a href="/recipePage">食譜分享<br />Recipe</a></li>
        <li><a href="/communityPage">無麩友社群<br />Community</a></li>

      </ul>

      <ul className="icon">
      <li><a href="/" className="btn_fb"><i className="fa-solid fa-facebook"></i></a></li>
      <li><a href="/" className="btn_ig"><i className="fa-solid fa-instagram"></i></a></li>
      <li><a href="/" className="btn_line"><i className="fa-solid fa-line"></i></a></li>
      </ul>
    </nav>
    <small>2024 無麩食代. All Rights Reserved.</small>

    {/* 置頂按鈕  */}
    <div id="gotop"><i className="fa-solid fa-angle-up"></i></div>
  </footer>
  );
}


export default Footer;