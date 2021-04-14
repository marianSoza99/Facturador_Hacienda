import ProductLine from './ProductLine.js'

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
    #others;
    #othersType;
    #lines;
    #referenceDocuments;
    #otherCharges;

    constructor(key, consecutive, emitter, receiver, sellCondition, creditTerm,
        payMethod, currencyCode, exchangeRate, others, othersType, lines, refDocs, charges){
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
            this.#others = others;
            this.#othersType = othersType;
            this.#lines = lines;
            this.#referenceDocuments = refDocs;
            this.#otherCharges = charges;
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

    get totalExcemptedMerch(){ return this.#totalExcemptedMerch; }
    
    get totalSaved(){ return this.#totalSaved; }

    get totalExcempted(){ return this.#totalExcempted; }

    get totalSold(){ return this.#totalSold; }

    get totalDiscount(){ return this.#totalDiscount; }

    get totalNetSold(){ return this.#totalNetSold; }

    get totalTaxes(){ return this.#totalTaxes; }

    get totalVoucher(){ return this.#totalVoucher; }

    get others(){ return this.#others }

    get othersType(){ return this.#othersType }

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

    set totalExcemptedMerch(amount){ this.#totalExcemptedMerch = amount; }
    
    set totalSaved(amount){ this.#totalSaved = amount; }

    set totalExcempted(amount){ this.#totalExcempted = amount; }

    set totalSold(amount){ this.#totalSold = amount; }

    set totalDiscount(amount){ this.#totalDiscount = amount; }

    set totalNetSold(amount){ this.#totalNetSold = amount; }

    set totalTaxes(amount){ this.#totalTaxes = amount; }

    set totalVoucher(amount){ this.#totalVoucher = amount; }

    set others(others){ this.#others = others}

    set othersType(othersType){ this.#othersType = othersType}


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

    formatLines(){
        const thisInstance = this;
        
    }

    format(){
        var linesJSON = {};
        var billJSON = {
            clave: this.#key,
            consecutivo: this.#consecutive,
            fecha_emision: this.#issueDate,
            emisor_nombre: this.#emitter.name,
            emisor_tipo_identif: this.#emitter.IDType,
            emisor_num_identif: this.#emitter.ID,
            nombre_comercial: this.#emitter.businessName,
            emisor_provincia: this.#emitter.province,
            emisor_canton: this.#emitter.canton,
            emisor_distrito: this.#emitter.district,
            emisor_barrio: this.#emitter.neighborhood,
            emisor_otras_senas: this.#emitter.addressDescription,
            emisor_cod_pais: this.#emitter.countryCode,
            emisor_tel: this.#emitter.telefone,
            emisor_cod_pais_fax: this.#emitter.countryCodeFax,
            emisor_fax: this.#emitter.fax,
            emisor_email: this.#emitter.email,  
            receptor_nombre: this.#emitter.name,
            receptor_tipo_identif: this.#emitter.IDType,
            receptor_num_identif: this.#emitter.ID,
            receptor_provincia: this.#emitter.province,
            receptor_canton: this.#emitter.canton,
            receptor_distrito: this.#emitter.district,
            receptor_barrio: this.#emitter.neighborhood,
            receptor_cod_pais: this.#emitter.countryCode,
            receptor_tel: this.#emitter.telefone,
            receptor_cod_pais_fax: this.#emitter.countryCodeFax,
            receptor_fax: this.#emitter.fax,
            receptor_email: this.#emitter.email,
            condicion_venta: this.#sellCondition,
            plazo_credito: this.#creditTerm,
            medio_pago: this.payMethod,
            cod_moneda: this.#currencyCode,
            tipo_cambio: this.#exchangeRate,
            total_serv_gravados: this.#totalSavedServices,
            total_serv_exentos: this.#totalExcemptServices,
            total_merc_gravada: this.#totalSavedMerch,
            total_merc_exenta: this.#totalExcemptedMerch,
            total_gravados: this.#totalSaved,
            total_exentos: this.#totalExcempted,
            total_ventas: this.#totalSold,
            total_descuentos: this.#totalDiscount,
            total_ventas_neta: this.#totalNetSold,
            total_impuestos: this.#totalTaxes,
            total_comprobante: this.#totalVoucher,
            otros: this.#others,
            otrosType: this.othersType,
            detalles: undefined
        };

        for (var i = 1; i <= this.#lines.length; i++){
            linesJSON[i.toString()] = this.#lines[i - 1].format();
        }

        billJSON.detalles = linesJSON;
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

    set doc(doc){this.#doc = doc; }

    set docType(docType){this.#docType = docType; }

    set docNumber(docNumber){this.#docNumber = docNumber; }

    set issueDate(issueDate){this.#issueDate = issueDate; }

    set referenceCode(referenceCode){this.#referenceCode = referenceCode; }

    set description(description){this.#description = description; }

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