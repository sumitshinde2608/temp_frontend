import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Scroll from './Scroll';
import Birthday from './Birthday/BirthdayMainComponent'
import Babies from './Babies/BabiesMainComponent'
import Anniversaries from './Anniversaries/AnniversaryMainComponent'
import SwitchTab from './SwitchTab';
import CardInput from './CardInput'


const App = ()=> {
  return (
    // <div className = "container">
    <div className="App">
    <div className="CardInput">
    <CardInput/>
    </div>
    <SwitchTab></SwitchTab>
      {/* <Scroll className="Scrolls">
            <Birthday></Birthday>
            <Babies></Babies>
            <Anniversaries></Anniversaries>
      </Scroll> */}
  </div>
    // </div>
    );
}

export default App;