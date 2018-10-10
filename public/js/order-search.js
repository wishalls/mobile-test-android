$("#ffOrderNumber").change(function () {
    ffOrderNumberValidation($(this).val().trim());
});

function ffOrderNumberValidation(param) {
    if (param < 1) {
        $('#ffOrderNumberError').show();
        $("#ffOrderNumberError").html('Order Number cannot be empty');
        invalidBorderStyle("ffOrderNumber");
        return false;

    } else {
        $('#ffOrderNumberError').hide();
        $("#ffOrderNumberError").html('');
        validBorderStyle("ffOrderNumber");
        return true;
    }
    // $('#ffOrderNumberError').hide();
    // $("#ffOrderNumberError").html('');
}

$('#orderSearch').submit(validationOrderSearch);

function validationOrderSearch() {
    var spinner = $('#loader');
    if (ffOrderNumberValidation) {
        spinner.show();
        return true;
    }
    spinner.hide();
    return false;
}


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