console.log("Helloo!!");

async function getExchangeRates() {
  try {
    const response = await fetch('https://v6.exchangerate-api.com/v6/2c6554fefcfff0ac984b49d8/latest/usd');
    const data = await response.json();
    // console.log(data);
    // console.log(data.conversion_rates.INR)
    console.log(Object.values(data.conversion_rates).length);
    const result = Object.keys(data.conversion_rates)
    console.log(result[0]);
    
    
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
}

getExchangeRates();
