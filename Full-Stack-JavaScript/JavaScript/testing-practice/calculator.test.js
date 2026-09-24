const { isAdult, divide, subtract, createUser, getFruits, getUserName, isEmpty, findUser, getUserName1 } = require('./calculator')

const resultFruits = getFruits()
// const resultName = getUserName()


describe('subtract', () => {

    test('відняти два позитивних числа', () => {
        expect(subtract(20, 5)).toBe(15)
    })
    test('відняти нуль', () => {
        expect(subtract(15, 0)).toBe(15)
    })
    test('отримати відʼємний результат', () => {
        expect(subtract(5, 10)).toBe(-5)
    })
    test('відняти від нуля', () => {
        expect(subtract(0, 10)).toBe(-10)
    })

    test('відняти відʼємне число', () => {
        expect(subtract(10, -5)).toBe(15)
    })
})

test('перевірити обєкт', () => {
    expect(createUser('Serhii', 36)).toEqual({
        name: 'Serhii',
        age: 36,
    })
})

test('створений користувач має властивість ', () => {

    const user = createUser('Serhii', 36)
    expect(user).toHaveProperty('name', 'Serhii')
});

test('створений користувач має вік ', () => {

    const user = createUser('Serhii', 36)
    expect(user).toHaveProperty('age', 36)
});


describe("getFruits", () => {

    test("потрібний фрукт", () => {
        expect(resultFruits).toContain('apple')
    })
    test("потрібний фрукт", () => {
        expect(resultFruits).toContain('orange')
    })
    test('кількість фруктів', () => {

        expect(resultFruits).toHaveLength(3)
    })

})

test('getUserName кидає помилку для null', () => {
    expect(() => getUserName(null)).toThrow()
})

test('getUserName кидає помилку для undefined', () => {
    expect(() => getUserName(undefined)).toThrow()
})

test('перевірка на false', () => {
    expect(isEmpty()).toBeFalsy()
})

test('перевірка на відсутність користувача', () => {
    expect(findUser()).toBeNull()
})

test("ім'я користувача порожнє", () => {
    const user = { name: '' }

    expect(getUserName1(user)).toBe('')
}
)

test("ім'я користувача null", () => {
    const user = { name: null }

    expect(getUserName1(user)).toBeNull()
}
)

test("ім'я користувача undefined", () => {
    const user = {}

    expect(getUserName1(user)).toBeUndefined()
}
)

test('divide не можна ділити на нуль', () => {
    expect(() => divide(10, 0)).toThrow('Не можна ділити на нуль')
})


describe('isAdult', () => {

    test('людина 18 років є повнолітньою', () => {
        expect(isAdult(18)).toBe(true)
    })

    test('людина 25 років теж є повнолітньою', () => {
        expect(isAdult(25)).toBe(true)
    })

    test('людина 17 років не є повнолітньою', () => {
        expect(isAdult(17)).toBe(false)
    })

})