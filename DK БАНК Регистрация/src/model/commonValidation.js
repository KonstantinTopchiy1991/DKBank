function CommonRegisterForm() {

}

// CommonRegisterForm.prototype.validateNameUkraine = function (name_iv) {
//     if (en % 2 != 0) {
//         return;
//     }
//     const param = document.getElementById("name_and_Firstname");
//     const paramValue = param.value;
//     let arr = paramValue.split(' ');
//     if (arr.length != 3) {
//         let errorName = param.parentElement.querySelector('.message_inn');
//         errorName.classList.add('error');
//         errorName.innerHTML = '<br />' + 'Введіть ім’я, прізвище та по-батькові через пробіл';
//         margin1 = 0;
//         this.styleError(name_iv.style);
//         return false;
//     }
//
//     const isValidNameUkraine = this.isvalidateNameUkraineValue(paramValue);
//
//     if (!isValidNameUkraine) {
//         const errorName = param.parentElement.querySelector('.message_inn');
//         errorName.innerHTML = '<br />' + 'Введіть прізвище, ім’я та по-батькові через пробіл';
//         errorName.classList.add('error');
//         margin1 = 0;
//         this.styleError(name_iv.style);
//     }
//     if (isValidNameUkraine) {
//         margin1 = 1;
//         const errorName = param.parentElement.querySelector('.message_inn');
//         errorName.innerHTML = '';
//         name_iv.style.border = 'none';
//     }
//
// };
//
// CommonRegisterForm.prototype.isvalidateNameUkraineValue = function (value) {
//     const nameReqular = /^([ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ]|[ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,}|[ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,}\-([ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,}|(оглы)|(кызы)))\040[ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,}(\040[ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,})?$/;
//
//     let isValidName = false;
//
//     if (nameReqular.test(value)) {
//         isValidName = true;
//     }
//     return isValidName;
// };

// CommonRegisterForm.prototype.validateNameEnglish = function (name_iv) {
//     if (en % 2 === 0) {
//         return;
//     }
//     const nameid = document.getElementById("name_and_Firstname");
//     const paramValue = nameid.value;
//
//     let arr = paramValue.split(' ');
//
//     if (arr.length != 2) {
//         const errorName = nameid.parentElement.querySelector('.message_inn');
//         errorName.classList.add('error');
//         errorName.innerHTML = '<br />' + 'Enter a name and first name through a space';
//         margin1 = 0;
//         this.styleError(name_iv.style);
//         return;
//     }
// ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//
//     const isValidNameEnglish = this.isvalidateNameEnglishValue(paramValue);
//
//     if (!isValidNameEnglish) {
//         const errorName = nameid.parentElement.querySelector('.message_inn');
//         errorName.innerHTML = '<br />' + 'Enter a name and first name through a space';
//         errorName.classList.add('error');
//         margin1 = 0;
//         this.styleError(name_iv.style);
//     } else {
//         const errorName = nameid.parentElement.querySelector('.message_inn');
//         errorName.innerHTML = '';
//         name_iv.style.border = 'none';
//         margin1 = 1;
//     }
// };

// CommonRegisterForm.prototype.isvalidateNameEnglishValue = function (value) {
//     const nameReqular = /^[A-Z][a-z]{2,}\040[A-Z][a-z]{2,}$/;
//
//     let isValidName = false;
//
//     if (nameReqular.test(value)) {
//         isValidName = true;
//     }
//     return isValidName;
// };

CommonRegisterForm.prototype.validateIdPassport = function (passport_div) {
    const idPasportMargin = document.getElementById("pasportNameForTranslate");
    const param = idPasportMargin.value;

    const isValidPassport = this.isvalidateIdPassportValue(param);
    let margin2 = false;

    if (!isValidPassport) {
        const errorName = idPasportMargin.parentElement.querySelector('.message_inn');
        if (en % 2 != 0) {
            errorName.innerHTML = '<br />' + 'Enter serial and passport number without spaces';
        } else {
            errorName.innerHTML = '<br />' + 'Введіть серію і номер паспорта без пробілу';
        }
        errorName.classList.add('error');
        margin2 = false;
        this.styleError(passport_div.style);
    } else {
        const errorName = idPasportMargin.parentElement.querySelector('.message_inn');
        errorName.innerHTML = '';
        passport_div.style.border = 'none';
        margin2 = true;
    }
    return margin2;
};

CommonRegisterForm.prototype.isvalidateIdPassportValue = function (value) {
    const pasportReqular = /^[А-ГҐДЕЄЖЗИІЇЙК-Я]{2}\d{6}$/;

    let isValidName = false;

    if (pasportReqular.test(value)) {
        isValidName = true;
    };
    return isValidName;
};

CommonRegisterForm.prototype.validateDatePassport = function (date_div) {
    const placeOfBirth = document.getElementById('placeOfBirth');
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 4;
    let years = date.getFullYear();
    let strt = placeOfBirth.value;
    let arrayDate = strt.split('/');

    let margin3 = false;

    if (placeOfBirth.value === "" || arrayDate[2] < 1900 || arrayDate[2] > 2017) {
        const errorName = placeOfBirth.parentElement.querySelector('.message_inn');
        if (en % 2 != 0) {
            errorName.innerHTML = '<br />' + 'Indicate the date of your passport';
        } else {
            errorName.innerHTML = '<br />' + 'Укажіть дату отримання паспорту';
        }
        errorName.classList.add('error');
        this.styleError(date_div.style);
        margin3 = false;
    } else {
        const errorName = placeOfBirth.parentElement.querySelector('.message_inn');
        errorName.innerHTML = '';
        date_div.style.border = 'none';
        margin3 = true;
    }
    return margin3;
};

CommonRegisterForm.prototype.maskPhone = function () {
    const element = document.getElementById('phone');
    let maskOptions = {
        mask: '0(00)000-0-000',
        lazy: false
    };
    const mask = new IMask(element, maskOptions);
};

CommonRegisterForm.prototype.validPhone = function (phone_div) {

    const phone = document.getElementById('phone');
    const myPhone = phone.value;

    let skipValidation = false;
    if(myPhone === '' || myPhone === '_(__)___-_-___'){
        skipValidation = true;
    }

    const isValidPhoneNumber = this.isValidPhoneNumberValue(myPhone);
    let margin4 = false;

    const arrayPhone = document.getElementById('phone').value.split('');
    if (!skipValidation && arrayPhone.length > 0 && (arrayPhone[0] != '0' || arrayPhone[2] === "_" || arrayPhone[3] === "_" || arrayPhone[5] === "_" || arrayPhone[6] === "_" || arrayPhone[7] === "_" || arrayPhone[9] === "_" || arrayPhone[11] === "_" || arrayPhone[12] === "_" || arrayPhone[13] === "_")) {
        if (en % 2 === 0) {
            document.getElementById('message_phone').innerHTML = '<br />' + 'Введіть номер свого телефону без міжнародного коду';
        } else {
            document.getElementById('message_phone').innerHTML = '<br />' + 'Еnter your phone number without international code';
        }
        margin4 = false;
        this.styleError(phone_div.style);
        return isValidPhoneNumber;
    } else {
        margin4 = true;
        document.getElementById('message_phone').innerHTML = '';
        phone_div.style.border = 'none';
    }
    return margin4;
};

CommonRegisterForm.prototype.isValidPhoneNumberValue = function (phoneValue) {
    const phoneReqular = /^\d[\d\(\)\ -]{4,14}\d$/;

    let isValidPhone = false;

    if (phoneReqular.test(phoneValue)) {
        isValidPhone = true;
    }
    return isValidPhone;
};

CommonRegisterForm.prototype.validINN = function (inn_div) {
    const inn_id = document.getElementById("inn");
    const inn = inn_id.value;

    let lenght = inn.length;
    const isValidInn = this.isValidINNValue(inn);
    let margin5 = false;

    if (lenght !== 10 || isValidInn) {
        const errorINN = inn_id.parentElement.querySelector('.message_inn');
        if (en % 2 != 0) {
            errorINN.innerHTML = '<br />' + 'Enter identification code without periods, commas or other characters';
        } else {
            errorINN.innerHTML = '<br />' + 'Введіть ідентифікаційний код без крапок, ком або інших знаків';
        }
        errorINN.classList.add('errorINN');
        this.styleError(inn_div.style);
        margin5 = false;
    }

    if (isValidInn && lenght === 10) {
        let errorINN = inn_id.parentElement.querySelector('.message_inn');
        errorINN.innerHTML = '';
        inn_div.style.border = 'none';
        margin5 = true;
    }
    return margin5;

};

CommonRegisterForm.prototype.isValidINNValue = function (INNValue) {
    const innReqular = /^[0-9]+$/;

    let isValidINN = false;

    if (innReqular.test(INNValue)) {
        isValidINN = true;
    };
    return isValidINN;
};

CommonRegisterForm.prototype.validFace = function (face_div) {
    let margin6 = false;

    if (document.getElementById('_select_face').selectedIndex == 0) {
        if (en % 2 != 0) {
            document.getElementById('message_face').innerHTML = '<br />' + 'Choose one of the options';
        } else {
            document.getElementById('message_face').innerHTML = '<br />' + 'Оберіть один з варіантів';
        }
        this.styleError(face_div.style);
    } else {
        document.getElementById('message_face').innerHTML = ' ';
        face_div.style.border = '';
        margin6 = true;
    }
    return margin6;
};

CommonRegisterForm.prototype.validateCreditCardNumber = function (cardNum_div) {

    const ccNum = document.getElementById("cardNumber");
    const value = ccNum.value;

    const isValid = this.isValidCreditCard(value);
    let margin7 = false;

    if (!isValid && value > 0) {
        let errorCard = ccNum.parentElement.querySelector('.text');
        if (en % 2 != 0) {
            errorCard.innerHTML = '<br />' + 'Enter the number of pictures';
        } else {
            errorCard.innerHTML = '<br />' + 'Введіть номер карти - 16 цифр';
        }
        errorCard.classList.add('error');
        this.styleError(cardNum_div.style);
        margin7 = false;
    }
    if (isValid) {
        let errorCard = ccNum.parentElement.querySelector('.text');
        errorCard.innerHTML = '';
        cardNum_div.style.border = 'none';
        margin7 = true;
    }
    return margin7;
};

CommonRegisterForm.prototype.isValidCreditCard = function (value) {

    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const masterCardRegEx = /^(?:5[1-5][0-9]{14})$/;
    let isValidCard = false;

    if (visaRegEx.test(value)) {
        isValidCard = true;
    }
    if (masterCardRegEx.test(value)) {
        isValidCard = true;
    }
    return isValidCard;
};

CommonRegisterForm.prototype.validateEmailAddress = function (emailValue_div) {
    const addressEmail = document.getElementById("email");
    const email = addressEmail.value;

    const isValidEmailAddress = this.isValidEmailAddressValue(email);
    let margin8 = false;

    if (!isValidEmailAddress) {
        const errorEmail = addressEmail.parentElement.querySelector('.text');
        if (en % 2 != 0) {
            errorEmail.innerHTML = '<br />' + 'Enter a valid email address';
        } else {
            errorEmail.innerHTML = '<br />' + 'Введіть коректну адресу';
        }
        errorEmail.classList.add('error');
        this.styleError(emailValue_div.style);
        margin8 = false;
    }
    if (isValidEmailAddress) {
        const errorEmail = addressEmail.parentElement.querySelector('.text');
        errorEmail.innerHTML = '';
        emailValue_div.style.border = 'none';
        margin8 = true;
    }
    return margin8;
};

CommonRegisterForm.prototype.isValidEmailAddressValue = function (emailValue) {
    const emailReqular = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    let isValidEmail = false;

    if (emailReqular.test(emailValue)) {
        isValidEmail = true;
    }
    return isValidEmail;
};

CommonRegisterForm.prototype.validatePassword = function (password_div, checkPassword_div) {
    const passwordValue = document.getElementById('password_length');
    const password = passwordValue.value;

    const checkPassword = document.getElementById('check_Password');
    const checkPassTrue = checkPassword.value;

    const isValidPassword = this.isValidPasswordValue(password);
    let margin9 = false;
    let margin10 = false;

    if (!isValidPassword) {
        const errorPassword = passwordValue.parentElement.querySelector('.text');
        if (en % 2 != 0) {
            errorPassword.innerHTML = '<br />' + 'The password must be at least 8 characters long and have at least one upper case, lower case letter and at least one number';
//            let cont = document.getElementsByClassName('register_form');
//            cont.style.marginBottom = '789px';
            password_div.style.marginBottom = '39px';
        } else {
            errorPassword.innerHTML = '<br />' + 'Пароль повинен складатися мінімум з 8 символів і мати мінімум одну велику, маленьку літери і мінімум одну цифру';
//            let cont = document.getElementsByClassName('register_form');
//            cont.style.marginBottom = '789px';
            password_div.style.marginBottom = '39px';
        }
        errorPassword.classList.add('error');
        this.styleError(password_div.style);
        margin9 = false;
    } else {
        const errorPassword = passwordValue.parentElement.querySelector('.text');
        errorPassword.innerHTML = '';
        password_div.style.border = 'none';
        password_div.style.marginBottom = '20px';
        margin9 = true;
    }

    if (password !== checkPassTrue) {
        const errorCheckPassword = checkPassword.parentElement.querySelector('.text');
        if (en % 2 != 0) {
            errorCheckPassword.innerHTML = '<br />' + 'Passwords do not match';
//            let cont = document.getElementsByClassName('register_form');
//            cont.style.marginBottom = '789px';
        } else {
            errorCheckPassword.innerHTML = '<br />' + 'Паролі не співпадають';
//            let cont = document.getElementsByClassName('register_form');
//            cont.style.marginBottom = '789px';
        }
        errorCheckPassword.classList.add('error');
        this.styleError(checkPassword_div.style);
    } else {
        const errorCheckPassword = checkPassword.parentElement.querySelector('.text');
        errorCheckPassword.innerHTML = '';
        checkPassword_div.style.border = 'none';
        margin10 = true;
    }

    return [margin9, margin10];

};

CommonRegisterForm.prototype.isValidPasswordValue = function (passwordValue) {
    const passwordReqular = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    let validPassword = false;

    if (passwordReqular.test(passwordValue)) {
        validPassword = true;
    }

    return validPassword;
};

CommonRegisterForm.prototype.checkBoxTerms = function (checkboxTerms) {
    const error = document.getElementById('errorCheckbox');

    if (checkboxTerms.checked === false) {
        error.hidden = false;
    } else {
        error.hidden = true;
    }

};

CommonRegisterForm.prototype.endRegistration = function (startPage, margins) {
    console.log(11111111);
    if (margins.every(function (e) {
        return !!e;
    })) {
        console.log(222222);
        startPage.click();
        const name = document.getElementById("name_and_Firstname").value = '';
        const passport = document.getElementById("pasportNameForTranslate").value = '';
        const placeOfBirth = document.getElementById('placeOfBirth').value = '';
        const myPhone = document.getElementById('phone').value = '';
        const inn_id = document.getElementById("inn").value = '';
        const ccNum = document.getElementById("cardNumber").value = '';
        const addressEmail = document.getElementById("email").value = '';
        const passwordValue = document.getElementById('password_length').value = '';
        const checkPassword = document.getElementById('check_Password').value = '';
    }
};

CommonRegisterForm.prototype.styleError = function (style) {
    style.border = '1px solid red';
    style.height = '43px';
    style.width = '548px';
};
