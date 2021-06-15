import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { validateUser } from './consultas'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            contrasena: ''
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
    
   checkTextInput = async () => {
       
       if (!this.state.usuario.trim()) {
           return;
       }
       if (!this.state.contrasena.trim()) {
           return;
       }
       
      this.logeo();
   };
   
   //redirigir a la pagina Menu
    ir_Menu = async () => {
        window.location.href = "./MenuP";
    }

    //consulta al backend del usuario 
    logeo = async () => {
        const d = this.state;
        const res = await validateUser(d.usuario, d.contrasena);
        console.log(res + ": login");
        if(res){ //si true
            this.ir_Menu();
        }else{
            alert('No valido el Ingreso')
        }
    }

    render() {
        return (
            <div align='center' className='MenuMainContainer'>
                <h1> Sistema Administrador de Compra-Venta</h1>
                <form>
                    <br />
                    <br />
                    <h4> Usuario </h4>
                    <input type="text" name="usuario" placeholder='Ingresar Usuario'
                        onChange={this.handleChange} />

                    <br />
                    <br />
                    <h4> Contraseña </h4>
                    <input type="text" name="contrasena" placeholder='Ingresar Contraseña'
                        onChange={this.handleChange} />

                    <br />
                    <br />

                   
                    <Button onClick={() => this.logeo()}> Ingresar </Button>
                    

                    <br />
                    <Button onClick={() => this.ir_Menu()}> ir </Button>
                </form>
            </div>
        );
    }
}

export default Login;