require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note random update hunt casino slot gauge'; 
let testAccounts = [
"0xd53c753a9208a875de0e8a939a020fdc12deb22fcc918f0a60c38f8dd96d5d68",
"0x33f194c4d88e19204973d9e065a2e0bfb340ceb7e299b616a7f1e4afc0308273",
"0x8e7f40e6050285e8cb0af3673071e062d27e2e9e68db9a8df1a1600865bf5973",
"0x16b7648dcbae8f69ed923cd8a78a6f86834ceaa88a8595105dcc5a6f492fabb4",
"0x1345cd925b348ab4a15e865e20b14ad334dacc9bbe4879c889c986bd3cfde0da",
"0x5deb87f49570ae619a252cca10c5f69a4c81a94d532b0cab2822ca5bc3b042a4",
"0x457d3ad31df7a16a4fb8ba2e3e3f087c28108177d70a5d8d7a0a24d5ed94a2c6",
"0xbaca18a8760b8fb19939cb554a01bed4eb33ddc8c598137eb4a3512a502a18f2",
"0x3c89400d4c02c3cdfa9d702cc0e0975d60629d893517684a71c5b2ba109c5053",
"0x927ed99e712a83e97f95cfe5b25de8fe9de4468d9e675bfee0f8b3da05d035b6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

