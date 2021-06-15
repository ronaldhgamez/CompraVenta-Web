import React, { Component } from 'react';
import { getAllProducts,getUserProducts} from './consultas';
import {Table} from 'reactstrap';

class Shopping_history extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            nombre:'',
            precio: '',
            descripcion: '',
            propietario: '',
            //-------
            cantidad:'',
            owner:'',
            status:''


        }
    }

    async componentDidMount() {
        const data = await getAllProducts(this.state.usuario);
        console.log(data)
        this.setState({ usuario: data.user , 
                        nombre: data.product_name ,
                        precio: data.price,
                        descripcion: data.description});
    }

    async componentDidMount2() {
        const data = await getUserProducts(this.state.usuario);
        console.log(data)
        this.setState({ usuario: data.user , 
            cantidad: data.amount ,
            owner: data.owner_username,
            status: data.status});
    }

    view = async () => {
        const c = this.state;
        console.log(c);
        console.log("........")
        const updated = await getAllProducts(c.usuario, c.nombre, c.precio, c.descripcion);
        console.table(updated);
    }

    view2 = async () => {
        const c = this.state;
        console.log(c);
        console.log("........")
        const updated = await getUserProducts(c.usuario, c.cantidad, c.owner, c.status);
        
        console.table(updated);
    }

    render() {
        return (
            <div>
                <h1 class="oblique" align='center'> Historial de Compras </h1>
                <button onClick={() => this.view()}> completo </button>
                <br/>
                <br/>
                <button onClick={() => this.view2()}> mi historial </button>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre  /</th>
                            <th>Precio   /</th>
                            <th>Descripcion   /</th>
                            <th>Propietario   /</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>

               
            </div>
            

        );
    }
}

export default Shopping_history;