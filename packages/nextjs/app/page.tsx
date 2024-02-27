"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { addToken, sendTransaction } from "~~/utils/arcna-auth/sendToken";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();


  const handleSubmit = () => {
    console.log("button pressed")
    sendTransaction(connectedAddress!).then(()=>console.log("function executed"))
  }

  const handleTransaction = () => {
    console.log("button pressed")
    addToken().then(()=>console.log("function executed"))
  }
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Arcana POC</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <div className="text-center text-lg">
            {!connectedAddress && <p className="my-2 font-medium">Click on connecet wallet to proceed</p>}
            {connectedAddress && <div className="flex-col">
            <button onClick={handleSubmit} className="btn btn-primary btn-md">send tokens</button><button onClick={handleTransaction} className="btn btn-primary btn-md">Add Token</button></div>}
          </div>
        </div>
        <div className="">
        </div>
      </div>
    </>
  );
};

export default Home;
