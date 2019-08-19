let lang = document.getElementById('translate');
let kredit = document.getElementById('kredit');
let dep = document.getElementById('dep');
let buycard = document.getElementById('buycard');
let payfor = document.getElementById('payfor');
let regist = document.getElementById('regist');

let en  = parseInt(Cookie.get('lang')) || 2;
console.log(lang);

lang.addEventListener('click', function() {

    if(en % 2 === 0) {

        kredit.innerHTML = 'CREDIT';
        dep.innerHTML = 'DEPOSITS';
        buycard.innerHTML = 'DROP CARD';
        buycard.style.bottom = '0px';
        payfor.innerHTML = 'PAYMENTS';
        regist.innerHTML = 'REGISTRATION';

    }
    else {
        kredit.innerHTML = 'КРЕДИТИ';
        dep.innerHTML = 'ДЕПОЗИТИ';
        buycard.innerHTML = ' ЗАМОВИТИ КАРТУ';
        buycard.style.bottom = '11px';
        payfor.innerHTML = 'ПЛАТЕЖІ';
        regist.innerHTML = 'РЕЄСТРАЦІЯ';


    }
    Cookie.set('lang', en, 7);
    en += 1;
});

lang.dispatchEvent(new Event('click'));