import { APIGenerateXML, APISignXML, APISendXML, APICheckXML } from './HaciendaAPIAdapter.js'

export function generateXML(bill, success, error){
    var userData = bill.format();
    APIGenerateXML(userData, success, error);
}

export function singXML(request, success, error){
    APISignXML(request, success, error);
}

export function sendXML(request, success, error){
    APISendXML(request, success, error);
}

export function checkXML(request, success, error){
    APICheckXML(request, success, error);
}
