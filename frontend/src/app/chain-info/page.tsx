'use client';

import { useEffect, useState } from 'react';
import { useBlockNumber, usePublicClient } from 'wagmi';
import { useRouter } from 'next/navigation';

export default function ChainInfo() {
  const publicClient = usePublicClient();
  const { data: blockNumber } = useBlockNumber();
  const [blockInfo, setBlockInfo] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const fetchBlockInfo = async () => {
      if (!blockNumber) return;

      const block = await publicClient.getBlock({ blockNumber });
      const gasPrice = await publicClient.getGasPrice();
      setBlockInfo({
        blockHash: block?.hash,
        gasUsed: block?.gasUsed?.toString(),
        gasPrice: gasPrice?.toString(),
        burntFees: (block?.baseFeePerGas * block?.gasUsed).toString(),
      });
    };

    fetchBlockInfo();
  }, [blockNumber]);

  return (
    <div>
      <h1>Chain Info</h1>
      <p>Current Chain ID: {publicClient.chain?.id}</p>
      <p>Last Block Number: {blockNumber}</p>
      <p>Last Block Hash: {blockInfo.blockHash}</p>
      <p>Gas Used: {blockInfo.gasUsed}</p>
      <p>Gas Price: {blockInfo.gasPrice}</p>
      <p>Burnt Fees: {blockInfo.burntFees}</p>

      <button onClick={() => router.push('/token-data')} style={{ marginTop: '20px' }}>
        Go to Token Data
      </button>
    </div>
  );
}
