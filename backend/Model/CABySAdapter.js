const xlsx = require('xlsx');

var workbook;
var Sheets;
var cabys;
var first = true;

var getCategory1 = function(res){
    if (first){
        workbook = xlsx.readFile("./Model/src/Catalogo-de-bienes-servicios.xlsx");
        sheet = workbook.Sheets["Cabys"];
        cabys = xlsx.utils.sheet_to_json(sheet);
        first = false;
    }
    cabys.forEach(function(record){
        if(!res.includes(record.__EMPTY_1)){
            res.push(record.__EMPTY_1);
        }
    });
    res.shift();
};

var getCategory2 = function(filter, res){
    var filteredRecords = Object.entries(cabys).filter(([key, value]) => value.__EMPTY_1 == filter);

    filteredRecords.forEach(function(record){
        if (!res.includes(record[1].__EMPTY_3)){
            res.push(record[1].__EMPTY_3);
        }
    });
};

module.exports = { getCategory1, getCategory2 };