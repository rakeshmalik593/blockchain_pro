$(window).on("load", function() {
    connectToContract();
});
const displayAmount = async ()=>{
    const bal = document.getElementById("ethBalance");
    const amount = sessionStorage.getItem("ethereumBalance");
    console.log(amount);
    // console.log(parseFloat(amount).toFixed(4));
    document.getElementById("ethBalance").innerText = `${parseFloat(amount).toFixed(4)}`;
    button = document.getElementById("btn");
};
displayAmount();
const getUserAccountBalance = async ()=>{
    var balanceInWei;
    await window.web3.eth.userAccountBalance(sessionStorage.getItem("loggedAccount")).then(function(response) {
        console.log(response);
        balanceInWei = response;
    });
    console.log(balanceInWei);
    //const balance = await window.contract.methods.userAccountBalance().call();
    const etherValue = window.web3.utils.fromWei(String(balanceInWei), "ether");
    document.getElementById("pb").innerHTML = `Yo have ${etherValue}`;
    sessionStorage.setItem("ethereumBalance", etherValue);
//console.log(bal);
};
const sendtoAnyAddress = async ()=>{
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("receiver").value;
    await window.contract.methods.sendAmount(address, amount).send({
        from: account
    });
};
const connectToContract = async ()=>{
    const ABI = [
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userAccount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userExists",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "createAcc",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "deposit",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "userAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TransferAmount",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "toAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sendAmount",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "userAccountBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "accountExist",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const Address = "a0097Af1eD7D788dCd688Ccb14741ddEf7BF9839";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    //sessionStorage.setItem('cont',JSON.stringify(contract.methods));
    //document.getElementById("contractArea").innerHTML = "Connected to Contract"; // calling the elementID above
    //getUserAccountBalance();
    //getContractAccount();
    console.log(window.contract);
};
const depositAmount = async ()=>{
    const options = {
        const: localStorage.getItem("account_address"),
        const: web3.utils.toWei(document.getElementById("depositValue").value, "ether")
    };
    await window.contract.methods.deposit().send({
        from: localStorage.getItem("account_address")
    });
// return 'Deposited Successfully';
};

//# sourceMappingURL=index.d0b8a302.js.map
