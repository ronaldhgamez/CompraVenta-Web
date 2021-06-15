const baseURL = "https://compra-venta-backend-nodejs.herokuapp.com";


const updateUser = async (usuario, name, lastname, tel, exactAddress, biography) => {
    const url = baseURL +'/api/updateUserData';
    const body = {
        user: usuario,
        name: name,
        lastname: lastname,
        tel: tel,
        exactAddress: exactAddress,
        biography: biography
    };
    console.log(body);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    var response = await fetch(url, requestOptions);
    let json = await response.json();
    return json.updated
    
}


const updatePassw = async (user, pass) => {
    const url = baseURL + '/api/updatePassw';
    const body = {
        user: user,
        pass: pass
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    var response = await fetch(url, requestOptions);
    let json = await response.json();
    return json.updated
    
}

const validateUser = async (user, pass) => {
    const url = baseURL + '/api/validateUser';
    const body = { user: user, pass: pass };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        let json = await response.json(); // json={ valido: <true|false> }
        return json.valid;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getUserCollections = async (user) => {
    const url = baseURL + '/api/getUserCollections';
    const body = { user: user};
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        let json = await response.json(); // json={ valido: <true|false> }
        return json;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getUserNotifications = async (user) => {

    const url = `${baseURL}/api/getUserNotifications`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "user": user })
    });
    return await response.json();
}

const getProductCollection = async (id) => {

    const url = `${baseURL}/api/getProductCollection`;
    const body = { "id": id };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return await response.json();
}

export {
    updateUser,
    updatePassw,
    validateUser,
    getUserCollections,
    getUserNotifications,
    getProductCollection
}