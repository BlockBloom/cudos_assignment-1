import { assets, chains } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

export const chainName = 'cudostestnet';
export const stakingDenom = 'cudos';
export const feeDenom = 'acudos';

export const cw20ContractAddress = 'wasm1p7vmrhl3s0fyl0m9hk2hlm7uuxq84hztur63n8ryh85chh30vt6q89shcv'
export const messagingContractAddress = 'cudos14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9strccpl'
export const rpcEndpoint = 'https://sentry1.gcp-uscentral1.cudos.org:36657/';

export const chainassets: AssetList = assets.find(
    (chain) => chain.chain_name === chainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
    (asset) => asset.base === stakingDenom
) as Asset;

export const chainEndpoint = chains.find(
    (chain) => chain.chain_name = chainName
)?.apis?.rpc?.at(1)?.address ?? rpcEndpoint;