const axios = require('axios');

const ALCHEMY_URL = "https://eth-goerli.g.alchemy.com/v2/YdOOp-hI-kiPEdEZbnnL0AOdUo-wVMSc";

axios.post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBlockByNumber",
    params: [
        "0xb443", // block 46147
        false // retrieve the full transaction object in transactions array
    ]
}).then((response) => {
    console.log(response.data.result);
});