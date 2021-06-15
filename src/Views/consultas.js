const baseURL = "http://localhost:4000";


const updateUser = async (usuario, name, lastname, tel, exactAddress, biography) => {
    const url = baseURL+'/api/updateUserData';
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
    const url = '/api/updatePassw';
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
    console.log('entra')
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


const getAllProducts = async (user) => {
    const url = baseURL + '/api/getAllProducts';
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

const getUserProducts = async (user) => {
    console.log('entra')
    const url = baseURL + '/api/getUserProducts';
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


export {
    updateUser,
    updatePassw,
    validateUser,
    getUserCollections,
    getAllProducts,
    getUserProducts
}