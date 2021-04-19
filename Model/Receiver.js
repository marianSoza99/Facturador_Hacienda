import Person from './Person.js'

export default class Receiver extends Person{

    constructor(name, IDType, ID, province, canton, district, neighborhood, 
                countryCode, fax, email){
        super(  name, IDType, ID, province, canton, district, 
                neighborhood, countryCode, fax, email);
    }
};