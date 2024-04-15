import { toNano } from '@ton/core';
import { Firstcontract } from '../wrappers/Firstcontract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const firstcontract = provider.open(await Firstcontract.fromInit(54325n));

    const counter = await firstcontract.getCounter()
    const id = await firstcontract.getId()
   
    console.log('Counter -', counter, 'id -',id)

    // run methods on `firstcontract`
}
