import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { Firstcontract } from '../wrappers/Firstcontract';
import '@ton/test-utils';

describe('Firstcontract', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let firstcontract: SandboxContract<Firstcontract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        firstcontract = blockchain.openContract(await Firstcontract.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await firstcontract.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: firstcontract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and firstcontract are ready to use
    });

    it("Should increase", async ()=>{
        const counterBefore = await firstcontract.getCounter()

        console.log("CounterBefore = ", counterBefore)

        await firstcontract.send(
            deployer.getSender(),
            {
                value: toNano("0.02")
            },
            'increment'
        )
        const counterAfter = await firstcontract.getCounter()

        console.log("counterAfter = ", counterAfter)

        expect(counterBefore).toBeLessThan(counterAfter)
    })

    it("Should  with msg:Amount", async ()=>{
        const counterBefore = await firstcontract.getCounter()

        const amount = 5n;
        
        console.log("CounterBefore = ", counterBefore)

        await firstcontract.send(
            deployer.getSender(),
            {
                value: toNano("0.02")
            },
            {
                $$type: "Add",
                amount: amount
            }
        )
        const counterAfter = await firstcontract.getCounter()

        console.log("counterAfter = ", counterAfter)

        expect(counterBefore).toBeLessThan(counterAfter)
    })


});
