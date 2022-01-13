const web3 = new Web3("https://bsc-dataseed1.binance.org:443");

const decimal = 18;

const cakeAddress = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";
const bnbAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

function toReadable(num) {
  return BigInt(num) / BigInt(Math.pow(10, decimal));
}

//Aim: Lets find maximum cake containing pool

async function doesContainCake(contract) {
  const token0 = await contract.methods.token0().call();
  const token1 = await contract.methods.token1().call();
  if (
    bnbAddress.toLowerCase() === token0.toLowerCase() ||
    bnbAddress.toLowerCase() === token1.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

async function cakeAmount(contract) {
  const token0 = await contract.methods.token0().call();
  const token1 = await contract.methods.token1().call();
  const reserves = await contract.methods.getReserves().call();

  if (bnbAddress.toLowerCase() === token0.toLowerCase()) {
    return BigInt(reserves._reserve0);
  } else if (bnbAddress.toLowerCase() === token1.toLowerCase()) {
    return BigInt(reserves._reserve1);
  }
}

async function getName(contract) {
  const token0 = await contract.methods.token0().call();
  const token1 = await contract.methods.token1().call();
  const token0C = new web3.eth.Contract(tokenAbi, token0);
  const token1C = new web3.eth.Contract(tokenAbi, token1);

  if (bnbAddress.toLowerCase() === token0.toLowerCase()) {
    return await token1C.methods.name().call();
  } else if (bnbAddress.toLowerCase() === token1.toLowerCase()) {
    return await token0C.methods.name().call();
  }
}

async function main() {
  const masterChef = new web3.eth.Contract(
    masterChefAbi,
    "0x73feaa1eE314F8c655E354234017bE2193C9E24E"
  );

  //const cakePerBlock = await masterChef.methods.cakePerBlock().call();
  //const poolCakeBnb = await masterChef.methods.poolInfo(251).call();
  // BigInt

  //console.log(toReadable(cakePerBlock));
  //console.log(poolCakeBnb);

  const poolLength = parseInt(await masterChef.methods.poolLength().call());
  const pools = []; // contains pool contrats

  for (let i = 1; i < poolLength; i++) {
    if (i < 33 && i > 1) {
      continue; // we know that theese pools does not contain cake
    }

    const pool = await masterChef.methods.poolInfo(i).call();
    const poolContract = new web3.eth.Contract(pairAbi, pool.lpToken);
    try {
      if (await doesContainCake(poolContract)) {
        console.log("Found pool", i);
        pools.push(poolContract);
      } else {
        console.log("Not found pool", i);
      }
    } catch (ex) {
      console.log("Error");
    }
  }

  const poolsAndAmounts = (
    await Promise.all(
      pools.map(async (pool) => {
        try {
          return {
            pool: pool,
            amount: await cakeAmount(pool),
            name: await getName(pool),
          };
        } catch (ex) {
          return null;
        }
      })
    )
  ).filter((pa) => !!pa);

  poolsAndAmounts.sort((a, b) => {
    if (a.amount > b.amount) {
      return -1;
    } else if (a.amount < b.amount) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(poolsAndAmounts);

  // Now we have pools containing cake
  console.log("Done");
}

main();
