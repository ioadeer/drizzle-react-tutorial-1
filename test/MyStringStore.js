const MyStringStore = artifacts.require("MyStringStore");

contract("MyStringStore", accounts => {
  it("Should store the string 'Hey there!'", async () => {
    const myStringStore = await MyStringStore.deployed();

    // Set my string to "Hey there!"
    await myStringStore.set("Hey there!");

    // Get stores string from public variable getter
    const  storedString = await myStringStore.myString.call();

    assert.equal(storedString, "Hey there!", "The string was not stored");
  });
});
