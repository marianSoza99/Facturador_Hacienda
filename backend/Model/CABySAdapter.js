const xlsx = require('xlsx');

var workbook = xlsx.readFile("../src/Catalogo-de-bienes-servicios.xlsx", {raw:true});
var sheet = workbook.Sheets["Cabys"];
var cabys = xlsx.utils.sheet_to_json(sheet);

var categories = [];

cabys.forEach(function(record){
    if(!categories.includes(record.__EMPTY_1)){
        categories.push(record.__EMPTY_1);
    }
});

var categorie1 = Object.fromEntries(Object.entries(cabys).filter(([key, value]) => {
    value.__EMPTY_1 == categories[1];
}));

console.log(categorie1);