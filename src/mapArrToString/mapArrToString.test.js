const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Корректное значения', () => {
        // чтобы сравнить именно содержимое, используем Equal и он не проверяет
        // равенство объекто, а только их значения
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('Мешанина', () => {
        expect(mapArrToStrings([1, 2, 3, undefined, null, 'fdfd'])).toEqual(['1', '2', '3']);
    })
    test('Пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('Отрицание', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    })
})