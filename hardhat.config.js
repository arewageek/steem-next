/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  paths: {
    sources: "./src/solidity/contracts",
    tests: "./src/solidity/tests",
    cache: "./src/solidity/cache",
    artifacts: "./src/solidity/artifacts"
  }
};
