// export const erc721ABI = [
//   {
//     inputs: [
//       { internalType: "string", name: "name", type: "string" },
//       { internalType: "string", name: "symbol", type: "string" },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       { indexed: true, internalType: "address", name: "from", type: "address" },
//       { indexed: true, internalType: "address", name: "to", type: "address" },
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
// ];

// export const erc1155ABI = [
//   {
//     inputs: [{ internalType: "string", name: "uri", type: "string" }],
//     name: "_setURI",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         components: [
//           { internalType: "address", name: "operator", type: "address" },
//           { internalType: "uint256", name: "id", type: "uint256" },
//         ],
//         internalType: "struct IERC1155.OperatorCheck[]",
//         name: "_operators",
//         type: "tuple[]",
//       },
//     ],
//     name: "setApprovalForAll",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "account", type: "address" },
//       { internalType: "uint256", name: "id", type: "uint256" },
//       { internalType: "uint256", name: "value", type: "uint256" },
//     ],
//     name: "safeTransferFrom",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "account", type: "address" },
//       { internalType: "uint256[]", name: "ids", type: "uint256[]" },
//       { internalType: "uint256[]", name: "values", type: "uint256[]" },
//       { internalType: "bytes", name: "data", type: "bytes" },
//     ],
//     name: "safeBatchTransferFrom",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "account", type: "address" },
//       { internalType: "uint256", name: "id", type: "uint256" },
//       { internalType: "uint256", name: "value", type: "uint256" },
//     ],
//     name: "balanceOfBatch",
//     outputs: [
//       { internalType: "uint256[]", name: "balances", type: "uint256[]" },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       { internalType: "address", name: "account", type: "address" },
//       { internalType: "uint256", name: "id", type: "uint256" },
//     ],
//     name: "balanceOf",
//     outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
// ];
