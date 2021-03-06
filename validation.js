
function isEmpty(inputName) {
    "use strict";
    
	var x = document.forms["contact_form"][inputName].value;
    
	if ((x === null) || (x === "")) {    
        var inputNameString = inputName.toString(); 
        document.getElementsByClassName(inputNameString)[0].innerHTML="Please type something!";
        return true;
	}
    else{  
        /*
        document.getElementsByClassName(inputNameString)[0].innerHTML="You typed something!"; */
        return false;
    }
}

function isEmail(inputName) {
    "use strict";
    
    var x = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/;
    var email = document.forms["contact_form"][inputName].value;
    
    var isEmptyReturnedValue = isEmpty(inputName);
    
    if(isEmptyReturnedValue != true){
        if (x.test(email)) {
        document.getElementById("isEmailAlert").innerHTML="This is a valid email!";
        } 
        else {   
        document.getElementById("isEmailAlert").innerHTML="Not a valid email address";
        }
    }
        
    
}

function isPhoneNumber(inputName) {
    "use strict";
    
    var number = document.forms["contact_form"][inputName].value;
    /* var phoneNumberRegex = only allow numbers, - and + */
    if (phoneNumberRegex.test(number)) {
        /*
        alert("is a valid phone number");
        return true;*/
        document.getElementById("isPhoneNumberAlert").innerHTML="This is a valid phone number!";
    } else {
        /*alert("is not a valid phone number");
        return false;*/
        document.getElementById("isPhoneNumberAlert").innerHTML="This is not a valid phone number.";
    }
}

function isCommentVal(inputName) {
    "use strict";

    /* var commentTest = regex that doesnt allow /\><[]^=+' */
    var comment = document.forms["contact_form"][inputComment].value;

    if (comment.length > 160) {
        /*alert("Comments cannot exceed 160 characters.");
        return false;*/
        document.getElementById("isCommentValAlert").innerHTML="Comments cannot exceed 160 characters";
    } else {
        /*alert("comment length ok");
        return true;*/
        document.getElementById("isCommentValAlert").innerHTML="Comment length ok!";
    }
}
