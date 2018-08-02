import React, { Component } from 'react';
import '../cssKomponentit/Kayttajalomake.css';

export default class Kayttajalomake extends Component {

    state = { first_name: '', last_name: '', email: '', pw: '' }

    etunimiMuuttunut = (e) => {
        this.setState({ first_name: e.target.value });
    }
    sukunimiMuuttunut = (e) => {
        this.setState({ last_name: e.target.value });
    }

    salasanaMuuttunut = (e) => {
        this.setState({ pw: e.target.value });
    }

    emailMuuttunut = (e) => {
        this.setState({ email: e.target.value });
    }

    pwMuuttunut = (e) => {
        this.setState({ pw: e.target.value });
    }

    laheta = (e) => {
        e.preventDefault();
        this.props.lisaaKayttaja(this.state);
        this.setState({ first_name: '', password: '', last_name: '', email: '', pw: '' });
    }

    render() {
        return (
            <div className="Kayttajanlisays">
            <center>
                <p>LISÄÄ UUSI KÄYTTÄJÄ</p>
                <form onSubmit={this.laheta}>
                    <table>
                        <tbody>
                            <tr><td className="datanNimi">Etunimi: </td><td><input value={this.state.name} onChange={this.etunimiMuuttunut} /></td></tr>
                            <tr><td className="datanNimi">Sukunimi: </td><td><input value={this.state.category} onChange={this.sukunimiMuuttunut} /></td></tr>
                            <tr><td className="datanNimi">Email: </td><td><input value={this.state.time} onChange={this.emailMuuttunut} /></td></tr>
                            <tr><td className="datanNimi">Salasana: </td><td><input value={this.state.location} type="password" onChange={this.pwMuuttunut} /></td></tr>
                            <tr><td></td><td><input type="submit" defaultValue="Lisää" /></td></tr>
                        </tbody>
                    </table>
                </form>
                </center>
            </div>
        );
    }
}