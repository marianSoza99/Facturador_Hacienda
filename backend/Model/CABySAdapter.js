//const xlsx = require('xlsx');
import xlsx from 'xlsx'

var workbook;
var Sheets;
var cabys;
var first = true;
var print = console.log

export var getCategory1 = function(res){
    if (first){
        workbook = xlsx.readFile("./Model/src/Catalogo-de-bienes-servicios.xlsx");
        var sheet = workbook.Sheets["Cabys"];
        cabys = xlsx.utils.sheet_to_json(sheet);
        first = false;
    }
    var codes = []
    var categories = []
    var products = []
    cabys.forEach(function(record){
        if (!codes.includes(record.Cat1)){
            codes.push(record.Cat1);
            categories.push( { codigo : record.Cat1, nombre : record.Des_Cat1 } );
        }
    });
    res.push({categories: categories, products: products})
};

export var getCategory2 = function(filter, res){
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

export var getCategory3 = function(filter, res){
    var filteredRecords = Object.entries(cabys).filter(([key, value]) => value.Cat2 == filter);

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record[1].Cat3)){
            codes.push(record[1].Cat3);
            categories.push( { codigo : record[1].Cat3, nombre : record[1].Des_Cat3 } );
        }
        products.push(record[1])
    });

    res.push({categories: categories, products: products})
};

export var getCategory4 = function(filter, res){
    var filteredRecords = Object.entries(cabys).filter(([key, value]) => value.Cat3 == filter);

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record[1].Cat4)){
            codes.push(record[1].Cat4);
            categories.push( { codigo : record[1].Cat4, nombre : record[1].Des_Cat4 } );
        }
        products.push(record[1])
    });

    res.push({categories: categories, products: products})
};

export var getCategory5 = function(filter, res){
    var filteredRecords = Object.entries(cabys).filter(([key, value]) => value.Cat4 == filter);

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record[1].Cat5)){
            codes.push(record[1].Cat5);
            categories.push( { codigo : record[1].Cat5, nombre : record[1].Des_Cat5 } );
        }
        products.push(record[1])
    });

    res.push({categories: categories, products: products})
};

export var getCategory6 = function(filter, res){
    var filteredRecords = Object.entries(cabys).filter(([key, value]) => value.Cat5 == filter);

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record[1].Cat6)){
            codes.push(record[1].Cat6);
            categories.push( { codigo : record[1].Cat6, nombre : record[1].Des_Cat6 } );
        }
        products.push(record[1])
    });

    res.push({categories: categories, products: products})
};

export var getCategory7 = function(filter, res){
    var filteredRecords = Object.entries(cabys).filter(([key, value]) => value.Cat6 == filter);

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record[1].Cat7)){
            codes.push(record[1].Cat7);
            categories.push( { codigo : record[1].Cat7, nombre : record[1].Des_Cat7 } );
        }
        products.push(record[1])
    });

    res.push({categories: categories, products: products})
};

export var getCategory8 = function(filter, res){
    var filteredRecords = Object.entries(cabys).filter(([key, value]) => value.Cat7 == filter);

    var codes = []
    var categories = []
    var products = []

    filteredRecords.forEach(function(record){
        if (!codes.includes(record[1].Cat8)){
            codes.push(record[1].Cat8);
            categories.push( { codigo : record[1].Cat8, nombre : record[1].Des_Cat8 } );
        }
        products.push(record[1])
    });

    res.push({categories: categories, products: products})
};

//module.exports = { getCategory1, getCategory2, getCategory3, getCategory4, getCategory5, getCategory6, getCategory7, getCategory8 };