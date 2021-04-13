import ProductLine from './ProductLine'

export default class Bill{
    #key;
    #consecutive;
    #issueDate;
    #emitter;
    #receiver;
    #sellCondition;
    #creditTerm;
    #payMethod;
    #currencyCode;
    #exchangeRate;
    #totalSavedServices;
    #totalExcemptServices;
    #totalSavedMerch;
    #totalExcemptedMerch;
    #totalSaved;
    #totalExcempted;
    #totalSold;
    #totalDiscount;
    #totalNetSold;
    #totalTaxes;
    #totalVoucher;
    #lines;
    #referenceDocuments;
    #otherCharges;

    constructor(key, consecutive, emitter, receiver, sellCondition, creditTerm,
        payMethod, currencyCode, exchangeRate){
            this.#key = key;
            this.#consecutive = consecutive;
            //this.#issueDate = ;
            this.#emitter = emitter;
            this.#receiver = receiver;
            this.#sellCondition = sellCondition;
            this.#creditTerm = creditTerm;
            this.#payMethod = payMethod;
            this.#currencyCode = currencyCode;
            this.#exchangeRate = exchangeRate;
            this.#totalSavedServices = 0;
            this.#totalExcemptServices = 0;
            this.#totalSavedMerch = 0;
            this.#totalExcemptedMerch = 0;
            this.#totalSaved = 0;
            this.#totalExcempted = 0;
            this.#totalSold = 0;
            this.#totalDiscount = 0;
            this.#totalNetSold = 0;
            this.#totalTaxes = 0;
            this.#totalVoucher = 0;
            this.#lines = [];
            this.#referenceDocuments = [];
            this.#otherCharges = [];
        }

    //Getter

    get key(){ return this.#key; }

    get consecutive(){ return this.#consecutive; }

    get issueDate(){ return this.#issueDate; }

    get emitter(){ return this.#emitter; }

    get receiver(){ return this.#receiver; }

    get sellCondition(){ return this.#sellCondition; }

    get creditTerm(){ return this.#creditTerm; }

    get payMethod(){ return this.#payMethod; }

    get currencyCode(){ return this.currencyCode; }

    get exchangeRate(){ return this.#exchangeRate; }

    get totalSavedServices(){ return this.#totalSavedServices; }

    get totalExcemptServices(){ return this.#totalExcemptServices; }

    get totalSavedMerch(){ return this.#totalSavedMerch; }

    get totalExcemptMerch(){ return this.#totalExcemptMerch; }
    
    get totalSaved(){ return this.#totalSaved; }

    get totalExcempted(){ return this.#totalExcempted; }

    get totalSold(){ return this.#totalSold; }

    get totalDiscount(){ return this.#totalDiscount; }

    get totalNetSold(){ return this.#totalNetSold; }

    get totalTaxes(){ return this.#totalTaxes; }

    get totalVoucher(){ return this.#totalVoucher; }

    get lines(){ return this.#lines; }

    get referenceDocuments(){ return this.#referenceDocuments; }

    get otherCharges(){ return this.#otherCharges; }

    //Setter

    set key(key){ this.#key = key; }

    set consecutive(consecutive){ this.#consecutive = consecutive; }

    set issueDate(issueDate){ this.#issueDate = issueDate; }

    set emitter(emitter){ this.#emitter = emitter; }

    set receiver(receiver){ this.#receiver = receiver; }

    set sellCondition(sellCondition){ this.#sellCondition = sellCondition; }

    set creditTerm(creditTerm){ this.#creditTerm = creditTerm; }

    set payMethod(payMethod){ this.#payMethod = payMethod; }

    set currencyCode(currencyCode){ this.currencyCode = currencyCode; }

    set exchangeRate(exchangeRate){ this.#exchangeRate = exchangeRate; }

    set totalSavedServices(amount){ this.#totalSavedServices = amount; }

    set totalExcemptServices(amount){ this.#totalExcemptServices = amount; }

    set totalSavedMerch(amount){ this.#totalSavedMerch = amount; }

    set totalExcemptMerch(amount){ this.#totalExcemptMerch = amount; }
    
    set totalSaved(amount){ this.#totalSaved = amount; }

    set totalExcempted(amount){ this.#totalExcempted = amount; }

    set totalSold(amount){ this.#totalSold = amount; }

    set totalDiscount(amount){ this.#totalDiscount = amount; }

    set totalNetSold(amount){ this.#totalNetSold = amount; }

    set totalTaxes(amount){ this.#totalTaxes = amount; }

    set totalVoucher(amount){ this.#totalVoucher = amount; }

    addLine(name, code, meassure, quantity, price, discount, discDescription, total, subtotal, lineTotal){
        var line = new ProductLine(name, code, meassure, quantity, price, discount, discDescription, total, subtotal, lineTotal);
        this.#lines.push(line);
    }

    getLine(index){
        return this.#lines[index];
    }

    removeLine(index){
        this.#lines.splice(index, 1);
    }

    addReferenceDocumentDocuments(doc, docType, docNumber, issueDate, referenceCode, description){
        var document = new ReferenceDocument(doc, docType, docNumber, issueDate, referenceCode, description);
        this.#referenceDocuments.push(document);
    }

    removeReferenceDocument(index){
        this.#referenceDocuments.splice(index, 1);
    }

    addOtherCharges(doc, docType, description, chargeAmount, thirdPartyIDType, thirdPartyID, thirdPartyName){
        var charge = new OtherCharge(doc, docType, description, chargeAmount, thirdPartyIDType, thirdPartyID, thirdPartyName);
        this.#otherCharges.push(charge);
    }

    removeOtherCharge(index){
        this.#otherCharges.splice(index, 1);
    }

}

class ReferenceDocument{
    #doc;
    #docType;
    #docNumber;
    #issueDate;
    #referenceCode;
    #description;

    constructor(doc, docType, docNumber, issueDate, referenceCode, description){
        this.#doc = doc;
        this.#docType = docType;
        this.#docNumber = docNumber;
        this.#issueDate = issueDate;
        this.#referenceCode = referenceCode;
        this.#description = description;
    }

    //Getter

    get doc(){ return this.#doc; }

    get docType(){ return this.#docType; }

    get docNumber(){ return this.#docNumber; }

    get issueDate(){ return this.#issueDate; }

    get referenceCode(){ return this.#referenceCode; }

    get description(){ return this.#description; }

    //Setter

    set doc(){this.#doc = doc; }

    set docType(){this.#docType = docType; }

    set docNumber(){this.#docNumber = docNumber; }

    set issueDate(){this.#issueDate = issueDate; }

    set referenceCode(){this.#referenceCode = referenceCode; }

    set description(){this.#description = description; }

}

class OtherCharge{
    #doc;
    #docType;
    #description;
    #chargeAmount;
    #thirdPartyIDType;
    #thirdPartyID;
    #thirdPartyName;

    constructor(doc, docType, description, chargeAmount, thirdPartyIDType, thirdPartyID, thirdPartyName){
        this.#doc = doc;
        this.#docType = docType;
        this.#description = description;
        this.#chargeAmount = chargeAmount;
        this.#thirdPartyIDType = thirdPartyIDType;
        this.#thirdPartyID = thirdPartyID;
        this.#thirdPartyName = thirdPartyName;
    }

    //Getter
    
    get doc(){ return this.#doc; }
    
    get docType(){ return this.#docType; }
    
    get description(){ return this.#description; }
    
    get chargeAmount(){ return this.#chargeAmount; }
    
    get thirdPartyIDType(){ return this.#thirdPartyIDType; }
    
    get thirdPartyID(){ return this.#thirdPartyID; }
    
    get thirdPartyName(){ return this.#thirdPartyName; }

    //Setter

    set doc(doc){ this.#doc = doc; }
    
    set docType(docType){ this.#docType = docType; }
    
    set description(description){ this.#description = description; }
    
    set chargeAmount(chargeAmount){ this.#chargeAmount = chargeAmount; }
    
    set thirdPartyIDType(thirdPartyIDType){ this.#thirdPartyIDType = thirdPartyIDType; }
    
    set thirdPartyID(thirdPartyID){ this.#thirdPartyID = thirdPartyID; }
    
    set thirdPartyName(thirdPartyName){ this.#thirdPartyName = thirdPartyName; }

}