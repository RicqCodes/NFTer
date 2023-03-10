import Web3 from "web3";

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    `https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_PROJECT_ID}`
  )
);

export default web3;
