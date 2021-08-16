// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

error NotImplemented();

contract Example {
  function foo() external pure {
    revert NotImplemented();
  }

  function bar() external pure returns (string memory) {
    return "bar";
  }
}
