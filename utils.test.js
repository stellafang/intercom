import {toRadians, isWithin100Km, quickSort} from './utils'

describe('toRadians', () => {
    test('180 degrees is pi radians', () => {
        expect(toRadians(180)).toEqual(Math.PI)
    })
    test('360 degrees is 2pi radians', () => {
        expect(toRadians(360)).toEqual(2 * Math.PI)
    })
    test('-180 degrees is -pi radians', () => {
        expect(toRadians(-180)).toEqual(-Math.PI)
    })
    test('0 degrees is 0 radians', () => {
        expect(toRadians(0)).toEqual(0)
    })
})

describe('isWithin100Km', () => {
    test('same latlon should be within 100km', () => {
        expect(isWithin100Km(72, 72, 72, 72)).toBeTruthy()
    })
    test('valid latlon that should not be within 100km', () => {
        expect(isWithin100Km(72, 80, 72, 90)).toBeFalsy()
        expect(isWithin100Km(72, 80, 72, 83)).toBeFalsy()
        expect(isWithin100Km(-89, 90, -90, -90)).toBeFalsy()
    })
    test('valid latlon that should be within 100km', () => {
        expect(isWithin100Km(72, 80, 72, 81)).toBeTruthy()
        expect(isWithin100Km(72, 80, 72, 82)).toBeTruthy()
        expect(isWithin100Km(-89.3, 90, -90, -90)).toBeTruthy()
    })
    test('invalid lat', () => {
        expect(() => isWithin100Km(-91, 72, 72, 72)).toThrowError('Invalid latitude')
        expect(() => isWithin100Km(91, 72, 72, 72)).toThrowError('Invalid latitude')
        expect(() => isWithin100Km(72, 72, -91, 72)).toThrowError('Invalid latitude')
        expect(() => isWithin100Km(72, 72, 91, 72)).toThrowError('Invalid latitude')
    })

    test('invalid lon', () => {
        expect(() => isWithin100Km(72, 181, 72, 72)).toThrowError('Invalid longitude')
        expect(() => isWithin100Km(72, -181, 72, 72)).toThrowError('Invalid longitude')
        expect(() => isWithin100Km(72, 72, 72, 181)).toThrowError('Invalid longitude')
        expect(() => isWithin100Km(72, 72, 72, -181)).toThrowError('Invalid longitude')
    })
})

describe('quickSort', () => {
    const unsorted = [{value: 2}, {value: -5}, {value: 0}, {value: 38}, {value: 100}]
    const sorted = [{value: -5}, {value: 0}, {value: 2}, {value: 38}, {value: 100}]
    test('sorts unsorted array of objects in place', () => {
        expect(quickSort(unsorted, 0, unsorted.length - 1, "value")).toEqual(unsorted)
        expect(unsorted).toEqual(sorted)
    })
    test('needs correct object key to sort on, otherwise returns unsorted', () => {
        expect(quickSort(unsorted, 0, unsorted.length - 1, "incorrect_key")).toEqual(unsorted)
    })
})