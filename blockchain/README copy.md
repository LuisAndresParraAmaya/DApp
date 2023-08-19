# Basado en tecnologia hardhat. facilita la construcción, prueba y despliegue de contratos inteligentes en la cadena de blockchain

## Commands Guide
```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
# Comando para desplegar el contrato inteligente en la red blockchain.
npx hardhat run scripts/deploy.ts
# Este comando devuelve como resultado un codigo hexadecimal el cual es la dirección de la blockchain en donde se desplego el contrato inteligente. 

TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

