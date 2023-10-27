import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Gamba } from "gamba/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";

import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

function Root() {
  const wallets = React.useMemo(() => [new SolflareWalletAdapter()], []);

  return (
    <MemoryRouter>
      <ConnectionProvider
        endpoint={import.meta.env.GAMBA_SOLANA_RPC}
        config={{
          wsEndpoint: import.meta.env.GAMBA_SOLANA_RPC_WS,
          commitment: "processed",
        }}
      >
        <WalletProvider autoConnect wallets={wallets}>
          <WalletModalProvider>
            <Gamba creator="8rhHesd4JAnEQ67Hr6VJeqGccQXX7fuJSsQqmtqWT9W5">
              <App />
            </Gamba>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </MemoryRouter>
  );
}

root.render(<Root />);
