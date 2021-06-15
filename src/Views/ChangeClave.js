import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/ChangeClave_style.css';
import { updatePassw, getUserCollections } from './consultas';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class ChangeClave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: cookies.get('username'),
      passNueva: '',
      passAnt: '',
      anterior: ''
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  async componentDidMount() {
    const data = await getUserCollections(this.state.usuario);
    this.setState({ anterior: data.pass });
  }

  update = async () => {
    if (this.state.passAnt === this.state.anterior) {
      const d = this.state;
      await updatePassw(d.usuario, d.passNueva);
      window.location.reload();
      alert("Contraseña actualizada!");
    } else {
      alert("Contraseña anterior no coincide");
    }
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
          <input type="text" name="usuario" placeholder='Ingresar usuario' value={this.state.usuario}
            onChange={this.handleChange} style={{ width: "370px" }} required />

          <br />
          <br />

          <h4> Ingresar Clave Anterior:  </h4>
          <input type="text" name="passAnt" placeholder='clave anterior'
            onChange={this.handleChange} />

          <br />
          <br />

          <h4> Ingresar nueva clave:  </h4>
          <input type="text" name="passNueva" placeholder='clave nueva'
            onChange={this.handleChange} />

          <br />
          <br />

          <Button onClick={() => this.update()}> Guardar </Button>

        </form>

      </div>

    );
  }

}
export default ChangeClave;

