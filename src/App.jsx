import React from 'react'

import "./App.css";
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar';
import NavOptions from './components/NavOptions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import {banner, offer, starProduct, hotAccessories, hotAccessoriesCover, productReviews, videos, footer, miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories} from './data/data.json'


const App = () => {
  return (
    <Router>
      <PreNavbar/>
      <Navbar />
      <NavOptions miPhones={miPhones} redmiPhones={redmiPhones} tv={tv} laptop={laptop} fitnessAndLifeStyle={fitnessAndLifeStyle} home={home} audio={audio}  accessories={accessories}/>

      <Slider start={banner.start}/>
      <Offers offer={offer}/>
      <Heading text="STAR PRODUCT"/>
      <StarProduct starProduct={starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>

      <Route exact path="/music">
        <HotAccessories music={hotAccessories.music} musicCover={hotAccessoriesCover.music} />
      </Route>
      <Route exact path="/smartDevice">
        <HotAccessories smartDevice={hotAccessories.smartDevice} smartDeviceCover={hotAccessoriesCover.smartDevice} />
      </Route>
      <Route exact path="/home">
        <HotAccessories home={hotAccessories.home} homeCover={hotAccessoriesCover.home} />
      </Route>
      <Route exact path="/lifeStyle">
        <HotAccessories lifeStyle={hotAccessories.lifeStyle} lifeStyleCover={hotAccessoriesCover.lifeStyle} />
      </Route>
      <Route exact path="/mobileAcessories">
        <HotAccessories mobileAccessories={hotAccessories.mobileAccessories} mobileAccessoriesCover={hotAccessoriesCover.mobileAccessories} />
      </Route>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={videos} />

      <Heading text="IN THE PRESS"/>
      <Banner banner={banner}/>

      <Footer  footer={footer}/>


    </Router>
  )
}

export default App