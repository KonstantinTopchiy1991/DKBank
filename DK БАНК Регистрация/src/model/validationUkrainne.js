function ValidUkr() {
    this.commonReg = new CommonRegisterForm();
}

ValidUkr.prototype.validateNameUkraine = function (name_iv) {
    if (en % 2 !== 0) {
        return false;
    }
    const param = document.getElementById("name_and_Firstname");
    const paramValue = param.value;
    let marginUkr1 = false;

    let arr = paramValue.split(' ');
    if (arr.length != 3) {
        let errorName = param.parentElement.querySelector('.message_inn');
        errorName.classList.add('error');
        errorName.innerHTML = '<br />' + 'Введіть ім’я, прізвище та по-батькові через пробіл';
        marginUkr1 = false;
        this.commonReg.styleError(name_iv.style);
        return true;
    }

    const isValidNameUkraine = this.isvalidateNameUkraineValue(paramValue);

    if (!isValidNameUkraine) {
        const errorName = param.parentElement.querySelector('.message_inn');
        errorName.innerHTML = '<br />' + 'Введіть прізвище, ім’я та по-батькові через пробіл';
        errorName.classList.add('error');
        marginUkr1 = false;
        this.commonReg.styleError(name_iv.style);
    }
    if (isValidNameUkraine) {
        marginUkr1 = true;
        const errorName = param.parentElement.querySelector('.message_inn');
        errorName.innerHTML = '';
        name_iv.style.border = 'none';
    }
    return marginUkr1;
};


ValidUkr.prototype.isvalidateNameUkraineValue = function (value) {
    const nameReqular = /^([ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ]|[ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,}|[ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,}\-([ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,}|(оглы)|(кызы)))\040[ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,}(\040[ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ][\x27йцукенгшщзхїфівапролджєячсмитьбю]{1,})?$/;

    let isValidName = false;

    if (nameReqular.test(value)) {
        isValidName = true;
    }
    return isValidName;
};

