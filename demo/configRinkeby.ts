import { Config } from '@nevermined-io/nevermined-sdk-js';
import { LogLevel } from '@nevermined-io/nevermined-sdk-js/dist/node/utils';
import HDWalletProvider =  require('@truffle/hdwallet-provider');


export default {
    metadataUri: 'http://metadata.keyko.rocks',
    gatewayUri: 'http://gateway.keyko.rocks/',
    nodeUri: `https://rinkeby.infura.io/v3/6a91d92ed84f457a9e54f808a60417a1`,
    gatewayAddress: '0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0',
    web3Provider: new HDWalletProvider({
        mnemonic: 'taxi music thumb unique chat sand crew more leg another off lamp',
        providerOrUrl: 'https://rinkeby.infura.io/v3/6a91d92ed84f457a9e54f808a60417a1',
        addressIndex: 0,
        numberOfAddresses: 5}),
    verbose: LogLevel.Error
} as Config