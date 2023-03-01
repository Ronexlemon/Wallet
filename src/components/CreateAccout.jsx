import React from "react";

import   { generateMnemonic, mnemonicToEntropy } from "ethereum-cryptography/bip39";
import  { wordlist } from "ethereum-cryptography/bip39/wordlists/english";
import  { HDKey } from "ethereum-cryptography/hdkey";
import  { getPublicKey } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import  { bytesToHex } from "ethereum-cryptography/utils";
import { writeFileSync,readFileSync } from "fs";

const CreateAccount =()=>{
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