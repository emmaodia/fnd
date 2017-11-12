import React, { Component } from 'react';
// import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Navbar, NavbarBrand, Form, Input, Card, CardTitle, CardText, CardDeck,
 CardBody, CardFooter } from 'reactstrap';
import './App.css'

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  render() {
    return (
      /*<div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">fnd app</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h3>fnd devs and dev events near you!</h3>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                fnd devs
              </Button>
            </p>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                fnd event
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>*/
      <div>
        <Navbar color="faded" light expand="md" className="Header">
          <NavbarBrand href="/">
            <h2>FND APP</h2>
          </NavbarBrand>
        </Navbar>
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

export default App;
