const Web3 = require("web3");

let web3Instance = null;

export const getWeb3 = async () => {
  if (web3Instance) {
    return web3Instance;
  }

  const ethereum = window.ethereum;
  const web3 = window.web3;

  if (ethereum) {
    try {
      console.log("FOOBARBAZ");
      // Request account access if needed
      await ethereum.enable();

      console.log("ANDHERE");

      // Accounts now exposed
      web3Instance = new Web3(ethereum);
      console.log("HOTDOG");
      const accounts = await web3Instance.eth.getAccounts();
      web3Instance.eth.defaultAccount = accounts[0];

      console.log("MADEITHERE");

      return Promise.resolve(web3Instance);
    } catch (error) {
      console.log("REJECTED?");
      return Promise.reject("User denied account access...");
    }
  }
  // Legacy dapp browsers
  else if (web3) {
    web3Instance = new Web3(web3.currentProvider);
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
  console.log("GOTIT");
  return web3.eth.defaultAccount;
};
