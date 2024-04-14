import { mnemonicToWalletKey } from "ton-crypto"
import { TonClient, WalletContractV4, fromNano, internal } from "ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";


async function main() {
    const mnemonic = "brisk hole insect galaxy gauge away nation capital feature custom country save list salute peasant enable deny aunt position enough hat sort actual melody"
    const key = await mnemonicToWalletKey(mnemonic.split(" "));
    const wallet = WalletContractV4.create({publicKey: key.publicKey, workchain: 0})

    const endpoint = await getHttpEndpoint({network: "testnet"})
    const client = new TonClient({endpoint})

    console.log(await client.isContractDeployed(wallet.address))
    
    if(!await client.isContractDeployed(wallet.address)){
        return console.log("wallet is not")
    }
    console.log("wallet is dep")

    const balance = await client.getBalance(wallet.address)
    console.log("balance = ", fromNano(balance))

    const walletContract = client.open(wallet)
    const seqno = await walletContract.getSeqno()

    await walletContract.sendTransfer({
        secretKey: key.secretKey,
        seqno: seqno,
        messages: [internal({
            to:"EQA4V9tF4lY2S_J-sEQR7aUj9IwW-Ou2vJQlCn--2DLOLR5e",
            value: "0.05",
            body: "Hello it's me",
            bounce: false
        })]
    })

    let currentSeqno = seqno 
    while(currentSeqno==seqno){
        console.log("Waiting for transaction complete")
        await sleep(1500)
        currentSeqno = await walletContract.getSeqno()
    }
    console.log("Succsess")

} 

main()

function sleep(ms: number){
    return new Promise(resolve => setTimeout(resolve,ms))
}