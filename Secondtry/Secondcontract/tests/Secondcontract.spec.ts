import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { Secondcontract } from '../wrappers/Secondcontract';
import '@ton/test-utils';

describe('Secondcontract', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let secondcontract: SandboxContract<Secondcontract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        secondcontract = blockchain.openContract(await Secondcontract.fromInit(1000n));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await secondcontract.send(
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
            to: secondcontract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and secondcontract are ready to use
    });

    it("Must increase",async ()=>{
        const Sumbefore = await secondcontract.getSum()

        const amount = 5n;

        console.log("Sum before transaction", Sumbefore)

        await secondcontract.send(
            deployer.getSender(),
            {
                value: toNano("0.02")
            },
            {
                $$type: "Amnt",
                amount: amount
            }
            
        )

        const amountafter = await secondcontract.getSum()

        console.log("sumafter=", amountafter)

        expect(Sumbefore).toBeLessThan(amountafter)
    })

});
