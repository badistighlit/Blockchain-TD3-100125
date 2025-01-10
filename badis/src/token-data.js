import client from './sqd-client';

export async function getTokenInfo(tokenAddress) {
  const query = `
    query TokenInfo($tokenAddress: String!) {
      tokenInfo(address: $tokenAddress) {
        symbol
        name
        decimals
        totalSupply
      }
    }
  `;

  const variables = { tokenAddress };
  const data = await client.request(query, variables);
  return data.tokenInfo;
}

export async function getTokenBalances(address) {
  const query = `
    query TokenBalances($address: String!) {
      tokenBalances(address: $address) {
        token {
          symbol
          name
        }
        balance
      }
    }
  `;

  const variables = { address };
  const data = await client.request(query, variables);
  return data.tokenBalances;
}

export async function getTokenMetrics(tokenAddress) {
  const query = `
    query TokenMetrics($tokenAddress: String!) {
      tokenMetrics(address: $tokenAddress) {
        totalTransfers
        holdersCount
      }
    }
  `;

  const variables = { tokenAddress };
  const data = await client.request(query, variables);
  return data.tokenMetrics;
}
