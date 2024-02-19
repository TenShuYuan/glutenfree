import {Routes, Route, HashRouter} from "react-router-dom";
// Style CSS 
import './style/App.css';
import './style/HomePage.css';
import './style/Header.css'
import './style/Footer.css';
import './style/AboutGlutenPage.css';
import './style/AboutGlutenPage2.css';
import './style/PurchasePage.css';
import './style/PurchasePage1.css';
import './style/PurchasePage2.css';
import './style/RecipePage.css';
import './style/RecipePage2.css';
import './style/RecipePage1.css';
import './style/CommunityPage.css';
import './style/CommunityPage2.css';
import './style/PurchasePagesub.css';
// Pages Js
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import PurchasePage from "./pages/PurchasePage";
import PurchasePage1 from "./pages/PurchasePage1";
import PurchasePage2 from "./pages/PurchasePage2";
import AboutGlutenPage from "./pages/AboutGlutenPage";
import AboutGlutenPage2 from "./pages/AboutGlutenPage2";
import RecipePage from "./pages/RecipePage";
import RecipePage2 from "./pages/RecipePage2";
import RecipePage1 from "./pages/RecipePage1";
import CommunityPage from "./pages/CommunityPage";
import CommunityPage2 from "./pages/CommunityPage2";
import PurchasePagesub from "./pages/PurchasePagesub";

function App() {
  return (
    <>
      <HashRouter>
      <Routes>
        {/* http://localhost:3000 */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} /> 
          {/* <Route path="banner" element={<Banner />} /> */}

          <Route path="purchasePage" element={<PurchasePage />} />
          <Route path="purchasePage/purchasePagesub" element={<PurchasePagesub />} />
          <Route path="purchasePage/purchasePage1" element={<PurchasePage1 />} />
          <Route path="purchasePage2" element={<PurchasePage2 />} />
          <Route path="aboutGlutenPage" element={<AboutGlutenPage />} />
          <Route path="aboutGlutenPage2" element={<AboutGlutenPage2 />} />
          <Route path="recipePage" element={<RecipePage />} />
          <Route path="recipePage2" element={<RecipePage2 />} />
          <Route path="recipePage/recipePage1" element={<RecipePage1 />} />
          <Route path="communityPage" element={<CommunityPage />} />
          <Route path="communityPage/communityPage2" element={<CommunityPage2 />} />

        </Route>

        </Routes>
        </HashRouter>
        </>
  );
}
export default App;