import React, { Component } from 'react';
import { getUserNotifications, getUserCollections, getProductCollection } from './consultas';
import { Table } from 'reactstrap';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Shopping_history extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: cookies.get('username'),
            notifications: [
                {
                    "amount": 2,
                    "user": "ronaldhg",
                    "client": "diazr",
                    "id_product": "djIJrSCzJmVefaV0vnCb",
                    "id": "bCVfMi8seRWdrzBFiW46"
                },
                {
                    "amount": 2,
                    "user": "ronaldhg",
                    "client": "diazr",
                    "id_product": "djIJrSCzJmVefaV0vnCb",
                    "id": "bCVfMi8seRWdrzBFiW46"
                }
            ],
        }
    }

    async componentDidMount() {

        const notifications = await getUserNotifications(this.state.user);

        for await (let object of notifications) {
            const produc_data = await getProductCollection(object.id_product);
            const client_data = await getUserCollections(object.client);

            object.produc_data = produc_data; // "description", "price", "product_name"
            object.client_data = client_data; // "exactAddress", "img", "lastname", "name", "tel"
        }
        this.setState({ notifications });
    }

    render() {
        return (
            <div>
                <h1 class="oblique" align='center'> Historial de Compras </h1>

                <ul>
                    {
                        this.state.notifications.map((value, index) => {
                            <li key={index.toString()}>{value.client}</li>
                        })
                    }
                </ul>

                {/* <View style={{ flexDirection: 'row' }}>
                    <Avatar rounded key={index.toString()} style={product_image} source={{ uri: item.produc_data.images[0] }} />
                    <View style={{ flexDirection: 'column', marginLeft: '4%', marginTop: '8%' }}>
                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{client.name + ' ' + client.lastname + " quiere este producto!"}</Text>
                        <Text style={{ fontSize: 11, fontStyle: 'italic' }}>{'\"' + product.product_name + '\"'}</Text>
                        <Text style={{ fontSize: 11, color: 'limegreen' }}>{'cantidad: ' + item.amount}</Text>

                        <Text style={{ fontSize: 11, textDecorationLine: 'underline', marginTop: '4%' }}>{"Contáctate con él(ella):"}</Text>
                        <Text style={tel}>
                            <Icon size={16} name='telephone' type='foundation' color='rgba(45, 107, 224, 0.9)' />
                            {'\t' + client.tel}
                        </Text>

                        <View style={{ marginLeft: '55%', marginTop: '-15%' }}>
                            <Icon raised size={22} name='trash' type='font-awesome' onPress={() => { this.setState({ indexToDelete: index, alert: true }) }} />
                        </View>
                    </View>

                </View> */}


            </div>


        );
    }
}

export default Shopping_history;