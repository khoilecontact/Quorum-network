// contract address - find in terminal
var address = "0x38Fef9ccf460A4d296f8327eBF7A9DfbD9135709";
var abi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"type":"constructor"}];
var private = eth.contract(abi).at(address)

// run the private transaction

// ./attach.sh 1
// ./attach.sh 2
// ./attach.sh 3

// var private = eth.contract([{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"type":"constructor"}]).at("");

//see key.js for key 
// 1->3
// private.set(200,{from:eth.accounts[0],privateFor:["1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg="]});

//1->2 
// private.set(202,{from:eth.accounts[0],privateFor:["QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc="]});

// 2->3
// private.set(212,{from:eth.accounts[1],privateFor:["1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg="]});

// member1
// BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=