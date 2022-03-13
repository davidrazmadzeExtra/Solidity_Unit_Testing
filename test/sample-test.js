const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");

describe("Greeter", function () {
  let contract;
  let owner;

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    contract = await greeter.deployed();

    [owner] = await ethers.getSigners();
  });

  // it("Should return the new greeting once it's changed", async function () {
  //   expect(await contract.greet()).to.equal("Hello, world!");
  //   const setGreetingTx = await contract.setGreeting("Hola, mundo!");
  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();
  // });

  it("Should add two numbers together and return the sum", async function () {
    const test = await contract.add(1, 5);
    expect(test).to.equal(6);
  });

  it("Should subtract two numbers and return the difference", async function () {
    const test = await contract.subtract(6, 2);
    expect(test).to.equal(4);
  });
});
