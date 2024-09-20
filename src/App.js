import './App.css';
import BecauseTheyLoveUs from './components/BecauseTheyLoveUs.js';
import CollectibleSneakers from './components/CollectibleSneakers';
import Footer from './components/Footer.js';
import GrowYourCollection from './components/GrowYourCollection.js';
import Header from './components/Header.js';
import ShoesCollected from './components/ShoesCollected.js';
import TheBestOfTheBest from './components/TheBestOfTheBest.js';
import WhyJoinUs from './components/WhyJoinUs.js';

function App() {
  return (
    <div className="bg-custom-gradient overflow-x-hidden font-roboto">
      <Header></Header>
      <CollectibleSneakers></CollectibleSneakers>
      <TheBestOfTheBest></TheBestOfTheBest>
      <WhyJoinUs></WhyJoinUs>
      <BecauseTheyLoveUs></BecauseTheyLoveUs>
      <GrowYourCollection></GrowYourCollection>
      <ShoesCollected></ShoesCollected>
      <Footer></Footer>
    </div>
  );
}

export default App;
