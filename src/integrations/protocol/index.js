// const Web3 = require("../web3");
//
// export const getReserveToken = async () => {
//   // TODO: fix this, hacking thisin the for demo. we're assuming
//   // the contract is deployed before launching the app, and that
//   // we don't have to deploy a new one for each CommonToken
//   const abi = require("@giveth/commons-abc-contracts/build/contracts/ERC20Mintable.json");
//   const web3 = await Web3.getWeb3();
//   const networkId = await web3.eth.net.getId();
//   return abi.networks[networkId].address;
// };
//
// export const getFundingPool = async () => {
//   // TODO: fix this, hacking thisin the for demo. we're assuming
//   // the contract is deployed before launching the app, and that
//   // we don't have to deploy a new one for each CommonToken
//   const abi = require("@giveth/commons-abc-contracts/build/contracts/FundingPoolMock.json");
//   const web3 = await Web3.getWeb3();
//   const networkId = await web3.eth.net.getId();
//   return abi.networks[networkId].address;
// };
