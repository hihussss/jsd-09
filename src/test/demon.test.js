/* eslint-disable no-undef */

import { Demon  } from "../class/demon";



test ('DemonstonedFalse', () => {
    const demon = new Demon('archibald','demon')
    const expected = false
    const rezult = demon.Stoned
    expect(rezult).toBe(expected)
})

test ('DemonStonnedTrue', () => {
    const demon = new Demon('archibald','demon')
    demon.Stoned = true
    const expected = true
    const rezult = demon.Stoned
    expect(rezult).toBe(expected)
})

test ('DemonAttack', () => {
    const demon = new Demon('archibald','demon')
    const expected = 100
    demon.Attack = 1
    const rezult = demon.Attack
    expect(rezult).toBe(expected)
})

test('DemonAttackStoned', () => {
    const demon = new Demon('archibald','demon')
    demon.Stoned = true
    const expected = 85
    demon.Attack = 2
    const rezult = demon.Attack
    expect(rezult).toBe(expected)
})