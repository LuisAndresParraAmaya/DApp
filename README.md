# Aplicacion descentralizada (Dapp)  
## DEPENDENCIAS
### Para instalar las dependencias principales del proyecto se debe ubicarse al interior del directorio DAPP/ y luego utilizar npm install.
### Para instalar las dependencias principales del proyecto se debe ubicarse al interior del directorio DAPP/backend y luego utilizar npm install.
### Para instalar las dependencias principales del proyecto se debe ubicarse al interior del directorio DAPP/frontend y luego utilizar npm install.

## EJECUCIÓN
### Para ejecutar el sistema backend se debe ubicarse al interior del directorio DAPP/backend y luego utilizar npm run dev.
### Para ejecutar el sistema frontend se debe ubicarse al interior del directorio DAPP/frontend y luego utilizar npm run dev.

## DESPLIEGUE DEL CONTRATO SOBRE LA RED BLOCKCHAIN
### Para desplegar/registrar un contrato inteligente sobre la red blockchain se debe ubicarse al interior del directorio DAPP/blockchain y luego utilizar npx hardhat run scripts/Messenger.deploy.ts
### Probar que el despliegue/registro en la blockchain de prueba fue exitoso con npx hardhat test
### La clave hexadecimal resultante se debe ingresar en la variable DIRECCION_DE_BLOCKCHAIN_DONDE_SE_DESPLEGO_EL_CONTRATO, la cual se encuentra en DAPP/backend/.env