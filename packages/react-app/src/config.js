import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x827c41298E1598195E7d6f398ec687F631CD23B4";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/VFVeT3J9yUX9SZs4FStpZUZSJyIUolda",
  },
};
