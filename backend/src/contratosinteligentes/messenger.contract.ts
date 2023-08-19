import dotenv from 'dotenv';
import { ethers } from 'ethers';
import { Messenger__factory } from '../../../blockchain/typechain/factories/Messenger__factory';
import { BlockchainUrlsEnum } from './urls';

dotenv.config();

export const getMessengerContract = (
  url: BlockchainUrlsEnum = BlockchainUrlsEnum.POLYGON_MUMBAI
) => {
  const provider = new ethers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(process.env.LLAVE_PRIVADA_DUENO_BILLETERA!, provider);
  return new ethers.Contract(
    process.env.DIRECCION_DE_BLOCKCHAIN_DONDE_SE_DESPLEGO_EL_CONTRATO!,
    Messenger__factory.abi,
    wallet
  );
};
