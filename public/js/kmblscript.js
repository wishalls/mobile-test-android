$(document).ready(function () {

    $("#mobile").keyup(function (event) {
        mobileNumberValidation($(this).val().trim());
    });

    $("#firstname").blur(function () {
        firstnameValidation($(this).val().trim());
    });

    $("#lastname").blur(function () {
        lastnameValidation($(this).val().trim());
    });

    $("#mobile").blur(function () {
        mobileNumberValidation($(this).val().trim());
    });

    $("#email").blur(function () {
        emailIDValidation($(this).val().trim());
    });

    $("#dob").change(function () {
        dobValidation($(this).val().trim());
    });

    $("#dob").blur(function () {
        dobValidation($(this).val().trim());
    });

    $("#pan").blur(function () {
        PANNumberValidation($(this).val().trim());
    });

    $("#city").blur(function () {
        cityValidation($(this).val().trim());
    });

    $("#pincode").blur(function () {
        PINCodeValidation($(this).val().trim());
    });

    $("#loanamount").blur(function () {
        loanAmountValidation($(this).val().trim());
    });
});

function validateKeypress(validChars) {
    var keyChar = String.fromCharCode(event.which || event.keyCode );
    return validChars.test(keyChar) ? keyChar : false;
}
//validation based on key pressing 
function validatePANKeypress() {
    var alpha = /[ A-Za-z]/;
    var numeric = /[0-9]/;
    var alphanumeric = /[ A-Za-z0-9]/;

    //- console.log("key code: " + event.which);
    //- console.log("key lenght: " + $("#pan").val().length);
    var panLength = $("#pan").val().length;

    if (panLength === 0 || panLength === 1 || panLength === 2 || panLength === 3 || panLength === 4 || panLength === 9) {
        var keyChar = String.fromCharCode(event.which || event.keyCode);
        return alpha.test(keyChar) ? keyChar : false;
    } else if (panLength === 5 || panLength === 6 || panLength === 7 || panLength === 8 || panLength === 8) {
        var keyChar = String.fromCharCode(event.which || event.keyCode);
        return numeric.test(keyChar) ? keyChar : false;
    }
}


function numbersonly(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    if (unicode != 8) { //if the key isn't the backspace key (which we should allow)
        if (unicode < 48 || unicode > 57) //if not a number
            return false //disable key press
    }
}

$('#ocsForm').submit(validateOCSForm);

function validateOCSForm() {
    // on submit
    var firstname = $('#firstname').val().trim();
    var lastname = $('#lastname').val().trim();
    var mobile = $('#mobile').val().trim();
    var mail = $('#email').val().trim();
    var dob = $("#dob").datepicker({
        dateFormat: "dd/mm/yy"
    }).val().trim();
    var pan = $('#pan').val().trim();
    var city = $('#city').val().trim();
    var pincode = $('#pincode').val().trim();
    //var income = $('#income').val();
    //var productCode = $('#productCode').val();
    var loanamount = $('#loanamount').val().trim();
    // debugger;
    //////////////////isValid Check///////////////////
    var isValidFirstName = firstnameValidation(firstname);
    var isValidLastName = lastnameValidation(lastname);
    var isValidMobile = mobileNumberValidation(mobile);
    var isValidMail = emailIDValidation(mail);
    var isValidDOB = dobValidation(dob);
    var isValidPAN = PANNumberValidation(pan);
    var isValidCity = cityValidation(city);

    var isValidPinCode = PINCodeValidation(pincode);
    var isValidLoanAmount = loanAmountValidation(loanamount);

    var isValidForm = isValidFirstName && isValidLastName && isValidMobile &&
        isValidMail && isValidDOB && isValidPAN && isValidCity && isValidPinCode &&
        isValidLoanAmount;
    //console.log(isValidForm);
    //debugger;
    // localStorage.setItem("firstname", firstname);
    // localStorage.setItem("lastname", lastname);
    // localStorage.setItem("mobile", mobile);
    // localStorage.setItem("email", mail);
    // localStorage.setItem("dob", dob);
    // localStorage.setItem("pan", pan);
    // localStorage.setItem("city", city);
    // localStorage.setItem("pincode", pincode);
    // localStorage.setItem("income", $('#income').val().trim());
    // localStorage.setItem("productCode", $('#productCode').val().trim());
    // localStorage.setItem("loanAmount", loanamount);

    ////- console.log(localStorage.length);
    ////- console.log(localStorage.getItem("firstname"));
    // //localStorage.clear();
    //console.log(localStorage.length);

    var spinner = $('#loader');
    if (isValidForm) {
        spinner.show(); // showing spinner while true form 
        $("#cancelBtn").addClass("disabled");
        document.cookie;
        return true;
    }
    spinner.hide();
    return false;
}

function firstnameValidation(param) {
    var reg = /^[A-Za-z\'\s]+$/;
    if (param.length < 1 || param.length > 25 || !isNaN(param) || !reg.test(param)) {
        $('#firstnameError').show();

        if (param === "") {
            $("#firstnameError").html('This field is mandatory!');
        } else {
            $("#firstnameError").html('Special characters not allowed');
        }

        //console.log('firstnameValidation fail');
        $("#firstname")[0].setCustomValidity("Invalid First Name!");
        invalidBorderStyle("firstname");
        return false;
    } else {
        $('#firstnameError').hide();
        $("#firstnameError").html('');
        //console.log('firstnameValidation pass');
        validBorderStyle("firstname");
        return true;
    }
}

function lastnameValidation(param) {
    var reg = /^[A-Za-z\'\s]+$/;
    if (param.length < 1 || param.length > 25 || !isNaN(param) || !reg.test(param)) {
        $('#lastnameError').show();
        if (param === "") {
            $("#lastnameError").html('This field is mandatory!');
        } else {
            $("#lastnameError").html('Special characters not allowed');
        }
        //console.log('lastnameValidation fail');
        invalidBorderStyle("lastname");
        $("#lastname")[0].setCustomValidity("Invalid Last Name!");
        return false;
    } else {
        $('#lastnameError').hide();
        $("#lastnameError").html('');
        //console.log('lastnameValidation pass');
        validBorderStyle("lastname");
        return true;
    }
}


function PANNumberValidation(data) {
    var pan = data;
    var pan_value = pan.toUpperCase();
    var reg = /^[a-zA-Z]{3}[a-zA-Z]{2}[0-9]{4}[a-zA-Z]{1}$/;
    
    if (reg.test(pan_value)) {
        $('#panError').hide();
        $("#panError").html("");
        //console.log('PANNumberValidation pass');
        validBorderStyle("pan");
        return true;
    } else {
        $('#panError').show();
        if (data === "" ) {
            $("#panError").html('This field is mandatory!');
        } else {
            $("#panError").html("This PAN is not valid!");
        }

        //console.log('PANNumberValidation fail');
        invalidBorderStyle("pan");
        $("#pan")[0].setCustomValidity("Invalid PAN!");
        return false;
    }
}

function emailIDValidation(param) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (param.length < 5 || param.length > 45 || !isNaN(param) || !regex.test(param)) {
        $('#emailError').show();

        if (param === "") {
            $("#emailError").html('This field is mandatory!');
        } else if (param.length < 5) {
            $("#emailError").html('Minimum length 5');
        } else {
            $("#emailError").html('Invalid Email-ID');
        }
        //console.log('emailIDValidation fail');
        invalidBorderStyle("email");
        $("#email")[0].setCustomValidity("Invalid Email!");
        return false;
    } else {
        $('#emailError').hide();
        $("#emailError").html('');
        //console.log('emailIDValidation pass');
        validBorderStyle("email");
        return true;
    }
}

function mobileNumberValidation(data) {
    var mobile = data;
    var phoneno = /^\d{10}$/;
    var phonenoFirstDigit = mobile.toString().charAt(0);
    if (data === "") {
        $('#mobileError').show();
        $("#mobileError").html('This field is mandatory!');
        invalidBorderStyle("mobile");
        $("#mobile")[0].setCustomValidity("Invalid Mobile Number!");
        return false;
    } else if (phonenoFirstDigit == 0) {
        $('#mobileError').show();
        $("#mobileError").html('Should not start with 0, enter 10 Digit number');
        invalidBorderStyle("mobile");
        $("#mobile")[0].setCustomValidity("Invalid Mobile Number!");
        return false;
    } else if (!phoneno.test(mobile)) {
        $('#mobileError').show();
        $("#mobileError").html('Enter valid mobile number');
        //console.log('mobileNumberValidation fail');
        $("#mobile")[0].setCustomValidity("Invalid Mobile Number!");
        invalidBorderStyle("mobile");
        return false;
    } else if (phoneno.test(mobile)) {
        $('#mobileError').hide();
        $("#mobileError").html('');
        //console.log('mobileNumberValidation pass');
        validBorderStyle("mobile");
        return true;
        
    }
    return false;
}

function dobValidation(data) {
    try {
        var currentDate = new Date();
        var currentDateFormat = moment(currentDate, "dd/mm/yyyy").format();
        var pickerValue = $.datepicker.parseDate("dd/mm/yy", data.toString());
        var pickerValueFormat = moment(new Date(pickerValue), "dd/mm/yyyy").format();
        var difference = moment(new Date(currentDateFormat)).diff(moment(new Date(pickerValueFormat)), 'years',
            true)
        //- console.log(data);
        //- console.log(difference);

        var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;

        if (data === "") {
            $('#dobError').show();
            $("#dobError").html(" This field is mandatory! [DOB]");
            invalidBorderStyle("dobBoxFull");
            $("#dob")[0].setCustomValidity("Invalid Date Format!");
            return false;
        } else if (!data.match(reg)) {
            //- console.log('0-false - ' + pickerValue);
            $('#dobError').show();
            $("#dobError").html(" Invalid date Format  Date format be dd/mm/yyyy!");
            invalidBorderStyle("dobBoxFull");
            $("#dob")[0].setCustomValidity("Invalid Date Format!");
            return false;
        } else if (difference > 18.003 && moment(pickerValue).isValid) {
            $('#dobError').hide();
            //- console.log('true - ' + pickerValue);
            $("#dobError").html("");
            validBorderStyle("dobBoxFull");
            $("#dob")[0].setCustomValidity("");
            return true;
        } else if (!moment(pickerValue).isValid) {
            //- console.log('1-false - ' + pickerValue);
            $('#dobError').show();
            $("#dobError").html("Invalid date!");
            invalidBorderStyle("dobBoxFull");
            $("#dob")[0].setCustomValidity("Invalid Date Format!");
            return false;
        } else if (difference < 18.003) {
            //- console.log('2-false - ' + pickerValue);
            $('#dobError').show();
            $("#dobError").html("Applicant needs to be atleast 18 years of age");
            invalidBorderStyle("dobBoxFull");
            $("#dob")[0].setCustomValidity("Atleast 18 years of age!");
            return false;
        } else {
            //console.log('3-false - ' + pickerValue);
            $('#dobError').show();
            $("#dobError").html("selected date is invalid!");
            $("#dob")[0].setCustomValidity("Invalid Date!");
            invalidBorderStyle("dobBoxFull");
            return false;
        }
    } catch (e) {

        //console.log("error", e) // or do something meaningful for your page.
        //console.log('vatch-false - ' + pickerValue);
        $('#dobError').show();
        $("#dobError").html("Invalid date!");
        invalidBorderStyle("dobBoxFull");
        $("#dob")[0].setCustomValidity("Invalid Date!");
        return false;

    }
}

function cityValidation(param) {
    var cityRegex = /^[A-Za-z-\s]+$/;
    if (param.toString().length >= 1 && param.toString().length <= 20 && cityRegex.test(param)) {
        $('#cityError').hide();
        $("#cityError").html("");
        validBorderStyle("city");
        return true;
    } else {
        $('#cityError').show();
        if (param === "") {
            $("#cityError").html('This field is mandatory!');
        } else {
            $("#cityError").html('Invalid City Name!');
        }
        invalidBorderStyle("city");
        $("#city")[0].setCustomValidity("Invalid City Name!");
        return false;
    }
}

function PINCodeValidation(param) {
    //console.log("inside pin code" + param);
    //console.log(param.toString().charAt(0));
    var clicked = 'not clicked';
    $('#pincode').on('click touchend', function (e) {
        clicked = e.type;
        if (e.type == 'click')
            console.log('Mouse Click');
        else
            console.log('Touch');
    });

    //console.log("text box : " + clicked);
    if (param.toString().length === 0 && clicked.toString() !== "click") {
        //console.log('pass pin fn');
        $('#pincodeError').hide();
        $("#pincodeError").html("");
        //console.log(param);
        //$("#pincode")[0].setCustomValidity("");
        validBorderStyle("pincode");
        return true;
    } else if (param.toString().charAt(0) === '0' || param.toString().length !== 6 || clicked.toString() === "click") {
        //console.log('fail pin fn');
        $('#pincodeError').show();
        if (param.toString().charAt(0) === '0') {
            $("#pincodeError").html("PIN code should not start with '0'!");
        } else if (param.toString().length !== 6) {
            $("#pincodeError").html("PIN code must be six digits!");
        } else {
            $("#pincodeError").html("PIN code not valid!");
        }
        invalidBorderStyle("pincode");
        $("#pincode")[0].setCustomValidity("Invalid PIN Code!");
        return false;
    } else {
        //console.log('pass pin fn');
        $('#pincodeError').hide();
        $("#pincodeError").html("");
        //console.log(param);
        //$("#pincode")[0].setCustomValidity("");
        validBorderStyle("pincode");
        return true;
    }
}

function loanAmountValidation(param) {
    if (param < 1 || isNaN(param)) {
        $('#loanAmountError').show();
        $("#loanAmountError").html('Enter Loan Amount');
        //console.log('loanAmountValidation fail');
        invalidBorderStyle("loanamount");
        $("#loanamount")[0].setCustomValidity("Invalid Amount!");
        return false;
    } else {
        $('#loanAmountError').hide();
        $("#loanAmountError").html('');
        //console.log('loanAmountValidation pass');
        validBorderStyle("loanamount");
        return true;
    }
}

function orderNumberValidation() {}

function invalidBorderStyle(idName) {
    $("#" + idName).append(function () {
        $(this).css("border-color", "red");
    });
}

function validBorderStyle(idName) {
    $("#" + idName).append(function () {
        $(this).css("border-color", "");
    });
}