import { AuthProvider } from "@arcana/auth";



const auth = new AuthProvider(
    "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063",
    {
      theme: "dark",
      connectOptions: {
        compact: true
      }
    }
  );
const provider = auth.provider
const connected = await auth.isLoggedIn()
console.log({ connected })
  
  // setHooks: Manage chain or account switch in Arcana wallet
  function setHooks() {
    provider.on('connect', async (params) => {
      console.log({ type: 'connect', params: params })
      const isLoggedIn = await auth.isLoggedIn()
      console.log({ isLoggedIn })
    })
    provider.on('accountsChanged', (params) => {
      //Handle
      console.log({ type: 'accountsChanged', params: params })
    })
    provider.on('chainChanged', async (params) => {
      console.log({ type: 'chainChanged', params: params })
    })
  }

  async function sendTransaction() {
    // setRequest('eth_sendTransaction')
    const hash = await provider.request({
      method: 'eth_sendTransaction',
        params: [{
        from,
        gasPrice: 0,
        to: '0xE28F01Cf69f27Ee17e552bFDFB7ff301ca07e780',
        value: '0x0de0b6b3a7640000',
      },],
    })
    console.log({ hash })
  }