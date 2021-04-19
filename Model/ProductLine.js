export default class ProductLine {

    constructor(productName, productCode, meassurment, quantity, unitPrice,
                discount, discountDescription, total, subtotal, lineTotal){
                    
        this.attrProductName = productName;
        this.attrProductCode = productCode;
        this.attrMeassurment = meassurment;
        this.attrQuantity = quantity;
        this.attrUnitPrice = unitPrice;
        this.attrDiscount = discount;
        this.attrDiscountDescription = discountDescription;
        this.attrTotal = total;
        this.attrSubtotal = subtotal;
        this.attrLineTotal = lineTotal;
        this.attrTaxes = [];
    }

    // Getters
    get productName(){
        return this.attrProductName;
    }

    get productCode(){
        return this.attrProductCode;
    }

    get meassurment(){
        return this.attrMeassurment;
    }

    get quantity(){
        return this.attrQuantity;
    }

    get unitPrice(){
        return this.attrUnitPrice;
    }

    get discount(){
        return this.attrDiscount;
    }

    get discountDescription(){
        return this.attrDiscountDescription;
    }

    get total(){
        return this.attrTotal;
    }

    get subtotal(){
        return this.attrSubtotal;
    }

    get lineTotal(){
        return this.attrLineTotal;
    }

    get taxes(){
        return this.attrTaxes;
    }

    // Setters
    set productName(productName){
        this.attrProductName = productName;
    }

    set productCode(productCode){
        this.attrProductCode = productCode;
    }

    set meassurment(meassurment){
        this.attrMeassurment = meassurment;
    }

    set quantity(quantity){
        this.attrQuantity = quantity;
    }

    set unitPrice(unitPrice){
        this.attrUnitPrice = unitPrice;
    }

    set discount(discount){
        this.attrDiscount = discount;
    }

    set discountDescription(discountDescription){
        this.attrDiscountDescription = discountDescription;
    }

    set total(total){
        this.attrTotal = total;
    }

    set subtotal(subtotal){
        this.attrSubtotal = subtotal;
    }

    set lineTotal(lineTotal){
        this.attrLineTotal = lineTotal;
    }

    addTax (code, percentage, amount){
        var tax = new Tax(code, percentage, amount);
        this.attrTaxes.push(tax);
    }

    addExoneration(taxIndex, docType, docNumber, institutionName, issueDate, taxAmount, purchPercentage){
        if(taxIndex < this.attrTaxes.length) {
            this.attrTaxes[taxIndex].addExoneration(docType, docNumber, institutionName, issueDate, taxAmount, purchPercentage);
        }
    }

    format(){
        var lineJSON = {};
        var taxes = {};

        for (var i = 1; i <= this.attrTaxes.lenght; i++){
            taxes[i.toString()] = this.attrTaxes[i - 1].format();
        }

        lineJSON["cantidad"] = this.attrQuantity;
        lineJSON["unidadMedida"] = this.attrMeassurment;
        lineJSON["detalle"] = this.attrProductName;
        lineJSON["precioUnitario"] = this.attrUnitPrice;
        lineJSON["montoTotal"] = this.attrTotal;
        lineJSON["subtotal"] = this.attrSubtotal;
        lineJSON["montoTotalLinea"] = this.attrLineTotal;
        lineJSON["montoDescuento"] = this.attrDiscount;
        lineJSON["naturalezaDescuento"] = this.attrDiscountDescription;
        lineJSON["impuesto"] = taxes;

        return lineJSON;
    }
}

class Tax {
    constructor(code, percentage, amount)
    {
        this.attrCode = code;
        this.attrPercentage = percentage;
        this.attrAmount = amount;
        this.attrExonerations = [];
    }

    // Getters
    get code(){
        return this.attrCode;
    }

    get percentage(){
        return this.attrPercentage;
    }

    get amount(){
        return this.attrAmount;
    }

    get exonerations(){
        return this.attrExonerations;
    }

    // Setters
    set code(code){
        this.attrCode = code;
    }

    set percentage(percentage){
        this.attrPercentage = percentage;
    }

    set amount(amount){
        this.attrAmount = amount;
    }

    set exonerations(exonerations){
        this.attrExonerations = exonerations;
    }

    addExoneration(docType, docNumber, institutionName, issueDate, taxAmount, purchPercentage){
        var exoneration = new Exoneration(docType, docNumber, institutionName, issueDate, taxAmount, purchPercentage);
        this.attrExonerations.push(exoneration);
    }

    format(){
        var taxJSON = {};

        exoJSON["codigo"] = this.attrCode;
        exoJSON["tarifa"] = this.attrPercentage;
        exoJSON["monto"] = this.attrAmount;

        if (this.attrExonerations.lenght > 0) {
            taxJSON["exoneracion"] = this.attrExonerations[0].format();
        }

        return taxJSON;
        
    }
}

export class Exoneration {
    constructor(docType, docNumber, institutionName, issueDate, taxAmount, purchPercentage)
    {
        this.attrDocType = docType;
        this.attrDocNumber = docNumber;
        this.attrInstitutionName = institutionName;
        this.attrIssueDate = issueDate;
        this.attrTaxAmount = taxAmount;
        this.attrPurchPercentage = purchPercentage;
    }

    // Getters
    get docType(){
        return this.attrDocType;
    }

    get docNumber(){
        return this.attrDocNumber;
    }

    get institutionName(){
        return this.attrInstitutionName1;
    }

    get issueDate(){
        return this.attrIssueDate;
    }

    get taxAmount(){
        return this.attrTaxAmount;
    }

    get purchPercentage(){
        return this.attrPurchPercentage;
    }

    // Setters
    set docType(docType){
        this.attrDocType = docType;
    }

    set docNumber(docNumber){
        this.attrDocNumber = docNumber;
    }

    set institutionName(institutionName){
        this.attrInstitutionName = institutionName;
    }

    set issueDate(issueDate){
        this.attrIssueDate = issueDate;
    }

    set taxAmount(taxAmount){
        this.attrTaxAmount = taxAmount;
    }

    set purchPercentage(purchPercentage){
        this.attrPurchPercentage = purchPercentage;
    }

    format(){
        return {
            "tipoDocumento": this.attrDocType,
            "numeroDocumento": this.attrDocNumber,
            "nombreInstitucion": this.attrInstitutionName,
            "fechaEmision": this.attrIssueDate,
            "montoImpuesto": this.attrTaxAmount,
            "porcentajeCompra": this.attrPurchPercentage
        }
    }
}