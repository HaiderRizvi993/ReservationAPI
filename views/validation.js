// validation script here
//Create RegExp
//Method 001
//let regEx = /[a-z]{5,}/i;
//Method 002
//let regEx2 = new RegExp(/[a-z]/, 'i');
//Work same but method001 is more easy.


const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
    telephone: /^\d{11}$/,
    //username: /^([a-z\d ?]{3,12})/i,
    username: /^([a-z\d]{3,}) ?([a-z\d]{1,12})?$/i,
};

// validation function
function validate(field, regex) {

    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(patterns[e.target.attributes.name.value]);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});