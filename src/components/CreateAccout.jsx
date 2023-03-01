import React,{useState} from "react";

import   { generateMnemonic, mnemonicToEntropy } from "ethereum-cryptography/bip39";
import  { wordlist } from "ethereum-cryptography/bip39/wordlists/english";
import  { HDKey } from "ethereum-cryptography/hdkey";
import  { getPublicKey } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import  { bytesToHex } from "ethereum-cryptography/utils";


const CreateAccount =()=>{
    const [useraddress,setUserAddress] = useState();
    const [seedPhrase,setMnemonic] = useState();

    const strength = 128;
    const _generateMnemonic =()=>{
        const mnemonic = generateMnemonic(wordlist,strength);
        const entropy = mnemonicToEntropy(mnemonic,wordlist);
        return {mnemonic,entropy}
        
    }
    const __getHdRootKey = (_mnemonic)=>{
        return HDKey.fromMasterSeed(_mnemonic);

    }
    const _generatePrivateKey=(_hdRootKey,_accountIndex)=>{
        return _hdRootKey.deriveChild(_accountIndex).privateKey;
    }
    const _getPublicKey =(_privateKey)=>{
        return getPublicKey(_privateKey);

    }
    const _getEthAddress=(_publicKey)=>{
        return keccak256(_publicKey).slice(-20);
    }
    const getUserAccount =(_address)=>{
      const account =  `0x${bytesToHex(_address)}`
      
      return account;

    }
    const createUserAccount =async()=>{
        const {mnemonic,entropy} = generateMnemonic();
        setMnemonic(mnemonic);
        const hdRootKey = __getHdRootKey(mnemonic);
        const userPrivateKey = _generatePrivateKey(hdRootKey);
        const userPublicKey = _getPublicKey(userPrivateKey);
        const userAddress = _getEthAddress(userPrivateKey);
       const account =  getUserAccount(userAddress);
       setUserAddress(account);
    }
    return(
        <div className="w-full h-8 flex justify-center">
            <div className="w-full bg-slate-400 text-blue-200">
                <button>
                    Create Account
                </button>
            </div>

        </div>
    )

}
export default CreateAccount;