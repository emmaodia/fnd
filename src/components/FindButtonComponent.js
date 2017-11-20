import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import { Button } from 'reactstrap';

export default class FindButtonComponent extends Component {
  render() {
    return (
    	<div>
            <HeaderComponent />
    		<div className="ComponentContainer ButtonComponent">
                <Button onClick={this.props.nextStep} className="AuthButton" color="success">
                    Find Devs
                </Button>
                <Button onClick={this.props.nextStep} className="AuthButton" color="info">
                    Find Events
                </Button>
            </div>
    	</div>
    );
  }
}
