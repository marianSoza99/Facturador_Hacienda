import {APIGenerateXML} from './HaciendaAPIAdapter'

export function generateXML(bill, success, error){
    var userData = bill.format();
    APIGenerateXML(userData, success, error);
}

export function signBill()