import { toNano } from '@ton/core';
import { Secondcontract } from '../wrappers/Secondcontract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const secondcontract = provider.open(await Secondcontract.fromInit(5432n));

    const sum = await secondcontract.getSum()
    const id = await secondcontract.getId()
   
    console.log("Sum = ", sum , "Id" , id)
    console.log(secondcontract.address)
    // run methods on `secondcontract`
}
