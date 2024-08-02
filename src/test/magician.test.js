import { Magician } from "../class/magician";



test ('Magicianstoned', () => {
    const magician = new Magician('Gendalf','magician')
    const expected = false
    const rezult = magician.Stoned
    expect(rezult).toBe(expected)
})


test ('MagicianStonnedTrue', () => {
    const magician = new Magician('Gendalf','magician')
    magician.Stoned = true
    const expected = true
    const rezult = magician.Stoned
    expect(rezult).toBe(expected)
})


test ('MagicianAttack', () => {
    const magician = new Magician('Gendalf','magician')
    const expected = 120
    magician.Attack = 1
    const rezult = magician.Attack
    expect(rezult).toBe(expected)
})

test('MagicianAttackStoned', () => {
    const magician = new Magician('Gendalf','magician')
    magician.Stoned = true
    const expected = 105
    magician.Attack = 2
    const rezult = magician.Attack
    expect(rezult).toBe(expected)
})