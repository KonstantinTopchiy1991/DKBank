let DKBank_lang = document.getElementById('translate');
let kredit = document.getElementById('kredit');
let dep = document.getElementById('dep');
let buycard = document.getElementById('buycard');
let payfor = document.getElementById('payfor');
let regist = document.getElementById('regist');

let titleAdvertising1 = document.getElementById('titleAdvertising1');
let titleAdvertising2 = document.getElementById('titleAdvertising2');
let titleAdvertising3 = document.getElementById('titleAdvertising3');
let titleAdvertising4 = document.getElementById('titleAdvertising4');

let titleAdvertising1Text = document.getElementById('titleAdvertising1Text');
let titleAdvertising2Text = document.getElementById('titleAdvertising2Text');
let titleAdvertising3Text = document.getElementById('titleAdvertising3Text');
let titleAdvertising4Text = document.getElementById('titleAdvertising4Text');

let terms = document.getElementById('terms');
let titleRes = document.getElementById('titleRes');
let buttonfinish = document.getElementById('_register_button');

let name_and_Firstname = document.getElementById('name_and_Firstname');
let pasportNameForTranslate = document.getElementById('pasportNameForTranslate');
let placeOfBirth = document.getElementById('placeOfBirth');
let inn = document.getElementById('inn');
let phone = document.getElementById('phone');
let cardNumber = document.getElementById('cardNumber');
let email = document.getElementById('email');
let password_length = document.getElementById('password_length');
let check_Password = document.getElementById('check_Password');

let optionFace = document.getElementById('option_face');
let optionFace1 = document.getElementById('_select_face_value1');
let optionFace2 = document.getElementById('_select_face_value2');
let errorCheckbox = document.getElementById('errorCheckbox');

let name_iv = document.getElementById('_Name_klient');
let phone_div = document.getElementById('_phone_number');
let inn_div = document.getElementById('_Identification_number');
let face_div = document.getElementById('_face');
let passport_div = document.getElementById('_id_passport');
let date_div = document.getElementById('_date_passport');
let emailValue_div = document.querySelector('#_email_value');
let password_div = document.querySelector('#password_value');
let checkPassword_div = document.querySelector('#check_password_value');
let cardNum_div = document.querySelector('#_card_number');

let en = parseInt(Cookie.get('DKBank_lang')) || 2;


let defaultLanguage = {
    'cssprefix'  : 'tcal',
    'months'     : ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
    'weekdays'   : ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    'longwdays'  : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'yearscroll' : true, // show year scroller
    'weekstart'  : 0, // first day of week: 0-Su or 1-Mo
    'prevyear'   : 'Попередній рік',
    'nextyear'   : 'Наступний рік',
    'prevmonth'  : 'Попередній місяць',
    'nextmonth'  : 'Наступний місяць',
    'format'     : 'm/d/Y' // 'd-m-Y', Y-m-d', 'l, F jS Y'
};

window['tcalconf'] = defaultLanguage;

DKBank_lang.addEventListener('click', function() {
    let errorName = name_and_Firstname.parentElement.querySelector('.message_inn');
    errorName.innerHTML = '';
    name_iv.style.border = 'none';

    let errorPassport = pasportNameForTranslate.parentElement.querySelector('.message_inn');
    errorPassport.innerHTML = '';
    passport_div.style.border = 'none';

    let errorDate = placeOfBirth.parentElement.querySelector('.message_inn');
    errorDate.innerHTML = '';
    date_div.style.border = 'none';

    document.getElementById('message_phone').innerHTML = '';
    phone_div.style.border = 'none';

    let errorINN = inn.parentElement.querySelector('.message_inn').innerHTML = '';
    inn_div.style.border = 'none';

    document.getElementById('message_face').innerHTML = '';
    face_div.style.border = 'none';

    let errorCard = cardNumber.parentElement.querySelector('.text');
    errorCard.innerHTML = '';
    cardNum_div.style.border = 'none';

    let errorEmail = email.parentElement.querySelector('.text');
    errorEmail.innerHTML = '';
    emailValue_div.style.border = 'none';

    let errorPassword = password_length.parentElement.querySelector('.text');
    let errorCheckPassword = check_Password.parentElement.querySelector('.text');
    errorPassword.innerHTML = '';
    password_div.style.border = 'none';
    errorCheckPassword.innerHTML = '';
    checkPassword_div.style.border = 'none';

    errorCheckbox.hidden = true;

    name_and_Firstname.value = '';
    pasportNameForTranslate.value = '';
    placeOfBirth.value = '';
    inn.value = '';
    document.getElementById('_select_face').selectedIndex = 0;
    phone.value = '';
    cardNumber.value = '';
    email.value = '';
    password_length.value = '';
    check_Password.value = '';

    if(en % 2 === 0) {
        kredit.innerHTML = 'CREDIT';
        dep.innerHTML = 'DEPOSITS';
        buycard.innerHTML = 'DROP CARD';
        buycard.style.bottom = '0px';
        payfor.innerHTML = 'PAYMENTS';
        regist.innerHTML = 'REGISTRATION';

        titleAdvertising1.innerHTML = 'Stability';
        titleAdvertising2.innerHTML = 'Security of attachments';
        titleAdvertising3.innerHTML = 'Rates from 19% year';
        titleAdvertising4.innerHTML = 'Service 24/7';

        titleAdvertising1Text.innerHTML = 'We have been working on the Ukrainian market for more than 17 years';
        titleAdvertising2Text.innerHTML = 'Secure attachment attachment at a time when you need it';
        titleAdvertising3Text.innerHTML = 'The highest interest rates on the market';
        titleAdvertising4Text.innerHTML = 'A convenient client-bank app is always at your fingertips';

        terms.innerHTML = 'When registering, you agree to the <a class= "link" href="https://salon2116.ru/shop/reg_rules/" target="_blank">TERMS</a> of the Bank of the DCBank';
        titleRes.innerHTML = 'Customer registration';
        buttonfinish.innerHTML = 'Sign up now';

        name_and_Firstname.placeholder = 'Your name (first and last)*';
        pasportNameForTranslate.placeholder = 'Document №*';
        placeOfBirth.placeholder = 'Passport issue date*';
        inn.placeholder = 'RNTRC*';
        phone.placeholder = 'Phone number';
        cardNumber.placeholder = 'Card number';
        email.placeholder = 'Enter Email*';
        password_length.placeholder = 'Password*';
        check_Password.placeholder = 'Confirm Password*';

        name_and_Firstname.title = 'Enter a name and surname through the space';
        pasportNameForTranslate.title = 'Enter the series and passport number without spaces';
        placeOfBirth.title = 'Choose the date of receipt of the passport';
        inn.title = 'Enter the identification code without dots, com or other characters';
        phone.title = 'Enter your phone number without international code, no dashes, no spaces';
        cardNumber.title = 'Enter the card number - 16 digits';
        email.title = 'Enter an email address';
        password_length.title = 'A password must be at least 8 characters long and must have at least one capital letter and at least one digit';
        check_Password.title = 'Passwords do not match';


        optionFace.innerHTML = 'Physical person / Legal entity*';
        optionFace1.innerHTML = 'Physical person';
        optionFace2.innerHTML = 'Legal entity';

        errorCheckbox.innerHTML = 'Do you agree with the terms of the bank?'

        window['tcalconf'] = {
            'cssprefix'  : 'tcal',
            'months'     : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            'weekdays'   : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            'longwdays'  : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'yearscroll' : true, // show year scroller
            'weekstart'  : 0, // first day of week: 0-Su or 1-Mo
            'prevyear'   : 'Previous Year',
            'nextyear'   : 'Next Year',
            'prevmonth'  : 'Previous Month',
            'nextmonth'  : 'Next Month',
            'format'     : 'm/d/Y' // 'd-m-Y', Y-m-d', 'l, F jS Y'
        };

    }
    else {
        kredit.innerHTML = 'КРЕДИТИ';
        dep.innerHTML = 'ДЕПОЗИТИ';
        buycard.innerHTML = ' ЗАМОВИТИ КАРТУ';
        buycard.style.bottom = '11px';
        payfor.innerHTML = 'ПЛАТЕЖІ';
        regist.innerHTML = 'РЕЄСТРАЦІЯ';

        titleAdvertising1.innerHTML = 'Стабільність';
        titleAdvertising2.innerHTML = 'Безпека вкладень';
        titleAdvertising3.innerHTML = 'Ставки від 19% річних';
        titleAdvertising4.innerHTML = 'Обслуговування 24/7';

        titleAdvertising1Text.innerHTML = 'Ми працюємо на ринку України більше 17 років';
        titleAdvertising2Text.innerHTML = 'Безпечний вивід вкладень в той момент, коли Вам це необхідно';
        titleAdvertising3Text.innerHTML = 'Самі високі процентні ставки на ринку';
        titleAdvertising4Text.innerHTML = 'Зручний клієнт-банк додаток завжди під рукою';

        terms.innerHTML = 'При регістрації ви погоджуєтеся з <a class= "link" href="https://salon2116.ru/shop/reg_rules/" target="_blank">УМОВАМИ</a> банку ДКБанк';
        titleRes.innerHTML = 'Реєстрація Клієнта';
        buttonfinish.innerHTML = 'Зареєструватися';

        name_and_Firstname.placeholder = 'П.І.Б.*';
        pasportNameForTranslate.placeholder = 'Паспорт: серія, номер*';
        placeOfBirth.placeholder = 'Дата видачі паспорта*';
        inn.placeholder = 'РНОКПП клієнта*';
        phone.placeholder = 'Номер телефону';
        cardNumber.placeholder = 'Номер карти';
        email.placeholder = 'Введіть Email*';
        password_length.placeholder = 'Новий пароль*';
        check_Password.placeholder = 'Підтвердження пароля*';

        name_and_Firstname.title = 'Введіть прізвище, ім’я  та по-батькові  через пробіл';
        pasportNameForTranslate.title = 'Введіть серію і номер паспорта без пробілу';
        placeOfBirth.title = 'Оберіть дату отримання паспорту';
        inn.title = 'Введіть ідентифікаційний код без крапок, ком або інших знаків';
        phone.title = 'Введіть номер свого телефону без міжнародного коду, без тире, без пробілів';
        cardNumber.title = 'Введіть номер карти - 16 цифр';
        email.title = 'Введіть електрону адресу';
        password_length.title = 'Пароль повинен складатися мінімум з 8 символів і мати мінімум одну велику літеру і мінімум одну цифру';
        check_Password.title = 'Паролі не співпадають';

        optionFace.innerHTML = 'Фізична особа / Юридична особа*';
        optionFace1.innerHTML = 'Фізична особа';
        optionFace2.innerHTML = 'Юридична особа';
        errorCheckbox.innerHTML = 'Ви погоджуєтесь з умовами банку?'

        window['tcalconf'] = defaultLanguage;


    }
    Cookie.set('DKBank_lang', en, 7);
    en += 1;
});

DKBank_lang.dispatchEvent(new Event('click'));
