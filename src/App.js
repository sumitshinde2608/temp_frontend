import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Scroll from './Scroll';
import Birthday from './Birthday/BirthdayMainComponent'
import Babies from './Babies/BabiesMainComponent'
import Anniversaries from './Anniversaries/AnniversaryMainComponent'
import SwitchTab from './SwitchTab';

const App = ()=> {
  return (
    // <div className = "container">
    <div className="App">
    <SwitchTab></SwitchTab>
      <Scroll className="Scrolls">
            {/* <CardList birthday={birthday} className="CardList"/> */}
            <Birthday></Birthday>
            <Babies></Babies>
            <Anniversaries></Anniversaries>
      </Scroll>
    {/* <Button>Test</Button> */}
  </div>
    // </div>
    );
}

export default App;