/* eslint-disable no-undef */

import { ArrayBufferConverter, getBuffer } from "../class/arraybuffer";


test('ArrayBufferConverterString', () => {
    const converter = new ArrayBufferConverter();
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
    const rezult = converter.toString(getBuffer())
    expect(rezult).toBe(expected)
})

test('ArrayBufferConverterLoad', () => {
    const converter = new ArrayBufferConverter();
    const expected = getBuffer()
    const rezult = converter.load()
    expect(rezult).toEqual(expected)
})


