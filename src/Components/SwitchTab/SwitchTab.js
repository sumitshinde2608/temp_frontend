import React from "react"
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import Birthday from '../../Birthday/BirthdayMainComponent'
import Babies from '../../Babies/BabiesMainComponent'
import Anniversaries from '../../Anniversaries/AnniversaryMainComponent'
import CardInput from '../CardInput/CardInput'
import './SwitchTab.css'

const SwitchTab = () => {

return(
<div className="MainUI"> 
<Tab.Container id="left-tabs-example" defaultActiveKey="first">

    <div className="LeftNav">
      <Nav variant="pills" className="flex-column">
        <Nav.Item variant = "success">
          <Nav.Link eventKey="first" variant="success">Birthday</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Anniversary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Babies</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

    <div className="MainFrame">
    
      <Tab.Content id="MainFrame2">
        <Tab.Pane eventKey="first">
         <div className="Card">
          <Birthday />
        </div>
        </Tab.Pane >
        <Tab.Pane eventKey="second">
            <div className="CardInput">
          <CardInput/>
          </div>
          <div className="Card">
          <Anniversaries/>
          </div>
          </Tab.Pane>
          <Tab.Pane eventKey = "third">                 
              <div className="CardInput">
                <CardInput/>
              </div>        
              <div className="Card">
              <Babies/>
              </div>
          </Tab.Pane>
      </Tab.Content>
  
    </div>

</Tab.Container>
</div>
);

}

export default SwitchTab;
