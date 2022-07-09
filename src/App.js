import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Customers from './components/Customers/Customers';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Products from './components/Products/Products';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import Technology from './components/Technology/Technology';
import Footer from './components/Footer/Footer';
import './Style.css';


function App() {
  return (
    <>
  

      <Header></Header>
      <Customers></Customers>
      <WhatWeDo></WhatWeDo>
      <Products></Products>
      <Pricing></Pricing>
      <About></About>
      <Technology></Technology>
      <Footer></Footer>


      {/* Navigation Setup s */}
      {/* <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter> */}
      
    
    </>
  );
}

export default App;
