import './App.css';
import React, {Fragment} from 'react';
import PreNavbar from './components/PreNavbar';
import Videos from './components/Videos';
import Navbar from './components/Navbar';
import Slider from './components/Slider.js';
import data from "./data/data.json";
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Banner from './components/Banner';
import Footer from './components/Footer'; 
import NavOptions from './components/Navoptions'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
     <Router>
      <Fragment>
      <PreNavbar/>
      <Navbar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="START PRODUCTS"/>
      <StarProduct starProduct = {data.starProduct} />
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu />
      <Routes>

        <Route exact path="/music"
          index element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} 
        />

        <Route exact path="/smartDevice"
          index element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />} 
        />

        <Route exact path="/home"
          index element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />} 
        />

        <Route exact path="/lifestyle"
          index element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} 
        />

        <Route exact path="/mobileAccessories"
          index element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} 
        />

      </Routes>
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>

      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>

      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>
     </Fragment>
    </Router>
    </>
  );
}

export default App;


