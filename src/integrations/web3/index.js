const Web3 = require("web3");
const abcLib = require("@giveth/commons-abc-lib");

let web3Instance = null;

export const getWeb3 = async () => {
  if (web3Instance) {
    return web3Instance;
  }

  const ethereum = window.ethereum;
  const web3 = window.web3;

  if (ethereum) {
    try {
      // Request account access if needed
      await ethereum.enable();

      // Accounts now exposed
      web3Instance = new Web3(ethereum);
      abcLib.initWeb3(ethereum);
      const accounts = await web3Instance.eth.getAccounts();
      web3Instance.eth.defaultAccount = accounts[0];

      return Promise.resolve(web3Instance);
    } catch (error) {
      return Promise.reject("User denied account access...");
    }
  }
  // Legacy dapp browsers
  else if (web3) {
    web3Instance = new Web3(web3.currentProvider);
    abcLib.initWeb3(web3.currentProvider);
    const accounts = await web3Instance.getAccounts();
    web3Instance.eth.defaultAccount = accounts[0];
    return Promise.resolve(web3Instance);
  }
  // Non-dapp browsers
  else {
    return Promise.reject(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

export const getAccount = async () => {
  const web3 = await getWeb3();
  return web3.eth.defaultAccount;
};
