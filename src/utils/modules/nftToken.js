// import { Alchemy, Network } from "alchemy-sdk";
import axios from "axios";
import { toast } from "react-hot-toast";

import { resolveLink } from "../helpers";

export const getNFTsFromWallet = async (walletAddress) => {
  // Get all NFTs
  try {
    const response = await axios.get(
      `https://deep-index.moralis.io/api/v2/${walletAddress}/nft?chain=eth&format=decimal`,
      {
        headers: {
          accept: "application/json",
          "X-API-Key":
            "IJL0CZ711LORjoSksOwOPQl6hnBfgHwuvYHDW2UVxDWXhxrpqa5KEHJEdJpaGb4J",
        },
      }
    );

    const data = response.data.result;
    const metadata = data?.map((d) => {
      const parsedData = JSON.parse(d.metadata);
      return {
        owner: d?.owner_of,
        type: d?.contract_type,
        tokenAddress: d?.token_address,
        tokenId: d?.token_id,
        name: parsedData?.name,
        description: parsedData?.description,
        image: resolveLink(parsedData?.image),
      };
    });

    return metadata;
  } catch (error) {
    toast.error(error.message);
  }
};
