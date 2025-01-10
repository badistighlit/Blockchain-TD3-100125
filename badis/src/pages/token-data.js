import { useState } from 'react';
import { getTokenInfo, getTokenBalances, getTokenMetrics } from '../sqd-client';

export default function TokenData() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [tokenInfo, setTokenInfo] = useState(null);
  const [balances, setBalances] = useState([]);
  const [metrics, setMetrics] = useState(null);

  const fetchTokenData = async () => {
    try {
      const info = await getTokenInfo(tokenAddress);
      const userBalances = await getTokenBalances(userAddress);
      const tokenMetrics = await getTokenMetrics(tokenAddress);

      setTokenInfo(info);
      setBalances(userBalances);
      setMetrics(tokenMetrics);
    } catch (error) {
      console.error('Error fetching token data:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Token Data</h1>
      <input
        type="text"
        placeholder="Token Address"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <button onClick={fetchTokenData}>Fetch Data</button>

      {tokenInfo && (
        <div>
          <h2>Token Information</h2>
          <p>Symbol: {tokenInfo.symbol}</p>
          <p>Name: {tokenInfo.name}</p>
          <p>Decimals: {tokenInfo.decimals}</p>
          <p>Total Supply: {tokenInfo.totalSupply}</p>
        </div>
      )}

      {balances.length > 0 && (
        <div>
          <h2>Token Balances</h2>
          {balances.map((balance, idx) => (
            <div key={idx}>
              <p>Token: {balance.token.symbol} ({balance.token.name})</p>
              <p>Balance: {balance.balance}</p>
            </div>
          ))}
        </div>
      )}

      {metrics && (
        <div>
          <h2>Token Metrics</h2>
          <p>Total Transfers: {metrics.totalTransfers}</p>
          <p>Number of Holders: {metrics.holdersCount}</p>
        </div>
      )}
    </div>
  );
}
