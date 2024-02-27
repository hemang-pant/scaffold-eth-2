import { AuthProvider } from "@arcana/auth";
import { useAccount } from "wagmi";
import { getAuthProvider } from "./getArcanaauth";


export const signTransaction = async (from: String) => {
  try{
    const { sig } = await getAuthProvider().provider.request({
      "method": "eth_signTransaction",
      "params": [{
          "type": "0x2",
          "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
          "data": "0x684660005260206000f360005260096017f3",
          "gas": "0x520008",
          "maxPriorityFeePerGas": "0x10",
          "maxFeePerGas": "0x100"
      }],
    })
    console.log({ sig })
  }
  catch (e) {
    console.log(e)
  }
 
}


export const addToken = async () => {
 try{
    const { sig } = await getAuthProvider().provider.request({
      method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
            symbol: 'Sample TOken',
            decimals: 18,
            image: 'https://foo.io/token-image.svg',
        },
      },
    })
    console.log({ sig })
  }
  catch (e) {
    console.log(e)
  }
}

  export const sendTransaction = async (from: String) => {
    // setRequest('eth_sendTransaction')
    try{
      console.log("functio called")
    const hash = await getAuthProvider().provider.request({
      method: 'eth_sendTransaction',
        params: [{
        from: from,
        gasPrice: 0,
        to: '0xE28F01Cf69f27Ee17e552bFDFB7ff301ca07e780',
        value: '0x0de0b6b3a7640000',
      },],
    })
    console.log({hash})
    }
    catch (e) {
      console.log(e)
    }
  }

