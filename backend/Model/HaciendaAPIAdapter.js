/****************************************************************************
/*!
 * Cala Framework: To make your life simpler
 *
 * Copyright (c) 2018 CRLibre
 * License: AGPL - API
 * Include this AT THE BOTTOM of your pages, that is all you need to do.
 *
 *           | |      
 *   ___ __ _| | __ _ 
 *  / __/ _` | |/ _` |
 * | (_| (_| | | (_| |
 *  \___\__,_|_|\__,_|
 *
 *****************************************************************************/                   
// Version 0.1

/*******************************/
/*            CONS             */
/*******************************/

import FormData from 'form-data';
import fetch from 'node-fetch'

// Users
var ERROR_NO_VALID_USER = "-300";
var ERROR_USER_WRONG_LOGIN_INFO = "-301";
var ERROR_USER_NO_VALID_SESSION = "-302"; // Not in use I think
var ERROR_USER_ACCESS_DENIED = "-303";
var ERROR_USER_EXISTS = "-304";
var ERROR_USERS_NO_TOKEN = "-305";

//Database
var ERROR_DB_NO_RESULTS_FOUND = "-200";
var ERROR_BAD_REQUEST = "-1";

//Others
var ERROR_ERROR = "-2";
var ERROR_MODULE_UNDEFINED = "-3";
var ERROR_MODULE_NOT_FOUND = "-4";
var ERROR_FUNCTION_NOT_FOUND = "-5";
var SUCCESS_ALL_GOOD = "1";

var API_url = "https://api-demo.crlibre.org/api.php";

//Var to store user data
var API_user = "";

/*********************************************/
/* Function to check login users             */
/* Req success, error                        */
/*********************************************/
function API_checkLogin(success, error, timeout){
    var req = {
        w: "users",
        r: "users_get_my_details"
    };
    
    API_postRequest(req, 
    function(data){
        if(data.resp != ERROR_USER_WRONG_LOGIN_INFO && data.resp != ERROR_USER_ACCESS_DENIED){
            if(success != null){
                API_debug("It seems we are logged in as " + data.resp.userName);
                API_user = data.resp.userName;
                success(data);
            }
        }else{
            if(error != null){
                error(data);
            }
        }
    },
    function(){
        API_debug("Exec error func");
        if(error != null){
            error();
        }
    },
    function(){
        API_debug("Exec callback func");
        if(timeout != null){
            timeout();
        }
    });
}

/*********************************************/
/* Function to create users                   */
/* Req userData, func success, func error    */
/*********************************************/
export function APILogin(userData, success, error){
    var req = {
        w: "users",
        r: "users_log_me_in"
    };
            
    API_postRequest(req, userData, 
        function(data){
            if(data.resp){
                if(success != null){
                    success(data);
                }
            }else{
                if(error != null){
                    error(data);
                }
            }
        },
        function(data){
            if(error != null){
                error(data);
            }
        }
    );
}

export function APIGenerateXML(userData, success, error){
    var req = {
        w: "genXML",
        r: "gen_xml_fe",
    };
            
    API_postRequest(req, userData, 
        function(data){
            if(data.resp != ERROR_USER_WRONG_LOGIN_INFO){
                if(success != null){
                    success(data);
                }
            }else{
                if(error != null){
                    error(data);
                }
            }
        },
        function(data){
            if(error != null){
                error(data);
            }
        }
    );
}

/*********************************************/
/* Function to make post reqs                */
/* Req request data, func success, func error*/
/*********************************************/

function API_postRequest(req, userData,success, error) {
    var data = new FormData();
    for (var key in req) {
        var value = req[key];
        data.append(key, value);
    } 

    for (var key in userData) {
        var value = req[key];
        data.append(key, value);
    } 
    
    var status = 0;

    fetch(API_url,
    {
        method: "POST",
        body: data
    })
    .then(function(res){ 
        if(res.status == 200){
            status = 1;
        }
        return res.json();
    })
    .then(function(data){ 
        if (status){
            success(data) 
        }
        else{
            error(data)
        }
    })
  }