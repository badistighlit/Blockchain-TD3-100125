import { EvmBatchProcessor } from '@subsquid/evm-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as usdtAbi from './abi/usdt.ts'
import { Transfer } from './model/generated/transfer.model.ts'; // Chemin vers le fichier .ts
import { functions } from './abi/usdt'
import { Multicall } from './abi/multicall'


require('dotenv').config()

const processor = new EvmBatchProcessor()
  .setGateway('https://v2.archive.subsquid.io/network/ethereum-mainnet')
  .setRpcEndpoint({
    url: "https://rpc.ankr.com/eth",
    rateLimit: 10
  })
  .setFinalityConfirmation(75) // 15 mins to finality
  .addLog({
    address: [ '0xdAC17F958D2ee523a2206206994597C13D831ec7' ],
    topic0: [ usdtAbi.events.Transfer.topic ]
  })

  const db = new TypeormDatabase()

  processor.run(db, async ctx => {
    const transfers = [];
    for (let block of ctx.blocks) {
      for (let log of block.logs) {
        let {from, to, value} = usdtAbi.events.Transfer.decode(log)
        transfers.push(new Transfer({
          id: log.id,
          from, to, value
        }))
      }
    }
    await ctx.store.insert(transfers)
  })

  const MY_CONTRACT = '0xac5c7493036de60e63eb81c5e9a440b42f47ebf5'
  const MULTICALL_CONTRACT = '0x5ba1e12693dc8f9c48aad8770482f4739beed696'
  
  processor.run(new TypeormDatabase(), async (ctx) => {
    for (let c of ctx.blocks) {
      // some logic
    }
    const lastBlock = ctx.blocks[ctx.blocks.length - 1]
    const multicall = new Multicall(
      ctx,
      lastBlock,
      MULTICALL_CONTRACT
    )
    // call MY_CONTRACT.myContractMethod('foo') and MY_CONTRACT.myContractMethod('bar')
    const args = ['foo', 'bar']
    const results = await multicall.tryAggregate(
      functions.myContractMethod,
      args.map(a => [MY_CONTRACT, a]),

      100
    )
  
    results.forEach((res, i) => {
      if (res.success) {
        ctx.log.info(`Result for argument ${args[i]} is ${res.value}`)
      }
    })
  })