var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
]


function calculateSalesTax(salesData, taxRates) {
  var results = {};
  // Implement your code here
  for ( var companyData in salesData) {
    //console.log(calculateSales(CompanySaleNumbers));
    var companyName = salesData[companyData].name;

    var companyProvince = salesData[companyData].province;

    var CompanySaleNumbers= salesData[companyData].sales;



    var taxData = {
      totalSales: calculateSales(CompanySaleNumbers) ,
      totalTaxes: calculateTaxes(calculateSales(CompanySaleNumbers))
    }

      function calculateSales(salesValue) {
       // console.log(salesValue);
        //if(companyName) {
        var count = 0;
          for(var i = 0; i < salesValue.length; i++ ) {
          count += salesValue[i];
          }
       // console.log("inside function count:", count)
        return count;
      }

      function calculateTaxes(totalSales) {
        var TaxRate = salesTaxRates[companyProvince];
        FinalSalesTax = totalSales*TaxRate;
        //console.log ( "Tax in the prov :",FinalSalesTax);
        return FinalSalesTax;
      }

      if (!results[companyName]) {
        results[companyName] = taxData;
      } else {
        var newTotalSales = taxData.totalSales;
        results[companyName].totalSales += newTotalSales;

        var newTotalTax = taxData.totalTaxes;
        results[companyName].totalTaxes += newTotalTax;
        //results[companyProvince] = taxData;
      }

  }
  return results;
}
var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

