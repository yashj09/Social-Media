import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import React from "react";

const Wallet = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "daa53108-7e85-4cc3-aabf-4032b12f4bd9",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  );
};

export default Wallet;
