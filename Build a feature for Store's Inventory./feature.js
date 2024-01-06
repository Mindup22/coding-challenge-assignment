// Original object with items and prices in USD
var pricesInUSD = {
    item1: 20,
    item2: 35,
    item3: 10,
    // Add more items as needed
  };
  
  // Exchange rate: 1 USD to 80 INR
  const exchangeRate = 80;
  
  // Function to convert prices to Indian Rupees
  function convertToINR(itemPriceUSD) {
    return itemPriceUSD * exchangeRate;
  }
  
  // Use the map function to create a new object with prices in INR
  var pricesInINR = Object.fromEntries(
    Object.entries(pricesInUSD).map(([item, price]) => [item, convertToINR(price)])
  );
  
  // Display the original and converted prices
  console.log("Original Prices (USD):", pricesInUSD);
  console.log("Converted Prices (INR):", pricesInINR);
  