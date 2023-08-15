import web3 from './web3';
import createFactory from './build/createFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(createFactory.interface),
    '0x3d17209d8bccb95e70d96cbade1277e2cc73a0d2'
    
);

export default instance;
