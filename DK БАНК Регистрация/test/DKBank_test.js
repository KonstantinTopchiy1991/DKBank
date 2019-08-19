describe('test CreditCardNumber Visa', () => {
    const testedData = [
        {
            'a': 4111111111111111,
            'expected': true
        },
        {
            'a': 4532169812478956,
            'expected': true
        },
        {
            'a': 1548566161665115,
            'expected': false
        }
    ];

    let registration;

    before(function () {
       registration = new CommonRegisterForm();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = registration.isValidCreditCard(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test CreditCardNumber MasterCard', () => {
    const testedData = [
        {
            'a': 5214963789654123,
            'expected': true
        },
        {
            'a': 5532169812478956,
            'expected': true
        },
        {
            'a': 9548566161665115,
            'expected': false
        }
    ];

    let registration;

    before(function () {
        registration = new CommonRegisterForm();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = registration.isValidCreditCard(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test Email Address', () => {
    const testedData = [
        {
            'a': 'address@mail.com',
            'expected': true
        },
        {
            'a': 'very.common@example.com',
            'expected': true
        },
        {
            'a': '我買@屋企.香港',
            'expected': false
        },
        {
            'a': 'чебурашка@ящик-с-апельсинами.юа',
            'expected': false
        },
        {
            'a': 'üñîçøðéexample.com',
            'expected': false
        }
    ];

    let registration;

    before(function () {
        registration = new CommonRegisterForm();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = registration.isValidEmailAddressValue(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test Password', () => {
    const testedData = [
        {
            'a': 'Qrtdb15624]dbhf',
            'expected': false
        },
        {
            'a': '@#$%R5hhjvhgg84',
            'expected': true
        },
        {
            'a': 'khgut9jgffPhgj',
            'expected': true
        },
        {
            'a': 'jgfyr5651616wzsxjjh@#$%',
            'expected': false
        },
        {
            'a': 'üñîçøðéexample.com',
            'expected': false
        }
    ];

    let registration;

    before(function () {
        registration = new CommonRegisterForm();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = registration.isValidPasswordValue(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test Phone Number', () => {
    const testedData = [
        {
            'a': '0(68)073-2-202',
            'expected': true
        },
        {
            'a': '0(50)342-4-454',
            'expected': true
        },
        {
            'a': '0(97)654-2-234',
            'expected': true
        },
        {
            'a': '0(96)856-4-423',
            'expected': true
        },
        {
            'a': '312312314151251412',
            'expected': false
        },
        {
            'a': 'asdasfasf',
            'expected': false
        },
        {
            'a': '-4=412=521as',
            'expected': false
        },
    ];

    let registration;

    before(function () {
        registration = new CommonRegisterForm();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = registration.isValidPhoneNumberValue(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test Identification Number', () => {
    const testedData = [
        {
            'a': '312323131231',
            'expected': true
        },
        {
            'a': '123456789012',
            'expected': true
        },
        {
            'a': '999999999999',
            'expected': true
        },
        {
            'a': '123123123123',
            'expected': true
        },
        {
            'a': 'aqweqwfafs',
            'expected': false
        },
        {
            'a': 'asdasf)((_+*asf',
            'expected': false
        },
        {
            'a': '-$31235(%)!@#',
            'expected': false
        },
    ];

    let registration;

    before(function () {
        registration = new CommonRegisterForm();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = registration.isValidINNValue(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test NameUkraine', () => {
    const testedData = [
        {
            'a': "Максюта Дмитро Миколайович",
            'expected': true
        },
        {
            'a': "Максюта Анастасія Андріївна",
            'expected': true
        },
        {
            'a': "Рахім Ізмаїлов Вєловинен",
            'expected': true
        },
        
    ];

    let registration;

    before(function () {
        registration = new ValidUkr();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = registration.isvalidateNameUkraineValue(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test NameEnglish', () => {
    const testedData = [
        {
            'a': "Maksyuta Dmitry",
            'expected': true
        },
        {
            'a': "Maksyuta Anastasia",
            'expected': true
        },
        {
            'a': "Hello World",
            'expected': true
        }
    ];

    let registration;

    before(function () {
        registration = new ValidEng();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = registration.isvalidateNameEnglishValue(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});

describe('test Passport seria', () => {
    const testedData = [
        {
            'a': 'РП095435',
            'expected': true
        },
        {
            'a': 'ЩК985345',
            'expected': true
        },
        {
            'a': 'КУ985333',
            'expected': true
        }
    ];

    let registration;

    before(function () {
        registration = new CommonRegisterForm();
    });

    for (let testSuit of testedData) {
        it(`test  value1 ${testSuit['a']} expected ${testSuit['expected']}`, function () {
            const act = registration.isvalidateIdPassportValue(testSuit['a']);
            assert.equal(act, testSuit['expected']);
        });
    }
});