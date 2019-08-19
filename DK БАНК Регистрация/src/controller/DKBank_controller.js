
function DKBank_controller() {

    this.comRegistration = new CommonRegisterForm();
    this.ukrRegistration = new ValidUkr();
    this.engRegistration = new ValidEng();

}

DKBank_controller.prototype.init = function () {

    const phone_div = document.getElementById('_phone_number');
    const inn_div = document.getElementById('_Identification_number');
    const face_div = document.getElementById('_face');
    const select_face = document.getElementById('_select_face');
    const selectFaceValue2 = document.getElementById('_select_face_value2');
    const cardNum_div = document.querySelector('#_card_number');
    const emailValue_div = document.querySelector('#_email_value');
    const password_div = document.querySelector('#password_value');
    const checkPassword_div = document.querySelector('#check_password_value');
    const name_iv = document.getElementById('_Name_klient');
    const passport_div = document.getElementById('_id_passport');
    const date_div = document.getElementById('_date_passport');
    const startPage = document.getElementById('startPage');
    const checkboxTerms = document.getElementById('checkbox');
    const register_button = document.getElementById('_register_button');
    let margin1, margin2, margin3, margin4, margin5, margin6, margin7, margin8, margin9, margin10;
    const self = this;

    register_button.addEventListener('click', function (e) {
        let margin4 = self.comRegistration.validPhone(phone_div);
        let margin6 = self.comRegistration.validFace(face_div);
        let margin5 = self.comRegistration.validINN(inn_div);
        let margin7 = self.comRegistration.validateCreditCardNumber(cardNum_div);
        let margin8 = self.comRegistration.validateEmailAddress(emailValue_div);
        let [margin9, margin10] = self.comRegistration.validatePassword(password_div, checkPassword_div);
        let marginUkr1 = self.ukrRegistration.validateNameUkraine(name_iv);
        let marginEng1 = self.engRegistration.validateNameEnglish(name_iv);
        let margin2 = self.comRegistration.validateIdPassport(passport_div);
        let margin3 = self.comRegistration.validateDatePassport(date_div);
        self.comRegistration.checkBoxTerms(checkboxTerms);
        self.comRegistration.endRegistration(startPage, [
            marginUkr1,
            marginEng1 ,
            margin2,
            margin3,
            // margin4,
            margin5,
            margin6,
            // margin7,
            margin8,
            margin9,
            margin10,
        ]);
    });
};

