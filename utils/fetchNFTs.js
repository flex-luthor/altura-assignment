const apiKey = "9xA0mirJQBwTKJuNv9eGDIwrTabmdSf-";
const endpoint = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;

export const fetchNFTs = async (owner, contractAddress, retryAttempt) => {
  if (retryAttempt === 5) {
    return;
  }
  if (owner) {
    let data;
    try {
      if (contractAddress) {
        data = await fetch(
          `${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`
        ).then((data) => data.json());
      } else {
        data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then((data) =>
          data.json()
        );
      }
    } catch (e) {
      fetchNFTs(endpoint, owner, contractAddress, retryAttempt + 1);
    }

    return data;
  }
};
