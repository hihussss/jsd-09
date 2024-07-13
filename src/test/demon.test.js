/* eslint-disable no-undef */

import { Demon  } from "../class/demon";



test ('DemonstonedFalse', () => {
    const demon = new Demon('archibald','demon')
    const expected = false
    const rezult = demon.getStoned()
    expect(rezult).toBe(expected)
})

test ('DemonStonnedTrue', () => {
    const demon = new Demon('archibald','demon')
    demon.setStoned()
    const expected = true
    const rezult = demon.getStoned()
    expect(rezult).toBe(expected)
})

test ('DemonAttack', () => {
    const demon = new Demon('archibald','demon')
    const expected = 100
    demon.setAttack(1)
    const rezult = demon.getAttack()
    expect(rezult).toBe(expected)
})

test('DemonAttackStoned', () => {
    const demon = new Demon('archibald','demon')
    demon.setStoned()
    const expected = 85
    demon.setAttack(2)
    const rezult = demon.getAttack()
    expect(rezult).toBe(expected)
})