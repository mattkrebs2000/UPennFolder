"use strict";

$(document).ready( () => {
    $("#validate").click( () => {
        const phone = $("#phone").val();
        //const pattern = /^\d{3}-\d{3}-\d{4}$/;                        // 999-999-9999
        //const pattern = /^(1-)?\d{3}-\d{3}-\d{4}$/;                   // optional prefix of '1-'
        //const pattern = /^(1[-\.])?\d{3}[-\.]\d{3}[-\.]\d{4}$/;       // can use dashes or periods
        const pattern = /^(1[-\.\s])?(\()?\d{3}(\))?[-\.\s]\d{3}[-\.]\d{4}$/;   // can use parens around area code
        const isValid = pattern.test(phone);

        $("#message").text( (isValid) ? "Valid phone number" : "Invalid phone number" );
        $("#phone").focus();
    }); // end click()
    
    $("#phone").val("123-456-7890");             // set default phone number
    $("#phone").focus();                         // set focus on initial load
    
}); // end ready()