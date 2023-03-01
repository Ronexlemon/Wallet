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
    const [create,setCreate] = useState(false);

    function _generateMnemonic(){
        const strength = 128;
        const mnemonic = generateMnemonic(wordlist,strength);
        const  entropy = mnemonicToEntropy(mnemonic,wordlist);
        return {mnemonic,entropy};
    
    }
    function _getHdRootKey(_mnemonic){
        return HDKey.fromMasterSeed(_mnemonic);
    }
    
    function _generatePrivateKey(_hdRootKey,_accountIndex){
        return _hdRootKey.deriveChild(_accountIndex).privateKey;
    }
    function _getPublicKey(_privateKey){
        return getPublicKey(_privateKey);
    }
    function _getEthAddress(_publicKey){
        return keccak256(_publicKey).slice(-20);
    }
    const getUserAccount =(_address)=>{
      const account =  `0x${bytesToHex(_address)}`
      
      return account;

    }
    const createUserAccount =()=>{
        setCreate(true);
        
        
        const {mnemonic,entropy} = _generateMnemonic();
        console.log(`Warning! never disclose your seed phrase:\n ${mnemonic}`);
        setMnemonic(mnemonic);
        const hdRootKey = _getHdRootKey(entropy);
        const accountOneIndex =0;
        const accountOnePrivateKey = _generatePrivateKey(hdRootKey,accountOneIndex);
        const accountOnePublicKey = _getPublicKey(accountOnePrivateKey);
        const accountOneAddress = _getEthAddress(accountOnePublicKey);
        const account =  getUserAccount(accountOneAddress);
       
       setUserAddress(account);
       console.log(mnemonic)
       console.log(account)
       setCreate(false);
       
    }
    return(
        <div className="w-full  flex justify-center">
            <div className="w-full bg-slate-400 text-blue-200">
                <h4>{create?"creating...":""}</h4>
                <button onClick={()=>{createUserAccount()}}>
                    Create Account
                </button>
                <div className="text-green-200">
                    <h4>{seedPhrase}</h4>
                </div>
            </div>
            

        </div>
    )

}
export default CreateAccount;