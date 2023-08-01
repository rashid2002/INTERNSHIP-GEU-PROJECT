document.addEventListener("DOMContentLoaded", function (event) {
    const form = document.getElementById('registration');
    const name_error = document.getElementById('name-error');
    const PhoneNumber_error = document.getElementById('PhoneNumber-error');
    const Email_error = document.getElementById('E-mail-error');
    const Password_error = document.getElementById('password-error');
    var check1 = false, check2 = false, check3 = false, check4 = false;

    form.addEventListener('submit', e => {
        e.preventDefault();
        validate();
    })

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    const isValidPhoneNumber = phoneNumber => {
        var myPhoneRegex = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/i;
        if (myPhoneRegex.test(phoneNumber)) {
            return true;
        } else {
            return false;
        }
    }

    function validate() {
        const username = document.getElementById('name').value.trim();
        const phoneNumber = document.getElementById('PhoneNumber').value.trim();
        const emailId = document.getElementById('E-mail').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '') {
            name_error.style.display = 'inherit';
            document.getElementById('name').setAttribute("placeholder", "Enter Your Name");
            check1 = false;
        }
        else {
            name_error.style.display = 'none';
            check1 = true;
        }

        if (phoneNumber === '') {
            PhoneNumber_error.style.display = 'inherit';
            document.getElementById('PhoneNumber').setAttribute("placeholder", "Enter Phone Number");
            check2 = false;
        }
        else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
            PhoneNumber_error.style.display = 'inherit';
            document.getElementById('PhoneNumber').setAttribute("placeholder", "Enter Valid Phone Number");
            document.getElementById('PhoneNumber').value = "";
            check2 = false;
        }
        else if (!isValidPhoneNumber(phoneNumber)) {
            PhoneNumber_error.style.display = 'inherit';
            document.getElementById('PhoneNumber').setAttribute("placeholder", "Enter Valid Phone Number");
            document.getElementById('PhoneNumber').value = "";
            check2 = false;
        }
        else {
            PhoneNumber_error.style.display = 'none';
            check2 = true;
        }

        if (emailId == '') {
            check3 = true;
        }
        else if (!isValidEmail(emailId)) {
            Email_error.style.display = 'inherit';
            document.getElementById('E-mail').setAttribute("placeholder", "Enter Valid E-mail");
            document.getElementById('E-mail').value="";
            check3 = false;
        }
        else {
            Email_error.style.display = 'none';
            check3 = true;
        }

        if (password === '') {
            Password_error.style.display = 'inherit';
            document.getElementById('password').setAttribute("placeholder", "Enter Your Password");
            document.getElementById('password').value = "";
            check4 = false;
        }
        else if (password.length < 8) {
            Password_error.style.display = 'inherit';
            document.getElementById('password').setAttribute("placeholder", "atleast of length 8");
            document.getElementById('password').value = "";
            check4 = false;
        }
        else {
            Password_error.style.display = 'none';
            check4 = true;
        }

        if (check1 === true && check2 === true && check3 === true && check4 === true) {
            alert("Registration Successful");
            location.assign("login.html");
        }
    }
});