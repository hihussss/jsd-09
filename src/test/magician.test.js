import { Magician } from "../class/magician";



test ('Magicianstoned', () => {
    const magician = new Magician('Gendalf','magician')
    const expected = false
    const rezult = magician.getStoned()
    expect(rezult).toBe(expected)
})


test ('MagicianStonnedTrue', () => {
    const magician = new Magician('Gendalf','magician')
    magician.setStoned()
    const expected = true
    const rezult = magician.getStoned()
    expect(rezult).toBe(expected)
})


test ('MagicianAttack', () => {
    const magician = new Magician('Gendalf','magician')
    const expected = 120
    magician.setAttack(1)
    const rezult = magician.getAttack()
    expect(rezult).toBe(expected)
})

test('MagicianAttackStoned', () => {
    const magician = new Magician('Gendalf','magician')
    magician.setStoned()
    const expected = 105
    magician.setAttack(2)
    const rezult = magician.getAttack()
    expect(rezult).toBe(expected)
})