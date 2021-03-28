const xlsx = require('xlsx');

var workbook;
var Sheets;
var cabys;
var first = true;
var print = console.log

var getCategory1 = function(res){
    if (first){
        workbook = xlsx.readFile("./Model/src/Catalogo-de-bienes-servicios.xlsx");
        sheet = workbook.Sheets["Cabys"];
        cabys = xlsx.utils.sheet_to_json(sheet);
        first = false;
    }
    var codes = []
    cabys.forEach(function(record){
        if (!codes.includes(record.Cat1)){
            codes.push(record.Cat1);
            res.push( { codigo : record.Cat1, nombre : record.Des_Cat1 } );
        }
    });
};

var getCategory2 = function(filter, res){
    var filteredRecords = Object.entries(cabys).filter(([key, value]) => value.Cat1 == filter);

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record[1].Cat2)){
            codes.push(record[1].Cat2);
            categories.push( { codigo : record[1].Cat2, nombre : record[1].Des_Cat2 } );
        }
        products.push(record[1])
    });

    res.push({categories: categories, products: products})

};

var getCategory3 = function(filter, products, res){

    var filteredRecords = products.filter(
        value => 
            (value.__EMPTY_2 == filter)
    );

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record.__EMPTY_4)){
            codes.push(record.__EMPTY_4);
            categories.push( { codigo : record.__EMPTY_4, nombre : record.__EMPTY_5 } );
        }
        products.push(record)
    });

    res.push({categories: categories, products: products})
};

var getCategory4 = function(filter, products, res){
    console.log(filter)

    var filteredRecords = products.filter(
        value => 
            (value.__EMPTY_4 == filter)
    );

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record.__EMPTY_6)){
            codes.push(record.__EMPTY_6);
            categories.push( { codigo : record.__EMPTY_6, nombre : record.__EMPTY_7 } );
        }
        products.push(record)
    });

    res.push({categories: categories, products: products})
};

var getCategory5 = function(filter, products, res){
    console.log(filter)

    var filteredRecords = products.filter(
        value => 
            (value.__EMPTY_6 == filter)
    );

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record.__EMPTY_8)){
            codes.push(record.__EMPTY_8);
            categories.push( { codigo : record.__EMPTY_8, nombre : record.__EMPTY_9 } );
        }
        products.push(record)
    });

    res.push({categories: categories, products: products})
};

var getCategory6 = function(filter, products, res){
    console.log(filter)

    var filteredRecords = products.filter(
        value => 
            (value.__EMPTY_8 == filter)
    );

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record.__EMPTY_10)){
            codes.push(record.__EMPTY_10);
            categories.push( { codigo : record.__EMPTY_10, nombre : record.__EMPTY_11 } );
        }
        products.push(record)
    });

    res.push({categories: categories, products: products})
};

var getCategory7 = function(filter, products, res){
    console.log(filter)

    var filteredRecords = products.filter(
        value => 
            (value.__EMPTY_10 == filter)
    );

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record.__EMPTY_12)){
            codes.push(record.__EMPTY_12);
            categories.push( { codigo : record.__EMPTY_12, nombre : record.__EMPTY_ } );
        }
        products.push(record)
    });

    res.push({categories: categories, products: products})
};

module.exports = { getCategory1, getCategory2, getCategory3, getCategory4, getCategory5, getCategory6 };