const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/createFactory.json');

const provider = new HDWalletProvider(
    'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
    
    'https://sepolia.infura.io/v3/6ca2123f2ca4429696554d65afe8d5a9'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  //provider.engine.stop();
};
deploy();
