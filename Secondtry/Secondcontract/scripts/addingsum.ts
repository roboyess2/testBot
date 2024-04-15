import { toNano } from '@ton/core';
import { Secondcontract } from '../wrappers/Secondcontract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const secondcontract = provider.open(await Secondcontract.fromInit(5432n));

    await secondcontract.send(provider.sender(),
    {value: toNano("0.02")},
    {$$type: "Amnt",amount: 5n}
    )

    // run methods on `secondcontract`
}
