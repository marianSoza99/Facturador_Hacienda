export default class Person{
    #name;
    #IDType;
    #ID;
    #province;
    #canton;
    #district;
    #neighborhood;
    #countryCode;
    #telefone;
    #countryCodeFax;
    #fax;
    #email;

    constructor (name, IDType, ID, province, canton, district, 
                 neighborhood, countryCode, telefone, fax, email) {
        this.#name = name;
        this.#IDType = IDType;
        this.#ID = ID;
        this.#province = province;
        this.#canton = canton;
        this.#district = district;
        this.#neighborhood = neighborhood;
        this.#countryCode = countryCode;
        this.#telefone = telefone,
        this.#countryCodeFax = countryCodeFax;
        this.#fax = fax;
        this.#email = email;
    }


    // Getter
    get name(){
        return this.#name;
    }

    get IDType(){
        return this.#IDType;
    }

    get ID(){
        return this.#ID;
    }

    get province(){
        return this.#province;
    }

    get canton(){
        return this.#canton;
    }

    get district(){
        return this.#district;
    }

    get neighborhood(){
        return this.#neighborhood;
    }

    get countryCode(){
        return this.#countryCode;
    }

    get telefone(){
        return this.#telefone;
    }

    get countryCodeFax(){
        return this.#countryCodeFax;
    }

    get fax(){
        return this.#fax;
    }

    get email(){
        return this.#email;
    }


    // Setter
    set name(name){
        this.#name = name;
    }

    set IDType(IDType){
        this.#IDType = IDType;
    }

    set ID(ID){
        this.#ID = ID;
    }

    set province(province){
        this.#province = province;
    }

    set canton(canton){
        this.#canton = canton;
    }

    
    set district(district){
        this.#district = district;
    }

    set neighborhood(neighborhood){
        this.#neighborhood = neighborhood;
    }

    set countryCode(countryCode){
        this.#countryCode = countryCode;
    }

    set telefone(telefone){
        this.#telefone = telefone;
    }

    set countryCodeFax(code){
        this.#countryCodeFax = code;
    }

    set fax(fax){
        this.#fax = fax;
    }

    set email(email){
        this.#email = email;
    }
};