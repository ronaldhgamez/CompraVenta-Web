import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/ChangeClave_style.css';
import {updatePassw, getUserCollections } from './consultas';

class ChangeClave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      passNueva: '',
      passAnt: ''
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
    console.log(this.state)
  }

  update = async () => {
    const d = this.state;
    const res = await updatePassw(d.usuario,d.passNueva);
    console.log(res + ": updated");

}
  
  render() {
    return (
      <div align="center" className="MenuMainContainer">

        <h1 className="oblique"> Cambio de clave </h1>

        <hr></hr>
        <br />
        <br />

          <form className="capa" >

            <h4> Usuario:  </h4>
            <input type="text" name="usuario"  placeholder= 'Ingresar usuario'
            onChange={this.handleChange}  style={{width: "370px"}} required/>

            <br />
            <br />

            <h4> Ingresar Clave Anterior:  </h4>
            <input type="text" name="passAnt" placeholder='clave anterior'
            onChange={this.handleChange}  />

            <br />
            <br />

            <h4> Ingresar nueva clave:  </h4>
            <input type="text" name="passNueva" placeholder='clave nueva'
            onChange={this.handleChange}  />

            <br />
            <br />

            <Button onClick={() => this.update()}> Guardar </Button>

          </form>

      </div>

    );
  }

}
export default ChangeClave;

