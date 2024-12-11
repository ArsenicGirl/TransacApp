// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionContract {
    struct Transaction {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
        bytes32 blockHash;
    }

    Transaction[] public transactions;

    event TransactionCreated(
        address indexed sender,
        address indexed receiver,
        uint256 amount,
        uint256 timestamp,
        bytes32 blockHash
    );

    function createTransaction(address receiver, uint256 amount) public {
        bytes32 blockHash = blockhash(block.number - 1);
        transactions.push(Transaction(msg.sender, receiver, amount, block.timestamp, blockHash));
        emit TransactionCreated(msg.sender, receiver, amount, block.timestamp, blockHash);
    }

    function getTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }
}
