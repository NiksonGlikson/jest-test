const square = require('./square');

describe('square', () => {
    let mockValue;
    //перед запуском каждого теста проводить какие-то операции
    beforeEach(() => {
        //допустим добавляем что-то в БД
        mockValue = Math.random();
    })
    //перед запуском вызовется только один раз
    beforeAll(() => {
        mockValue = Math.random();
    })
    test('Корректное значения', () => {
        // expect(square(2)).toBe(4);
        // //меньше чем пятерка
        // expect(square(2)).toBeLessThan(5);
        // //больше чем тройка
        // expect(square(2)).toBeGreaterThan(3);
        // //не undefined
        // expect(square(2)).toBeUndefined();
        // //больше чем тройка
        // expect(square(2)).toBeGreaterThan(3);
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })
    //запускаются уже после тестов
    afterEach(() => {
        //здесь хотим почистить базу данных или моки
        jest.clearAllMocks();
    })
    afterAll(() => {

    })
})