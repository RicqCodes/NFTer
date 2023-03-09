export const reduceAddress = function (addr) {
  const firstEOA = addr?.slice(0, 6);
  const lastEOA = addr.slice(-4);
  return `${firstEOA}...${lastEOA}`;
};

export const resolveLink = (url) => {
  if (!url || !url.includes("ipfs://")) return url;
  return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
};

export function extractNumberFromString(str) {
  const regex = /\d+/;
  const result = str.match(regex);
  return result ? parseInt(result[0]) : null;
}

export const extractErrorMessage = (errorString) => {
  const errorMessage = errorString.message;
  const prefix = "Error: ";
  const index = errorMessage.indexOf(prefix);
  if (index !== -1) {
    return errorMessage.slice(index + prefix.length);
  }
  return errorMessage;
};
