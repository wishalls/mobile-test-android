$(document).ready(function () {
    $(document).on('keydown', '#pan, #mobile', function (e) {
        if (e.keyCode == 32) return false;
    });

    $('input[name="firstname"]').attr({
        required: true,
        placeholder: "Enter First Name",
        //oninvalid: "this.setCustomValidity('Please Enter Valid First Name')",
        oninput: "this.setCustomValidity('')",
        autocomplete: "off",
        minlength: 01,
        maxlength: 25,
    });
    $('input[name="lastname"]').attr({
        required: true,
        placeholder: "Enter Last Name",
        //oninvalid: "this.setCustomValidity('Please Enter Valid Last Name')",
        oninput: "this.setCustomValidity('')",
        autocomplete: "off",
        minlength: 01,
        maxlength: 25,
    });
    $('input[name="mobile"]').attr({
        required: true,
        placeholder: "Enter Mobile Number",
        oninvalid: "this.setCustomValidity('Inalid Mobile Number')",
        oninput: "this.setCustomValidity('')",
        autocomplete: "off",
        minlength: 10,
        maxlength: 10,
    });

    $('input[name="email"]').attr({
        required: true,
        placeholder: "Enter Email Id",
        //oninvalid: "this.setCustomValidity('Please Enter Valid Email Id')",
        oninput: "this.setCustomValidity('')",
        autocomplete: "off",
    });
    $('input[name="city"]').attr({
        required: true,
        placeholder: "Enter City",
        //oninvalid: "this.setCustomValidity('Please Enter Valid City Name')",
        oninput: "this.setCustomValidity('')",
        autocomplete: "off",
        minlength: 01,
        maxlength: 20,
    });
    $('input[name="pincode"]').attr({
        // required: true,
        placeholder: "Enter PIN Code",
        // oninput: "this.setCustomValidity('')",
        autocomplete: "off",
        minlength: 06,
        maxlength: 06,
        //oninvalid: "this.setCustomValidity('Invalid PIN')",
    });
    $('input[name="income"]').attr({
        required: true,
        placeholder: "Select IncomeSegment",
        //oninvalid: "this.setCustomValidity('Please Select IncomeSegment')",
        oninput: "this.setCustomValidity('')",
        autocomplete: "off",
    });
    $('input[name="loanamount"]').attr({
        required: true,
        placeholder: "Enter Loan Amount",
        //oninvalid: "this.setCustomValidity('Please Enter Valid Loan Amount')",
        oninput: "this.setCustomValidity('')",
        autocomplete: "off",
        minlength: 01,
        maxlength: 09,
    });

    $('input[name="pan"]').attr({
        required: true,
        placeholder: "Enter PAN",
        minlength: 10,
        maxlength: 10,
        oninvalid: "this.setCustomValidity('Inalid PAN Number')",
        oninput: "this.setCustomValidity('')",
        style: "text-transform:uppercase",
        autocomplete: "off",
        //pattern: /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/,
    });
    $('input[name="ffOrderNumber"]').attr({
        required: true,
        maxlength: 12,
        //oninvalid: "this.setCustomValidity('Please Enter Valid Order Number')",
        oninput: "this.setCustomValidity('')",
        style: "text-transform:uppercase",
        autocomplete: "off",
    });

    $('input[name="dob"]').attr({
        required: true,
        placeholder: "dd/mm/yyyy",
        oninvalid: "this.setCustomValidity('Invalid date / Applicant should be above 18 years of age')",
        oninput: "this.setCustomValidity('')",
        autocomplete: "off",
        // maxlength: 10,
        // minlength: 10,
        // }).tooltip({
        //     disabled: true
        // }).on("focusin", function () {
        //     $(this)
        //         .tooltip("enable")
        // }).on("focusout", function () {
        //     $(this)
        //         .tooltip("disable");
    });
    $('#dobBox, #dob').click(function () {
        $("#dob").focus();
    });

    $('input[name="dob"]').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        yearRange: '1950:2030',
        // setDate: new Date(),
        maxDate: new Date((new Date().getFullYear() - 18), new Date().getMonth(), new Date().getDate() - 1),
        onClose: function () {
            this.focus();
        },
        onClose: function () {
            this.focus();
        }
    });
    // numbers only
    $("#pincode, #mobile, #loanamount").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    // charactorrs only
    $("#firstname, #lastname, #city").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40) || e.keyCode === 222) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 65 || e.keyCode > 90)) && (e.keyCode < 65 || e.keyCode > 90)) {
            e.preventDefault();
        }
    });

    $("#pan").keydown(function (event) {
        var alpha = /[ A-Za-z]/;
        var numeric = /[0-9]/;
        var panLength = $("#pan").val().length;

        if ($.inArray(event.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (event.keyCode >= 35 && event.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }

        if (panLength === 0 || panLength === 1 || panLength === 2 || panLength === 3 || panLength === 4 || panLength === 9) {
            var keyChar = String.fromCharCode(event.which || event.keyCode);
            return alpha.test(keyChar) ? keyChar : false;
        } else if (panLength === 5 || panLength === 6 || panLength === 7 || panLength === 8 || panLength === 8) {
            var keyChar = String.fromCharCode(event.which || event.keyCode);
            return numeric.test(keyChar) ? keyChar : false;
        }
    });

    $("#dob").keyup(function () {
        if ($(this).val().length == 2) {
            $(this).val($(this).val() + "/");
        } else if ($(this).val().length == 5) {
            $(this).val($(this).val() + "/");
        }
    });

});