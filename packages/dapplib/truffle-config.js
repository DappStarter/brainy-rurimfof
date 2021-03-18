require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give narrow fog table name rice still essay hope cricket sunset general'; 
let testAccounts = [
"0x29101528d55b9ab1a1567fef7f0d0a153a7bbea88f4f2a51bfe4c7627d398145",
"0xe6a7df4135ab31b648609b6370bb2008ee46be6907d5825689cd8b4f0fcb7a08",
"0xd4333dcf7c3c052bc54d04861fd8f892dec5c3f71746cf1658187fe3530c38aa",
"0x94ec7a83beda54a2be2b915eae4956fb99872e3ae877f597a144a995388adbf6",
"0xa4c32ea5a887328375b83f8912a0426705cbddcff22028166f753b7d37e11d2b",
"0x092d1d99dc79cd57a5223ad211f3dbd67cf651d85e9d9a42e3d9c1aa6373e945",
"0xf18b35bf50be4d02492836cb31ab0b9280e4cc3cbf3b618fe2e3a23fc38e5284",
"0xe1e09571ba5b581e6818f64bc67380e79e0801253ed926ebdc77c112b68bf659",
"0x63aafede7f3632a89e23614b9baa6837f725666808d7590afa2426a5842c1886",
"0x1779273ac25dd752551a1400a415f9f05badc72c2789accd08f0132910fb1025"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

