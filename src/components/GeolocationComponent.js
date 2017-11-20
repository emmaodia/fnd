import { Component } from 'react';

export default class GeolocationComponent extends Component {
  constructor(props) {
     super(props);
     this.state = {
       countryName: '',
       regionName: ''
     };
   }

     componentDidMount() {
         var url = 'https://freegeoip.net/json/';
         fetch(url)
           .then((response) => response.json())
           .then((responseJson) => {
             console.log(responseJson);
             this.setState({
               countryName: responseJson.country_name,
               regionName: responseJson.region_name
             });
           })
           .catch((error) => {
            //console.error(error);
           });
       }
   
  render() {
    return null;
  }
}