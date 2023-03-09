import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import web3 from "../modules/web3";
import Web3 from "web3";

// create the context
export const Web3Context = createContext({});

// define a component that will wrap the entire app and provide the context
export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState({});
  const [isConnected, setIsConnected] = useState(false);
  const [isEthereum, setIsEthereum] = useState(null);
  const [allNFTs, setAllNFTs] = useState([]);

  // check if Metamask is installed
  const checkMetamaskInstalled = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = window.ethereum;
        const account = await provider.request({
          method: "eth_requestAccounts",
        });
        setAccount(account);
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    } catch (error) {
      throw new Error("Metamask is not installed");
    }
  };

  // check if the user is on the Ethereum network
  const checkNetwork = async () => {
    const provider = await window.ethereum;
    if (provider) {
      try {
        const networkId = await provider.request({
          method: "net_version",
        });
        console.log(networkId);
        if (networkId !== "1") {
          setIsEthereum(false);
        } else {
          setIsEthereum(true);
        }
      } catch (err) {
        throw new Error("Please connect to Ethereum");
      }
    }
  };

  // connect to Metamask
  const connectWallet = async () => {
    await checkMetamaskInstalled();
    try {
      const accounts = await web3.eth.requestAccounts();
      console.log(accounts);
      setAccount(accounts[0]);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const provider = new Web3(Web3.givenProvider);
    setWeb3(provider);
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            await checkNetwork();
            setIsConnected(true);
          } else if (account.length === 0) {
            setIsConnected(false);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    getAccount();
  }, [account]);

  // create an object with the values to be provided by the context
  const contextValue = {
    web3,
    account,
    checkMetamaskInstalled,
    checkNetwork,
    connectWallet,
    isEthereum,
    allNFTs,
    setAllNFTs,
    isConnected,
    setAccount,
  };

  // return the context provider with the children components
  return (
    <Web3Context.Provider value={contextValue}>{children}</Web3Context.Provider>
  );
};
