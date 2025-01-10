'use client';

import { useEffect, useState } from 'react';

export default function TokenData() {
  const [tokenData, setTokenData] = useState<any>(null);

  useEffect(() => {
    const fetchTokenData = async () => {
      // Exemple de données statiques. Remplacez par une requête réelle vers votre SQD Indexer.
      const data = {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        totalSupply: '120000000',
      };
      setTokenData(data);
    };

    fetchTokenData();
  }, []);

  return (
    <div>
      <h1>Token Data</h1>
      {tokenData ? (
        <div>
          <p>Symbol: {tokenData.symbol}</p>
          <p>Name: {tokenData.name}</p>
          <p>Decimals: {tokenData.decimals}</p>
          <p>Total Supply: {tokenData.totalSupply}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
