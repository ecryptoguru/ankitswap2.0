import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x40069B4CF0Cb0F099F91a95642f2AF82823c9CE2";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/VFVeT3J9yUX9SZs4FStpZUZSJyIUolda",
  },
};
