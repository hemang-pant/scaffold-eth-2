import { ParticleNetwork } from "@particle-network/auth";
import { particleWallet } from "@particle-network/rainbowkit-ext";

export const ParticleAuth = ({ chains, authType }) => {
    new ParticleNetwork({
        projectId: '36a94c01-4ec5-41ce-adff-eae351a6f395',
        clientKey: 'ckXv19GObNS9FFFcpTbh2UX7KC2JGDI06FGc9xoA',
        appId: '67a11c74-c499-473d-a0ac-2641565e7523',
    });
    return  particleWallet({ chains: chains, authType: authType });
  };

// export {ParticleAuth}