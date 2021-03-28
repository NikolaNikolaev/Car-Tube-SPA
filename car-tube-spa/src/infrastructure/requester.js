const BASE_URL = 'http://localhost:5000';

const requester = async (endpoint, method, body) => {
    let options = { method };
    if (body) { Object.assign(options, { headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }) };

    const response = await fetch(BASE_URL + endpoint, options);
    return await response.json();
};

export default requester;