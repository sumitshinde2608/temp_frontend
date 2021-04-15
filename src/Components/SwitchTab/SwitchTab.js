import React from "react"
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import Birthday from '../../Birthday/BirthdayMainComponent'
import Babies from '../../Babies/BabiesMainComponent'
import Anniversaries from '../../Anniversaries/AnniversaryMainComponent'
import Scroll from '../Scroll/Scroll';
import CardInput from '../CardInput/CardInput'

const SwitchTab = () => {

return(
<div>
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Birthday</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Anniversary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Babies</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          {/* <h1> Sumit Shinde </h1> */}
          <Scroll>
          <h1> Birthday </h1>    
          <Birthday/>
          </Scroll>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <div className="CardInput">
          <CardInput/>
          </div>
          <Scroll>
          <h1> Anniversary </h1>
          <Anniversaries/>
          </Scroll>
          </Tab.Pane>
          <Tab.Pane eventKey = "third">                 
              <div className="CardInput">
                <CardInput/>
              </div>        
          
              <Scroll>
              <h1> Babies </h1>
              <Babies/>
              </Scroll>
          </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
);

}

export default SwitchTab;
