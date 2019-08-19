function ValidEng() {
    this.commonReg = new CommonRegisterForm();
}

ValidEng.prototype.validateNameEnglish = function (name_iv) {
    if (en % 2 === 0) {
        return true;
    }
    const nameid = document.getElementById("name_and_Firstname");
    const paramValue = nameid.value;

    let marginEng1 = false;

    let arr = paramValue.split(' ');

    if (arr.length != 2) {
        const errorName = nameid.parentElement.querySelector('.message_inn');
        errorName.classList.add('error');
        errorName.innerHTML = '<br />' + 'Enter a name and first name through a space';
        marginEng1 = false;
        this.commonReg.styleError(name_iv.style);
        return false;
    }

    const isValidNameEnglish = this.isvalidateNameEnglishValue(paramValue);

    if (!isValidNameEnglish) {
        const errorName = nameid.parentElement.querySelector('.message_inn');
        errorName.innerHTML = '<br />' + 'Enter a name and first name through a space';
        errorName.classList.add('error');
        marginEng1 = false;
        this.commonReg.styleError(name_iv.style);
    } else {
        const errorName = nameid.parentElement.querySelector('.message_inn');
        errorName.innerHTML = '';
        name_iv.style.border = 'none';
        marginEng1 = true;
    }
    return marginEng1;
};

ValidEng.prototype.isvalidateNameEnglishValue = function (value) {
    const nameReqular = /^[A-Z][a-z]{2,}\040[A-Z][a-z]{2,}$/;

    let isValidName = false;

    if (nameReqular.test(value)) {
        isValidName = true;
    }
    return isValidName;
};