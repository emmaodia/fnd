import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import { Form, Input, Card, CardTitle, CardText, CardDeck, CardBody, CardFooter } from 'reactstrap';

class ListViewRenderComponent extends Component {
  render() {
    return (
    	<div>
    		<HeaderComponent />
        <div className="ResultContainer">
          <Form className="ResultForm">
            <Input type="select" className="SearchCateria">
              <option>Name</option>
              <option>Location</option>
            </Input>
          </Form>
          <div className="ResultWrapper">
            <CardDeck>
              <Card className="text-center">
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
              <Card className="text-center">
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
              <Card className="text-center">
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </CardDeck>
          </div>
        </div>
    	</div>
    );
  }
}

export default ListViewRenderComponent;
