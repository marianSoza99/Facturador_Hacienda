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

var FormData = require('form-data');
var localStorage = require('local-storage');
var fetch = require("node-fetch");

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


/*******************************/
/*          Settings           */
/*******************************/
//This is the url where your api.php is located
var API_url = "https://api-demo.crlibre.org/api.php";

//Default frontpage or index
var API_front = "index.html";

//Var to store user data
var API_user = "";

//If you want to debug or not   
var API_debugMode = true;
/***************************************************/
/* Register a new user                             */
/* Requiere:                                       */
/* fullName, userName, email, about, country, pwd  */
/***************************************************/
function API_registerUser(userData, success, error){
    
    var req = {
        w: "users",
        r: "users_register",
        fullName: userData.fullName,
        userName: userData.userName,
        email: userData.userEmail,
        pwd: userData.pwd,
        about: userData.about,
        country: userData.userCountry,
        inst: userData.inst
    };
    
    API_postRequest(req, 
        function(d){
            API_setLocalStorage('userName', d.resp.userName);   
            API_setLocalStorage('sessionKey', d.resp.sessionKey); 
            success(d);
        }, function(d){
            error(d);
        });
}

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
var APILogin = function API_login(userData, success, error){
    var req = {
        w: "users",
        r: "users_log_me_in",
        userName: userData.userName,
        pwd: userData.pwd
    };
            
    API_postRequest(req, 
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
/* Function to recover pss                   */
/* Req userName                              */
/*********************************************/
function API_recoverPwd(userName, success, error){
 var req = {
            w: "users",
            r: "users_recover_pwd",
            userName: userName,
        };
        
 API_postRequest(req, 
    function(data){
        if(data.resp == SUCCESS_ALL_GOOD){
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
    });
}

/* */

function API_getRequest(req, success, error, timeout = 800, times = 0){
    var data = new FormData();
    for (var key in req) {
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


/*********************************************/
/* Function set local storage                */
/* Req key, value                            */
/*********************************************/
function API_setLocalStorage(k, v){
    API_debug("Saving in storage K: " + k + " V: " + v);
    localStorage.setItem(k, v);
}

/*********************************************/
/* Function set local storage                */
/* Req key                                   */
/* Return value                              */
/*********************************************/
function API_getLocalStorage(k){
    var v = localStorage.getItem(k);
    API_debug("Getting from storage K: " + k + " GOT: " + v);
    return v;
}

/*********************************************/
/* Function to make post reqs                */
/* Req request data, func success, func error*/
/*********************************************/

function API_postRequest(req, success, error) {
    var data = new FormData();
    for (var key in req) {
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
  

/*********************************************/
/* Function to debug                         */
/* Requieres msg                             */
/*********************************************/
function API_debug(msg){
    if(API_debugMode){
        console.log("[CalApi]->" + msg);
    }
}

/*********************************************/
/* Function to do somethong after some time  */
/* Requieres function, time                  */
/*********************************************/
function API_doSomethingAfter(f, t = 1000){
    var timer = setTimeout(function(){
        f();
        clearTimeout(timer);
    }, t);
}

/*********************************************/
/* Function to do somethong after some time  */
/* Requieres function, time                  */
/*********************************************/
function API_resultToMsg(r){
    if(r == ERROR_NO_VALID_USER){
        return "No valid user, the user may not exist"; 
    }else if(r == ERROR_USER_WRONG_LOGIN_INFO){
        return "Wrong login info";
    }else if(r == ERROR_USER_NO_VALID_SESSION){
        return "No valid session, maybe is too late";
    }else if(r == ERROR_USER_ACCESS_DENIED){
        return "The user is banned 'status' = 0";
    }else if(r == ERROR_USER_EXISTS){
        return "";
    }else if(r == ERROR_USERS_NO_TOKEN){
        return "Error with token";
    }else if(r == ERROR_DB_NO_RESULTS_FOUND){
        return "No results found in db query";
    }else if(r == ERROR_BAD_REQUEST){
        return "Bad request, are all params good?";
    }else if(r == ERROR_ERROR){
        return "Standard error";
    }else if(r == ERROR_MODULE_UNDEFINED){
        return "There is no module to ask or run, 'w' param is not setted";
    }else if(r == ERROR_MODULE_NOT_FOUND){
        return "The module in 'w' does not exist";
    }else if(r == ERROR_FUNCTION_NOT_FOUND){
        return "The function in param 'r' not found";
    }else if(r == SUCCESS_ALL_GOOD){
        return "The request was successful";
    }else{
        return "Is this an error? => " + r + " You coud add the error and make a git pull request. :)";
    }
}

module.exports = { APILogin };