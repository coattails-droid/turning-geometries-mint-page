// Turning Geometries — mint page configuration.
//
// Deployed on Ethereum mainnet 2026-11-14 (packet v13 build; contract
// pin 6fd2e553…). This file is the only place that names the address.

const CONFIG = {
  CONTRACT_ADDRESS: "0x1Dc909aF05888175b41c662eF7295F5645E281Bb",

  // Ethereum mainnet
  CHAIN_ID: "0x1",
  CHAIN_NAME: "Ethereum mainnet",
  EXPLORER_TX_BASE: "https://etherscan.io/tx/",
  EXPLORER_ADDRESS_BASE: "https://etherscan.io/address/",

  // Sale parameters (must match the deployed contract)
  MAX_SUPPLY: 25,
  MINT_PRICE_WEI_HEX: "0x38d7ea4c68000", // 0.001 ETH, exact — the contract reverts over/underpayment
  MINT_PRICE_ETH: "0.001",

  ROYALTY_BPS: 1000, // 10%, hard-capped on-chain
  ROYALTY_RECEIVER_ENS: "coattails.eth",

  // 4-byte selectors of the contract functions the page calls.
  // Verified against the deployed TurningGeometries contract with
  // `cast sig` on 2026-11-14:
  //   mint() -> 0x1249c58b, totalSupply() -> 0x18160ddd,
  //   mintPrice() -> 0x6817c76c, saleActive() -> 0x68428a1b,
  //   MAX_SUPPLY() -> 0x32cb6b0c
  SELECTORS: {
    mint: "0x1249c58b",
    totalSupply: "0x18160ddd",
    mintPrice: "0x6817c76c",
    saleActive: "0x68428a1b",
    maxSupply: "0x32cb6b0c",
  },
};
