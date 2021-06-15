import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class MenuP extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  ir_cambiarClave = async () => {
    window.location.href = "./ChangeClave";
  }

  ir_datapersonal = async () => {
    window.location.href = "./DataPersonal";
  }

  ir_historial = async () => {
    window.location.href = "./Shopping_history";
  }

  render() {
    return (
      <div align="center" className="MenuMainContainer">
        <h1 className="oblique" align='center'> Menu </h1>

        <hr></hr>
        <br />
        <br />

        <form className="capa" >

          <h4> Modificar datos Personales </h4>
          
            <Button  variant="btn btn-success"onClick={() => this.ir_datapersonal()}> Modificar_DP </Button>
         

          <h4> Cambiar Clave  </h4>
          
            <Button  variant="btn btn-success" onClick={() => this.ir_cambiarClave()}> Cambiar_clave </Button>
        

          <h4> Historial de Productos </h4>
          
            <Button  variant="btn btn-success" onClick={() => this.ir_historial()}> Historial </Button>
        

        </form>


      </div>
    )
  }
}

export default MenuP