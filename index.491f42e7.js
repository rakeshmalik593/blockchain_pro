$(document).ready(function() {
    //same as: $(function() {
    connectMetamask();
});
const connectMetamask = async ()=>{
    const connectButton = document.getElementById("metbtn");
    if (!!window.ethereum) {
        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });
        console.log(accounts);
        account = accounts[0];
        localStorage.setItem("account_address", account);
        //console.log(localStorage.getItem('account_'));
        accountArea = document.getElementById("accountArea");
        connectButton.style.visibility = "hidden";
        accountArea.innerHTML = `Logged in with Account: ${localStorage.getItem("account_address")}`;
        localStorage.setItem("loggedAccount", account);
        connectToContract();
    } else {
        console.log("install metamask");
        connectButton.textContent = "You need to install Metamask first";
    }
};
const connectToContract = async ()=>{
    const ABI = [
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            name: "userAccount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            name: "userExists",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        },
        {
            constant: false,
            inputs: [],
            name: "createAcc",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string"
                }
            ],
            payable: true,
            stateMutability: "payable",
            type: "function"
        },
        {
            constant: false,
            inputs: [],
            name: "deposit",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string"
                }
            ],
            payable: true,
            stateMutability: "payable",
            type: "function"
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }
            ],
            name: "withdraw",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string"
                }
            ],
            payable: true,
            stateMutability: "payable",
            type: "function"
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address payable",
                    name: "userAddress",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }
            ],
            name: "TransferAmount",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string"
                }
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address payable",
                    name: "toAddress",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }
            ],
            name: "sendAmount",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string"
                }
            ],
            payable: true,
            stateMutability: "payable",
            type: "function"
        },
        {
            constant: true,
            inputs: [],
            name: "userAccountBalance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        },
        {
            constant: true,
            inputs: [],
            name: "accountExist",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        }
    ];
    const Address = "a0097Af1eD7D788dCd688Ccb14741ddEf7BF9839";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    //sessionStorage.setItem('cont',JSON.stringify(contract.methods));
    //document.getElementById("contractArea").innerHTML = "Connected to Contract"; // calling the elementID above
    getUserAccountBalance();
    getContractAccount();
};
const getContractAccount = async ()=>{
    const data = await window.contract.methods.createAcc().call();
    console.log(data);
//document.getElementById("contractAccount").innerHTML = `Contract Account: ${data}`;
};
const getUserAccountBalance = async ()=>{
    var balanceInWei;
    await window.web3.eth.getBalance(localStorage.getItem("loggedAccount")).then(function(response) {
        console.log(response);
        balanceInWei = response;
    });
    console.log(balanceInWei);
    //const balance = await window.contract.methods.userAccountBalance().call();
    const etherValue = window.web3.utils.fromWei(String(balanceInWei), "ether");
    localStorage.setItem("ethereumBalance", parseFloat(etherValue).toFixed(4));
    document.getElementById("balanceArea").innerHTML = `Current Balance: ${parseFloat(etherValue).toFixed(4)} Ethereum`;
    console.log(parseFloat(etherValue).toFixed(4));
};
const accountExist = async ()=>{
    return await window.web3.eth.accountExist().call();
};
const transferAmount = async ()=>{
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;
    console.log(amount, address);
    await window.contract.methods.sendAmount(address, amount).send({
        from: account
    });
};
const depositAmount = async ()=>{
    const amount = document.getElementById("amount").value;
    console.log(localStorage.getItem("cont").methods);
    console.log(amount);
};
function generateLink() {
    url = `https://sepolia.etherscan.io/address/${localStorage.getItem("account_address")}`;
    window.open(url);
}

//# sourceMappingURL=index.491f42e7.js.map
