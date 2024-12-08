// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import Crausal from './components/Crausal';
import Cards_Crausal from './components/Cards_Crausal';
import Fixed_Card from './components/Fixed_Card';
import ShopSilhouette from './components/ShopSilhouette';
import Fixed_Card2 from './components/Fixed_Cards2';
import ShopSilhouette2 from './components/ShopSilhouette2';
import Magazine from './components/Magzine';
import HelpSection from './components/HelpSection';
import NewDrops from './components/NewDrop';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      {/* Header Section */}
      <Crausal />
      {/* Cards Crausal Section */}
      <Cards_Crausal />
      {/* Fixed Cards Section */}
      <Fixed_Card />
      {/* ShopSilhouette Product section */}
      <ShopSilhouette />
      {/* Fixed Cards Section Two */}
      <Fixed_Card2 />
      {/* ShopSilhouette Product section Two*/}
      <ShopSilhouette2 />
      {/* Magazine section */}
      <Magazine />
      {/* Testminols section */}
      <HelpSection />
      {/* New Drop Section */}
      <NewDrops />
      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default App