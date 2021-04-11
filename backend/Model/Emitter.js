import Person from './Person.js'

export default class Emitter extends Person{
    #attrBusinessName
    #attrAddressDescription

    constructor(name, IDType, ID, province, canton, district, neighborhood, 
                countryCode, fax, email, businessName, addressDescription){
        super(  name, IDType, ID, province, canton, district, 
                neighborhood, countryCode, fax, email);
        this.#attrBusinessName = businessName;
        this.#attrAddressDescription = addressDescription;
    }

    // Getters
    get businessName(){
        return this.#attrBusinessName;
    }
    get addressDescription(){
        return this.#attrAddressDescription;
    }

    //Setters
    set businessName(businessName){
        this.#attrBusinessName = businessName;
    }
    set addressDescription(addressDescription){
        this.#attrAddressDescription = addressDescription;
    }
};
