'use client';

import { useEffect, useState } from 'react';
import { useAccount, useConnect, useDisconnect, useBalance, usePublicClient } from 'wagmi';
import { useRouter } from 'next/navigation';

function App() {
  const { address, isConnected } = useAccount();
  const { connectors, connect, error, status } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });
  const publicClient = usePublicClient(); // Remplacement de useNetwork
  const router = useRouter();

  return (
    <div style={{ padding: '20px' }}>
      {/* Section Account */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Account</h2>
        {isConnected ? (
          <div>
            <p>Status: Connected</p>
            <p>Address: {address}</p>
            <p>Balance: {balance?.formatted} ETH</p>
            <p>Chain ID: {publicClient.chain?.id}</p>
            <p>Chain Name: {publicClient.chain?.name}</p>
            <button onClick={() => disconnect()} style={{ marginTop: '10px' }}>
              Disconnect
            </button>
          </div>
        ) : (
          <p>Not connected</p>
        )}
      </div>

      {/* Section Connect */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            type="button"
            disabled={!connector.ready}
            style={{ marginRight: '10px', padding: '10px' }}
          >
            Connect with {connector.name}
          </button>
        ))}
        {status === 'connecting' && <p>Connecting...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </div>

      <button
        onClick={() => router.push('/chain-info')}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          cursor: 'pointer',
        }}
      >
        Go to Chain Info
      </button>
    </div>
  );
}

export default App;
