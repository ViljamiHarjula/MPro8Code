import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Kayttajalomake from './Kayttajalomake';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './Kayttajankirjautuminen.css'
import { haeKayttaja, poistaKayttaja } from "../palvelu";

export default class Kayttajakirjautuminen extends Component {
  constructor(props) {
    super(props);


    this.state = { email: "", password: "", user_id: "", pwAlku: "", pwKayttaja: "", kirjautunut: false };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 0;



  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.kirjaa(this.state.email, this.state.password);
    
  }

  kirjaa = (email, password) => {
    this.setState({ pwAlku: password });
    // haeKayttaja saa callback-funktion "function(kt)"
    // jonka avulla haeKayttaja voi palauttaa haetun
    // käyttäjän.
    haeKayttaja(email, password, function (kt) {
        this.setState({ email: kt.email, user_id: kt.user_id, pwKayttaja: kt.pw, kirjautunut: true })
        console.dir(this.state.email);
        this.setState({ email: '', password: '' });
    }.bind(this));

}

  render() {

    return (



      
      <center><div className="Login">

        <form onSubmit={this.handleSubmit} style= {{padding: 13, paddingRight: 40, background: 'rgba(255, 237, 233, 0.6)', paddingTop: 50}}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel style = {{fontFamily:'Lucida Console', padding:13}}>Sähköposti</ControlLabel>
            <FormControl className="hvr2"

              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

          </FormGroup>
          <FormGroup controlId="password" bsSize="large">

            <ControlLabel style= {{fontFamily:'Lucida Console', padding:13, }}>Salasana</ControlLabel>
            <FormControl style={{marginLeft:19}} className="hvr2"

              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button style ={{fontFamily:'Lucida Console', fontSize:15, marginLeft:125, marginTop: 13, marginBottom: 30}}

            block
            bsSize="large"
            type="submit">
            Kirjaudu
            </Button>


        </form>

      </div></center>
    );
  }
}
