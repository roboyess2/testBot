import { toNano } from '@ton/core';
import { Firstcontract } from '../wrappers/Firstcontract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const firstcontract = provider.open(await Firstcontract.fromInit(54325n));

    await firstcontract.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(firstcontract.address);

    // run methods on `firstcontract`
}
