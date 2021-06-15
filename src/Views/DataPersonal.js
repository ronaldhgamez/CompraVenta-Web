import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/DataPersonal_style.css';
import { updateUser,getUserCollections } from './consultas'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class DataPersonal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: cookies.get('username'),
            nombre: '',
            apellido: '',
            telefono: '',
            direccion: '',
            biografia: ''
            
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

    async componentDidMount() {
        
        const data = await getUserCollections(this.state.usuario);
        console.log(data)
        this.setState({ nombre: data.name , 
                        apellido: data.lastname ,
                        telefono: data.tel,
                        direccion: data.exactAddress,
                        biografia:data.biography});
    }

    update = async () => {
        const c = this.state;
        const updated = await updateUser(c.usuario, c.nombre, c.apellido, c.telefono, c.direccion, c.biografia);
        if (updated) {
            alert("Datos actualizados!");
        }
    }

    render() {
        return (
            <div align="center" className="MenuMainContainer">

                <h1 className="oblique"> Modificar Datos Personales</h1>
                <form>
                    <h4> Usuario:  </h4>
                    <input type="text" name="usuario" placeholder='Ingresar usuario' value={this.state.usuario }
                        onChange={this.handleChange} style={{ width: "370px" }} required />
                </form>

                <br />
                <br />

                <form >
                    <hr></hr>
                    <br />
                    <br />
                    <h4> Nombre: </h4>
                    <input name="nombre" type="text" value={this.state.nombre }
                        onChange={this.handleChange} placeholder="Ingresar nombre"></input>

                    <br />
                    <h4> Apellidos: </h4>
                    <input name="apellido" type="text" value={this.state.apellido }
                        onChange={this.handleChange} placeholder="Ingresar apellidos"></input>

                    <br />
                    <h4> Telefono: </h4>
                    <input name="telefono" type="text" value={this.state.telefono }
                        onChange={this.handleChange} placeholder="Ingresar Telefono"></input>

                    <br />
                    <h4> Direccion: </h4>
                    <textarea name="direccion" value={this.state.direccion }
                        onChange={this.handleChange}
                        placeholder="Ingresar Direccion"
                        style={{ width: "370px" }}></textarea>

                    <br />
                    <h4> Biografia: </h4>
                    <textarea name="biografia" value={this.state.biografia }
                        onChange={this.handleChange}
                        placeholder="Ingresar bio"
                        style={{ width: "370px" }}></textarea>

                    <br />
                    <br />
                </form>
                <Button onClick={() => this.update()}> Guardar </Button>

            </div>

        );
    }
}

export default DataPersonal;