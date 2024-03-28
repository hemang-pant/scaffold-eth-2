import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { ArcanaConnector } from "@arcana/auth-wagmi";

import { sequenceLogo } from "./logo";
import { getAuthProvider } from "./getArcanaauth";
import { ParticleAuth } from "../particle-auth/particleAuth";

export const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Login with Email/Social",
    iconUrl: sequenceLogo,
    iconBackground: "#101010",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
          auth: getAuthProvider()
        }
      });
      return {
        connector
      };
    }
  };
};

const connectors = (chains) =>
  connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [ArcanaRainbowConnector({ chains })]
    },
    {
      groupName: "Particle Auth",
      wallets: [
        ParticleAuth({chains: chains, authType: "google"}),
        ParticleAuth({chains: chains, authType: "apple"}),
        ParticleAuth({chains: chains, authType: "facebook"}),
        ParticleAuth({ chains }),
      ]
    }
  ]);

export { connectors };