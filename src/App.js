import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accessories from './images/Desktop-Accessories.jpg'
import SolarRoof from './images/Desktop-SolarRoof.jpeg'
import ModelS from './images/Desktop-ModelS.jpeg'
import Model3 from './images/Desktop-Model3.jpeg'
import ModelX from './images/Desktop-ModelX.jpeg'
import ModelY from './images/Desktop-ModelY.jpeg'
import SolarPanels from './images/Desktop-SolarPanels.jpeg'
import ModS from './pages/ModS';
import Mod3 from './pages/Mod3';
import ModX from './pages/ModX';
import ModY from './pages/ModY';


function App() {
  return (
    
      
    <div className="App">
      <Router>
          <Header />
    <div className="app_itemsContainer">
      
          <Switch>
            <Route path='/modelS'>
              <ModS />
              </Route>
            <Route path='/model3'>
              <Mod3 />
              </Route>
            <Route path='/modelX'>
              <ModX />
              </Route>
            <Route path='/modelY'>
              <ModY />
              </Route>
              <Route path='/'>
            <Item 
   title='Lowest Cost Solar Panels in America'
   desc='Money-back guarantee'
   descLink=''
   backgroundImg= {SolarPanels}
   leftbtntxt='ORDER NOW'
   leftBtnLink=''
   rightBtnText='LEARN MORE'
   rightBtnLink=''
   twoButtons='true'
   first
/>


      <Item 
  title='Model S'
  desc='Starting at $69,420'
  descLink=''
  backgroundImg={ModelS}
  leftbtntxt='CUSTOM ORDER'
  leftBtnLink=''
  rightBtnText='EXISTING INVENTIORY'
  rightBtnLink=''
  twoButtons='true'
  
/>


<Item 
  title='Model 3'
  desc='Order online for Touchless Delivery'
  descLink=''
  backgroundImg={Model3}
  leftbtntxt='CUSTOM ORDER'
  leftBtnLink=''
  rightBtnText='EXISTING INVENTORY'
  rightBtnLink=''
  twoButtons='true'
/>


<Item 
  title='Model X'
  desc='Order online for Touchless Delivery'
  descLink=''
  backgroundImg={ModelX}
  leftbtntxt='ORDER NOW'
  leftBtnLink=''
  rightBtnText='LEARN MORE'
  rightBtnLink=''
  twoButtons='true'

/>



<Item 
  title='Model Y'
  desc='Order online for Touchless Delivery'
  descLink=''
  backgroundImg={ModelY}
  leftbtntxt='ORDER NOW'
  leftBtnLink=''
  rightBtnText='LEARN MORE'
  rightBtnLink=''
  twoButtons='true'
  
/>



<Item 
  title='Solar for New Roofs'
  desc='Solar Cost Less Than a New Roof Plus Solar Panels'
  descLink=''
  backgroundImg={SolarRoof}
  leftbtntxt='ORDER NOW'
  leftBtnLink=''
  rightBtnText='LEARN MORE'
  rightBtnLink=''
  twoButtons='true'
  
/>


<Item 
  title='Accessories'
  desc=''
  descLink=''
  backgroundImg={Accessories}
  leftbtntxt='ORDER NOW'
  leftBtnLink=''
  rightBtnText='LEARN MORE'
  rightBtnLink=''
/>
</Route>
        </Switch>
</div>
        </Router>
      </div>
  );
}

export default App;
