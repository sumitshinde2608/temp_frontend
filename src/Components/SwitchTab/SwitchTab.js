import React from "react"
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import Birthday from '../../Birthday/BirthdayMainComponent'
import Babies from '../../Babies/BabiesMainComponent'
import Anniversaries from '../../Anniversaries/AnniversaryMainComponent'
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
          {/* <Scroll> */}
          <Birthday/>
          {/* </Scroll> */}
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <div className="CardInput">
          <CardInput/>
          </div>
          <Anniversaries/>
          </Tab.Pane>
          <Tab.Pane eventKey = "third">                 
              <div className="CardInput">
                <CardInput/>
              </div>        
              <Babies/>
          </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
);

}

export default SwitchTab;
