import requester from '../../../infrastructure/requester';

const send = (endpoint, method, data) => requester(endpoint, method, data);

export default send; 